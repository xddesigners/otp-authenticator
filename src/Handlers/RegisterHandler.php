<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator\Handlers;

use Exception;
use Psr\Log\LoggerInterface;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Extensible;
use SilverStripe\Core\Injector\Injectable;
use SilverStripe\MFA\Exception\AuthenticationFailedException;
use SilverStripe\MFA\Method\Handler\RegisterHandlerInterface;
use SilverStripe\MFA\Service\MethodRegistry;
use SilverStripe\MFA\State\Result;
use SilverStripe\MFA\Store\StoreInterface;
use XD\OTPAuthenticator\Method;
use XD\OTPAuthenticator\TOTPAware;

/**
 * Handles registration requests using a time-based one-time password (TOTP) with the silverstripe/mfa module.
 */
class RegisterHandler implements RegisterHandlerInterface
{
    use Injectable;
    use Configurable;
    use Extensible;
    use TOTPAware;

    /**
     * The link to SilverStripe user help documentation for this authenticator.
     *
     * @config
     * @var string
     */
    private static $user_help_link = '';

    /**
     * @var string[]
     */
    private static $dependencies = [
        'Logger' => '%$' . LoggerInterface::class . '.mfa',
    ];

    /**
     * @var LoggerInterface
     */
    protected $logger;

    public function start(StoreInterface $store): array
    {  
        $methodSegment = $store->getMethod();
        $method = MethodRegistry::singleton()->getMethodByURLSegment($methodSegment);
        
        if (!$method || !$method instanceof Method) {
            return [
                'enabled' => false
            ];
        }

        // Store the secret used by the code generator
        $this->storeSecret($store);
        
        $state = $store->getState();
        $sendProvider = $method->getSendProvider();
        $enabled = $sendProvider->enabled();
        
        $to = isset($state['sendTo']) ? $state['sendTo'] : null;
        $additional = isset($state['additional']) ? $state['additional'] : [];        

        // Validate the to addr and send the code
        if ($to && $sendProvider->validate($to, $additional)) {
            $code = $this->getCode($store);
            try {
                $sent = $sendProvider->send($code, $to);
            } catch (Exception $ex) {
                $enabled = false;
                $this->getLogger()->debug($ex->getMessage(), $ex->getTrace());
            }

        } else {
            // validation failed, let user set new number
            $to = '';
        }
        
        return [
            'enabled' => $enabled,
            'obfuscatedTo' => $sendProvider->obfuscateTo($to),
            'fieldType' => $sendProvider->getFieldType(),
            'fieldLabel' => $sendProvider->getFieldLabel(),
            'fieldValidate' => $sendProvider->getFieldValidate(),
            'codeLength' => $method->getCodeLength(),
        ];
    }

    /**
     * Validate the provided TOTP code and return the TOTP secret to be stored against the RegisteredMethod model.
     * Will throw an exception if the code is invalid.
     *
     * @param HTTPRequest $request
     * @param StoreInterface $store
     * @return Result
     * @throws AuthenticationFailedException
     */
    public function register(HTTPRequest $request, StoreInterface $store): Result
    {
        $data = json_decode($request->getBody(), true);
        if (!isset($data['code']) || !$data['code']) {
            return Result::create(false, _t(__CLASS__ . '.INVALID_CODE', 'Provided code was not valid'));
        }

        if (!$this->verifyCode($data['code'], $store)) {
            return Result::create(false, _t(__CLASS__ . '.INVALID_CODE', 'Provided code was not valid'));
        }

        // Encrypt the TOTP secret before storing it
        $state = $store->getState();
        $secret = $state['secret'];
        $secret = $this->encryptSecrey($secret);

        return Result::create()->setContext([
            'secret' => $secret,
            'sendTo' => $state['sendTo'],
            'additional' => $state['additional'],
        ]);
    }

    public function getDescription(): string
    {
        return _t(
            __CLASS__ . '.DESCRIPTION',
            'Authenticate with an one time password'
        );
    }

    public function getSupportLink(): string
    {
        return (string) $this->config()->get('user_help_link');
    }

    public function getSupportText(): string
    {
        return _t(__CLASS__ . '.SUPPORT_LINK_DESCRIPTION', 'How to use an one time password.');
    }

    public function getComponent(): string
    {
        return 'OTPAuthenticatorRegister';
    }

    /**
     * @return LoggerInterface
     */
    public function getLogger(): ?LoggerInterface
    {
        return $this->logger;
    }

    /**
     * @param LoggerInterface $logger
     * @return RegisterHandler
     */
    public function setLogger(LoggerInterface $logger): RegisterHandler
    {
        $this->logger = $logger;
        return $this;
    }
}
