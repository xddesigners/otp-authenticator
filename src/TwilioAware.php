<?php

declare(strict_types=1);

namespace XD\Twilio;

use Exception;
use libphonenumber\PhoneNumberFormat;
use libphonenumber\PhoneNumberType;
use OTPHP\TOTP;
use OTPHP\TOTPInterface;
use RuntimeException;
use SilverStripe\Core\Environment;
use SilverStripe\MFA\Store\StoreInterface;
use Twilio\Rest\Client;
use libphonenumber\PhoneNumberUtil;

trait TwilioAware
{
    /**
     * Get an instance of the TOTP handler service. The secret must already be defined and set to the StoreInterface.
     *
     * @param StoreInterface $store
     * @return TOTPInterface
     * @throws RuntimeException
     */
    protected function getTwilioClient(): Client
    {
        $sid = Environment::getEnv('TWILIO_ACCOUNT_SID');
        $token = Environment::getEnv('TWILIO_AUTH_TOKEN');
        return new Client($sid, $token);
    }

    protected function getVerifyService()
    {
        $serviceSid = Environment::getEnv('TWILIO_VERIFICATION_SID');
        $client = $this->getTwilioClient();
        return $client->verify->v2->services($serviceSid);
    }

    protected function sendSMSCodeTo($phone)
    {
        $service = $this->getVerifyService();
        return $service->verifications->create($phone, 'sms');
    }
    
    protected function verifySMSCode($phone, $code)
    {
        $service = $this->getVerifyService();
        return $service->verificationChecks->create($code, ['to' => $phone]);
    }

    protected function obfuscatePhone($phone)
    {
        return trim(substr($phone, 0, 4)) . ' ****** ' . trim(substr($phone, -2));
    }

    protected function validatePhone($phone, $region = null)
    {
        $phoneUtil = PhoneNumberUtil::getInstance();

        if ($region) {
            $region = strtoupper($region);
        }

        try {
            $parsedPhone = $phoneUtil->parse($phone, $region);
        } catch (Exception $e) {
            // unparsable phone number
            return false;
        }

        // Check valid number
        if (!$phoneUtil->isValidNumber($parsedPhone)) {
            return false;
        }

        // Check if mobile
        $type = $phoneUtil->getNumberType($parsedPhone);
        if ($type !== PhoneNumberType::MOBILE) {
            return false;
        }

        $formattedPhone = $phoneUtil->format($parsedPhone, PhoneNumberFormat::E164);
        return $formattedPhone;
    }
}
