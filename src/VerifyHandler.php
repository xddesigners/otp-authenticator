<?php

declare(strict_types=1);

namespace XD\Twilio;

use Exception;
use Psr\Log\LoggerInterface;
use RuntimeException;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Environment;
use SilverStripe\Core\Injector\Injectable;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\MFA\Exception\AuthenticationFailedException;
use SilverStripe\MFA\Method\Handler\VerifyHandlerInterface;
use SilverStripe\MFA\Model\RegisteredMethod;
use SilverStripe\MFA\Service\EncryptionAdapterInterface;
use SilverStripe\MFA\State\Result;
use SilverStripe\MFA\Store\StoreInterface;
use SilverStripe\Security\Security;
use Twilio\Rest\Client;

/**
 * Handles verification requests using a time-based one-time password (TOTP) with the silverstripe/mfa module.
 */
class VerifyHandler implements VerifyHandlerInterface
{
    use Injectable;
    use TwilioAware;

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

    public function start(StoreInterface $store, RegisteredMethod $method): array
    {
        $member = $store->getMember() ?: Security::getCurrentUser();
        if ($member) {
            try {
                $mfaPhone = $member->getPhoneForMFA();
                if ($mfaPhone && $phone = $this->validatePhone($mfaPhone)) {
                    $hiddenPhone = $this->obfuscatePhone($phone);
                }
            } catch (Exception $ex) {
                $this->getLogger()->debug($ex->getMessage(), $ex->getTrace());
            }
        }

        if (!$phone) {
            return [
                'enabled' => false
            ];
        }

        try {
            $this->sendSMSCodeTo($phone);
            $enabled = true;
        } catch (Exception $ex) {
            // noop: encryption may not be defined, so method should be disabled rather than application error
            $enabled = false;
            $this->getLogger()->debug($ex->getMessage(), $ex->getTrace());
        }

        return [
            'enabled' => $enabled,
            'phone' => $hiddenPhone,
            'codeLength' => $method->getMethod()->getCodeLength(),
        ];
    }

    public function verify(HTTPRequest $request, StoreInterface $store, RegisteredMethod $registeredMethod): Result
    {
        $data = json_decode($request->getBody(), true);
        $code = $data['code'];
        if (!$code) {
            return Result::create(false, _t(RegisterHandler::class . '.INVALID_CODE', 'Provided code was not valid'));
        }

        $member = $store->getMember() ?: Security::getCurrentUser();
        if ($member) {
            $phone = $member->getPhoneForMFA();
        }
    
        if (!$phone) {
            return Result::create(false, _t(RegisterHandler::class . '.INVALID_PHONE', 'Provided phone number was not valid'));
        }

        try {
            $verification = $this->verifySMSCode($phone, $code);
        } catch(Exception $ex) {
            $this->getLogger()->debug($ex->getMessage(), $ex->getTrace());
            return Result::create(false, _t(RegisterHandler::class . '.INVALID_PHONE', 'Provided phone number was not valid'));
        }
        
        if (!$verification->valid) {
            return Result::create(false, _t(RegisterHandler::class . '.INVALID_CODE', 'Provided code was not valid'));
        }

        return Result::create();
    }

    public function getComponent(): string
    {
        return 'TwilioVerify';
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
     * @return VerifyHandler
     */
    public function setLogger(LoggerInterface $logger): VerifyHandler
    {
        $this->logger = $logger;
        return $this;
    }
}
