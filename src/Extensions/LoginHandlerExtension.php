<?php

namespace XD\OTPAuthenticator\Extensions;

use Exception;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Extension;
use SilverStripe\MFA\Authenticator\LoginHandler;
use SilverStripe\MFA\RequestHandler\BaseHandlerTrait;
use SilverStripe\MFA\Service\MethodRegistry;
use SilverStripe\Security\Security;
use XD\OTPAuthenticator\Method;
use XD\OTPAuthenticator\TOTPAware;

/**
 * @property LoginHandler owner
 */
class LoginHandlerExtension extends Extension
{
    use BaseHandlerTrait;
    use TOTPAware;

    // todo add methods to schema ?
    private static $url_handlers = [
        'POST mfa/otp/registerto' => 'registerOTPSendTo',
        'GET mfa/otp/resendcode' => 'resendOTPCode',
    ];

    private static $allowed_actions = [
        'registerOTPSendTo',
        'resendOTPCode',
    ];

    /**
     * Register the send to
     */
    public function registerOTPSendTo(HTTPRequest $request)
    {
        $data = json_decode($request->getBody(), true);
        $store = $this->getStore();
        // $member = $store && $store->getMember() ? $store->getMember() : Security::getCurrentUser();
        $methodSegment = $store->getMethod();
        $method = MethodRegistry::singleton()->getMethodByURLSegment($methodSegment);

        if (!$method instanceof Method) {
            return $this->owner->jsonResponse([
                'error' => _t(
                    Method::class . '.INVALID_METHOD',
                    'This endpoint should only be used by the OTP method',
                ),
            ]);
        }

        // get the sender provider
        $sendProvider = $method->getSendProvider();
        $fieldLabel = $sendProvider->getFieldLabel();

        if (!isset($data['sendTo'])) {
            return $this->owner->jsonResponse([
                'error' => _t(Method::class . '.NO_TO', 'No {fieldLabel} provided', null, [
                    'fieldLabel' => $fieldLabel,
                ]),
            ]);
        }

        $to = $data['sendTo'];
        $additional = $data['additional'];
        if (!$sendProvider->validate($to, $additional)) {
            return $this->owner->jsonResponse([
                'error' => _t(Method::class . '.INVALID_TO', 'No valid {fieldLabel} provided', null, [
                    'fieldLabel' => $fieldLabel,
                ]),
            ]);
        }

        $store->addState([
            'sendTo' => $to,
            'additional' => $additional,
        ]);

        // get the totp code
        $code = $this->getCode($store);

        try {
            $sendProvider->send($code, $to);
        } catch (Exception $ex) {
            return $this->owner->jsonResponse([
                'error' => _t(Method::class . '.INVALID_TO', 'No valid {fieldLabel} provided', null, [
                    'fieldLabel' => $fieldLabel,
                ]),
            ]);
        }

        return $this->owner->jsonResponse([
            'view' => 'VALIDATE_CODE',
            'obfuscatedTo' => $sendProvider->obfuscateTo($to),
        ]);
    }

    /**
     * Resend the sms code
     */
    public function resendOTPCode(HTTPRequest $request)
    {
        $store = $this->getStore();
        $member = $store->getMember() ?: Security::getCurrentUser();
        $methodSegment = $store->getMethod();
        $method = MethodRegistry::singleton()->getMethodByURLSegment($methodSegment);

        if (!$method instanceof Method) {
            return $this->owner->jsonResponse([
                'error' => _t(
                    Method::class . '.INVALID_METHOD',
                    'This endpoint should only be used by the OTP method',
                ),
            ]);
        }

        $sendProvider = $method->getSendProvider();
        $fieldLabel = $sendProvider->getFieldLabel();

        if (!$member || !($to = $member->getOTPSendTo())) {
            return $this->owner->jsonResponse([
                'error' => _t(Method::class . '.NO_MEMBER', "We couldn't find a {fieldLabel} in your account", null, [
                    'fieldLabel' => $fieldLabel,
                ]),
            ]);
        }

        // get the totp code
        $code = $this->getCode($store);

        try {
            $sent = $sendProvider->send($code, $to);
        } catch (Exception $ex) {
            return $this->owner->jsonResponse([
                'error' => _t(Method::class . '.INVALID_TO', 'No valid {fieldLabel} provided', null, [
                    'fieldLabel' => $fieldLabel,
                ]),
            ]);
        }

        return $this->owner->jsonResponse(array_filter([
            'sent' => $sent,
            'error' => !$sent ? _t(__CLASS__ . '.COULD_NOT_SEND_CODE', 'Could not send code') : null,
        ]));
    }

    // without the store is inaccesible
    public function getRequest()
    {
        return $this->owner->getRequest();
    }
}
