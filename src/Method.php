<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator;

use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\MFA\Method\Handler\VerifyHandlerInterface;
use SilverStripe\MFA\Method\Handler\RegisterHandlerInterface;
use SilverStripe\MFA\Method\MethodInterface;
use SilverStripe\View\Requirements;
use XD\OTPAuthenticator\Providers\SendProvider;

/**
 * Enables one-time password (OTP) authentication for the silverstripe/mfa module.
 */
class Method implements MethodInterface
{
    use Configurable;

    /**
     * The code length
     *
     * @config
     * @var int
     */
    private static $code_length = 6;

    public function getName(): string
    {
        return _t(__CLASS__ . '.NAME', 'One time password');
    }

    public function getURLSegment(): string
    {
        return 'otp';
    }

    public function getVerifyHandler(): VerifyHandlerInterface
    {
        return Injector::inst()->create(VerifyHandler::class);
    }

    public function getRegisterHandler(): RegisterHandlerInterface
    {
        return Injector::inst()->create(RegisterHandler::class);
    }

    public function getSendProvider(): SendProvider
    {
        return Injector::inst()->create(SendProvider::class);
    }

    public function getThumbnail(): string
    {
        return '/otp-authenticator/client/dist/images/sms.svg';

        // return ModuleLoader::getModule('xddesigners/otp-authenticator')
        //     ->getResource('client/dist/images/sms.svg')
        //     ->getURL();
    }

    public function applyRequirements(): void
    {
        Requirements::javascript('/otp-authenticator/client/dist/js/bundle.js');
        Requirements::css('/otp-authenticator/client/dist/styles/bundle.css');
        Requirements::add_i18n_javascript('/otp-authenticator/client/lang');

        // Requirements::javascript('xddesigners/otp-authenticator: client/dist/js/bundle.js');
        // Requirements::css('xddesigners/otp-authenticator: client/dist/styles/bundle.css');
        // Requirements::add_i18n_javascript('xddesigners/otp-authenticator: client/lang');
    }

    /**
     * Twilio authentication is only available if the required environment variable is set.
     *
     * @return bool
     */
    public function isAvailable(): bool
    {
        // TODO: check what env ?
        return true;
        // return !empty(Environment::getEnv('TWILIO_VERIFICATION_SID'));
    }

    public function getUnavailableMessage(): string
    {
        return _t(__CLASS__ . '.NOT_CONFIGURED', 'This method has not been configured yet.');
    }

    /**
     * Get the configured length of the code
     *
     * @return int
     */
    public function getCodeLength(): int
    {
        return (int) $this->config()->get('code_length');
    }
}
