<?php

declare(strict_types=1);

namespace XD\Twilio;

use Exception;
use ParagonIE\ConstantTime\Base32;
use Psr\Log\LoggerInterface;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Environment;
use SilverStripe\Core\Extensible;
use SilverStripe\Core\Injector\Injectable;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\MFA\Exception\AuthenticationFailedException;
use SilverStripe\MFA\Method\Handler\RegisterHandlerInterface;
use SilverStripe\MFA\Service\EncryptionAdapterInterface;
use SilverStripe\MFA\State\Result;
use SilverStripe\MFA\Store\StoreInterface;
use SilverStripe\Security\Security;

/**
 * Handles registration requests using a time-based one-time password (TOTP) with the silverstripe/mfa module.
 */
class RegisterHandler implements RegisterHandlerInterface
{
    use Injectable;
    use Configurable;
    use Extensible;
    use TwilioAware;

    /**
     * The link to SilverStripe user help documentation for this authenticator.
     *
     * @config
     * @var string
     */
    private static $user_help_link = '';

    /**
     * The desired length of the TOTP secret. This affects the UI, since it is displayed to the user to be entered
     * manually if they cannot scan the QR code.
     *
     * @config
     * @var int
     */
    private static $secret_length = 16;

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
        $store->setState([
            'secret' => $this->generateSecret(),
        ]);

        $enabled = !empty(Environment::getEnv('TWILIO_VERIFICATION_SID'));

        $member = $store->getMember() ?: Security::getCurrentUser();
        if ($member) {
            // Phone is alreaddy known, so validate and send the message
            $mfaPhone = $member->getPhoneForMFA();
            if ($mfaPhone && $phone = $this->validatePhone($mfaPhone)) {
                $obfuscatedPhone = $this->obfuscatePhone($phone);
                try {
                    $this->sendSMSCodeTo($phone);
                } catch (Exception $ex) {
                    $enabled = false;
                    $this->getLogger()->debug($ex->getMessage(), $ex->getTrace());
                }
            }
        }

        $method = Injector::inst()->create(Method::class);
        return [
            'enabled' => $enabled,
            'obfuscatedPhone' => $obfuscatedPhone,
            'codeLength' => $method->getCodeLength(),
            'defaultCountry' => $method->getDefaultCountry(),
        ];
    }

    /**
     * Generates a TOTP secret to the configured maximum length
     *
     * @return string
     */
    protected function generateSecret(): string
    {
        $length = $this->config()->get('secret_length');
        return substr(trim(Base32::encodeUpper(random_bytes(64)), '='), 0, $length);
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
        $member = $store->getMember() ?: Security::getCurrentUser();

        // continue with code validation
        $code = $data['code'];
        if (!$code) {
            return Result::create(false, _t(__CLASS__ . '.INVALID_CODE', 'Provided code was not valid'));
        }
        
        if ($member) {
            $phone = $member->getPhoneForMFA();
        }

        if (!$phone) {
            return Result::create(false, _t(__CLASS__ . '.NO_PHONE_NUMBER', 'Phone number not provided'));
        }

        try {
            $verification = $this->verifySMSCode($phone, $code);
        } catch(Exception $ex) {
            $this->getLogger()->debug($ex->getMessage(), $ex->getTrace());
            return Result::create(false, _t(__CLASS__ . '.INVALID_CODE', 'Provided code was not valid'));
        }

        if (!$verification->valid) {
            return Result::create(false, _t(RegisterHandler::class . '.INVALID_CODE', 'Provided code was not valid'));
        }
        
        
        $key = Environment::getEnv('TWILIO_VERIFICATION_SID');
        if (empty($key)) {
            throw new AuthenticationFailedException(
                'Please define a TWILIO_VERIFICATION_SID environment variable'
            );
        }

        // Encrypt the TOTP secret before storing it
        $secret = Injector::inst()->get(EncryptionAdapterInterface::class)->encrypt(
            $store->getState()['secret'],
            $key
        );

        return Result::create()->setContext(['secret' => $secret]);
    }

    public function getDescription(): string
    {
        return _t(
            __CLASS__ . '.DESCRIPTION',
            'Authenticate with an code sent to your mobile phone'
        );
    }

    public function getSupportLink(): string
    {
        return (string) $this->config()->get('user_help_link');
    }

    public function getSupportText(): string
    {
        return _t(__CLASS__ . '.SUPPORT_LINK_DESCRIPTION', 'How to use an SMS code.');
    }

    public function getComponent(): string
    {
        return 'TwilioRegister';
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
