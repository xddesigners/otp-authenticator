<?php

namespace XD\OTPAuthenticator\Extensions;

use SilverStripe\Control\HTTPRequest;
use SilverStripe\MFA\Controller\AdminRegistrationController;

/**
 * @property AdminRegistrationController owner
 */
class AdminRegistrationControllerExtension extends OTPExtension
{
    private static $url_handlers = [
        'POST otp/registerto' => 'handleRegisterTo',
        'GET otp/resendcode' => 'handleResendCode',
    ];

    private static $allowed_actions = [
        'handleRegisterTo',
        'handleResendCode',
    ];

    public function handleRegisterTo(HTTPRequest $request)
    {
        return parent::handleRegisterTo($request);
    }

    public function handleResendCode(HTTPRequest $request)
    {
        return parent::handleResendCode($request);
    }
}
