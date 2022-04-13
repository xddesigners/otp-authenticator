<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator\Providers;

use Exception;
use libphonenumber\PhoneNumberType;
use libphonenumber\PhoneNumberUtil;
use SilverStripe\Core\Environment;
use Twilio\Rest\Client;

class TwilioProvider extends SendProvider
{
    public function send($code, $to): bool
    {
        $sid = Environment::getEnv('TWILIO_ACCOUNT_SID');
        $token = Environment::getEnv('TWILIO_AUTH_TOKEN');
        $from = Environment::getEnv('TWILIO_PHONE_NUMBER');
        $client = new Client($sid, $token);

        $message = $client->messages->create($to, [
            'from' => $from,
            'body' => $this->getMessage($code)
        ]);

        // todo check valid response
        return !empty($message);
    }

    public function getMessage($code): string
    {
        $message = _t(__CLASS__ . '.Message', 'Your authentication code is: {code}', null, ['code' => $code]);
        $this->extend('updateMessage', $message);
        return $message;
    }

    public function validate($to, $data): bool
    {
        $phoneUtil = PhoneNumberUtil::getInstance();
        $region = isset($data['region']) ? strtoupper($data['region']) : null;

        try {
            $parsedPhone = $phoneUtil->parse($to, $region);
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

        return true;
    }

    public function obfuscateTo($to): string
    {
        if (!$to) {
            return '';
        }

        return trim(substr($to, 0, 4)) . ' ****** ' . trim(substr($to, -2));
    }

    public function getFieldValidate(): string
    {
        return '^(?=(?:\D*\d){10,15}\D*$)\+?[0-9]{1,3}[\s-]?(?:\(0?[0-9]{1,5}\)|[0-9]{1,5})[-\s]?[0-9][\d\s-]{5,7}\s?(?:x[\d-]{0,4})?$';
    }

    public function getFieldType(): string
    {
        return 'phone';
    }

    public function getFieldLabel(): string
    {
        return _t(__CLASS__ . '.FieldLabel', 'Phone number');
    }

    public function getName(): string
    {
        return _t(__CLASS__ . '.NAME', 'sms code');
    }

    /**
     * Check if the proper env files have been set
     */
    public function enabled(): bool
    {
        $sid = Environment::getEnv('TWILIO_ACCOUNT_SID');
        $token = Environment::getEnv('TWILIO_AUTH_TOKEN');
        $from = Environment::getEnv('TWILIO_PHONE_NUMBER');
        return !empty($sid) && !empty($token) && !empty($from);
    }
}
