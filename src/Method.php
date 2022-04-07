<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator;

use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\MFA\Method\Handler\VerifyHandlerInterface;
use SilverStripe\MFA\Method\Handler\RegisterHandlerInterface;
use SilverStripe\MFA\Method\MethodInterface;
use SilverStripe\View\Requirements;
use XD\OTPAuthenticator\Handlers\RegisterHandler;
use XD\OTPAuthenticator\Handlers\VerifyHandler;
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
    
    /**
     * The time to keep the code alive in seconds
     *
     * @config
     * @var int
     */
    private static $code_period = 600;

    /**
     * The desired length of the TOTP secret. This affects the UI, since it is displayed to the user to be entered
     * manually if they cannot scan the QR code.
     *
     * @config
     * @var int
     */
    private static $secret_length = 16;

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
        return ModuleLoader::getModule('xddesigners/otp-authenticator')
            ->getResource('client/dist/images/otp.svg')
            ->getURL();
    }

    public function applyRequirements(): void
    {
        Requirements::javascript('xddesigners/otp-authenticator: client/dist/js/bundle.js');
        Requirements::css('xddesigners/otp-authenticator: client/dist/styles/bundle.css');
        Requirements::add_i18n_javascript('xddesigners/otp-authenticator: client/lang');
    }

    public function isAvailable(): bool
    {
        return $this->getSendProvider()->enabled();
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
