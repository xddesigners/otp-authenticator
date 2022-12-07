<?php

namespace XD\OTPAuthenticator\Extensions;

use Exception;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Core\Extension;
use SilverStripe\MFA\RequestHandler\BaseHandlerTrait;
use SilverStripe\MFA\Service\MethodRegistry;
use SilverStripe\Security\Security;
use XD\OTPAuthenticator\Exceptions\OTPException;
use XD\OTPAuthenticator\Method;
use XD\OTPAuthenticator\TOTPAware;

class OTPExtension extends Extension
{
    use BaseHandlerTrait;
    use TOTPAware;

    protected function handleRegisterTo(HTTPRequest $request)
    {
        $data = json_decode($request->getBody(), true);

        $sendTo = isset($data['sendTo']) ? $data['sendTo'] : null;
        $additional = isset($data['additional']) ? $data['additional'] : null;

        try {
            $obfuscatedTo = $this->registerOTPSendTo($sendTo, $additional);

            return static::jsonResponse([
                'view' => 'VALIDATE_CODE',
                'obfuscatedTo' => $obfuscatedTo,
            ]);
        } catch (OTPException $e) {
            return static::jsonResponse([
                'error' => $e->getMessage(),
            ]);
        }
    }

    protected function handleResendCode(HTTPRequest $request)
    {
        try {
            $sent = $this->resendOTPCode();

            return static::jsonResponse(array_filter([
                'sent' => $sent,
                'error' => !$sent ? _t(__CLASS__ . '.COULD_NOT_SEND_CODE', 'Could not send code') : null,
            ]));
        } catch (OTPException $e) {
            return static::jsonResponse([
                'error' => $e->getMessage(),
            ]);
        }
    }

    protected function registerOTPSendTo($to, $additional)
    {
        $store = $this->getStore();
        // $member = $store && $store->getMember() ? $store->getMember() : Security::getCurrentUser();
        $methodSegment = $store->getMethod();
        $method = MethodRegistry::singleton()->getMethodByURLSegment($methodSegment);

        if (!$method instanceof Method) {
            return throw new OTPException(_t(
                Method::class . '.INVALID_METHOD',
                'This endpoint should only be used by the OTP method',
            ));
        }

        $sendProvider = $method->getSendProvider();
        $fieldLabel = $sendProvider->getFieldLabel();

        if (!$to) {
            return new OTPException(_t(Method::class . '.NO_TO', 'No {fieldLabel} provided', null, [
                'fieldLabel' => $fieldLabel,
            ]));
        }

        if (!$sendProvider->validate($to, $additional)) {
            return new OTPException(_t(Method::class . '.INVALID_TO', 'No valid {fieldLabel} provided', null, [
                'fieldLabel' => $fieldLabel,
            ]));
        }

        $store->addState([
            'sendTo' => $to,
            'additional' => $additional,
        ]);

        $totpCode = $this->getCode($store);

        try {
            $sendProvider->send($totpCode, $to);
        } catch (Exception $ex) {
            return new OTPException(_t(Method::class . '.INVALID_TO', 'No valid {fieldLabel} provided', null, [
                'fieldLabel' => $fieldLabel,
            ]));
        }

        return $sendProvider->obfuscateTo($to);
    }

    protected function resendOTPCode()
    {
        $store = $this->getStore();
        $member = $store->getMember() ?: Security::getCurrentUser();
        $methodSegment = $store->getMethod();
        $method = MethodRegistry::singleton()->getMethodByURLSegment($methodSegment);

        if (!$method instanceof Method) {
            return new OTPException(_t(
                Method::class . '.INVALID_METHOD',
                'This endpoint should only be used by the OTP method',
            ));
        }

        $sendProvider = $method->getSendProvider();
        $fieldLabel = $sendProvider->getFieldLabel();

        if (!$member || !($to = $member->getOTPSendTo())) {
            return new OTPException(_t(
                Method::class . '.NO_MEMBER',
                "We couldn't find a {fieldLabel} in your account",
                null,
                [
                    'fieldLabel' => $fieldLabel,
                ],
            ));
        }

        // get the totp code
        $code = $this->getCode($store);

        try {
            $sent = $sendProvider->send($code, $to);
        } catch (Exception $ex) {
            return new OTPException(_t(Method::class . '.INVALID_TO', 'No valid {fieldLabel} provided', null, [
                'fieldLabel' => $fieldLabel,
            ]), 0, $ex);
        }

        return $sent;
    }

    // without the store is inaccesible
    public function getRequest()
    {
        return $this->owner->getRequest();
    }

    /**
     * Respond with the given array as a JSON response
     *
     * @param array $response
     * @param int $code The HTTP response code to set on the response
     * @return HTTPResponse
     */
    public static function jsonResponse(array $response, int $code = 200): HTTPResponse
    {
        return HTTPResponse::create(json_encode($response))
            ->addHeader('Content-Type', 'application/json')
            ->setStatusCode($code);
    }
}
