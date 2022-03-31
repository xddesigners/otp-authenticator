<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator\Providers;

use Exception;
use libphonenumber\PhoneNumberType;
use libphonenumber\PhoneNumberUtil;

class TwilioProvider extends SendProvider
{
    public function send($code, $to): bool
    {
        // send twilio sms
        return false;
    }

    public function getMessage($code): string
    {
        $message = _t(__CLASS__ . '.Message', 'Your authentication code is: <strong>{code}</strong>', null, ['code' => $code]);
        $this->extend('updateMessage', $message);
        return $message;
    }

    public function validate($to): bool
    {
        $phoneUtil = PhoneNumberUtil::getInstance();

        // TODO check region needed ?
        // if ($region) {
        //     $region = strtoupper($region);
        // }

        try {
            $parsedPhone = $phoneUtil->parse($to);//, $region);
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
        return trim(substr($to, 0, 4)) . ' ****** ' . trim(substr($to, -2));
    }

    public function getFieldType(): string
    {
        return 'phone';
    }

    public function getFieldLabel(): string
    {
        return _t(__CLASS__ . '.FieldLabel', 'Phone number');
    }
}
