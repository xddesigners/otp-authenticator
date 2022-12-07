<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator\Providers;

use Exception;
use libphonenumber\PhoneNumberType;
use libphonenumber\PhoneNumberUtil;
use SilverStripe\Core\Environment;

class SMSToolsProvider extends SendProvider
{
    public function send($code, $to): bool
    {
        $clientId = Environment::getEnv('SMS_TOOLS_CLIENT_ID');
        $clientSecret = Environment::getEnv('SMS_TOOLS_CLIENT_SECRET');

        $ch = curl_init();
        $url = 'https://api.smsgatewayapi.com/v1/message/send';

        $data = [
            'message' => $this->getMessage($code),
            'to' => $to,
            'sender' => 'WHV',
        ];

        curl_setopt($ch, CURLOPT_URL, "${url}");
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_VERBOSE, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "X-Client-Id: ${clientId}",
            "X-Client-Secret: ${clientSecret}",
            'Content-Type: application/json',
        ]);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

        $response = curl_exec($ch);
        $body = json_decode($response, true);

        return isset($body['messageid']) && !empty($body['messageid']);
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
        $clientId = Environment::getEnv('SMS_TOOLS_CLIENT_ID');
        $clientSecret = Environment::getEnv('SMS_TOOLS_CLIENT_SECRET');

        return !empty($clientId) && !empty($clientSecret);
    }
}
