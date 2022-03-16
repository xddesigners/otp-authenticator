<?php

declare(strict_types=1);

namespace XD\Twilio;

use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Environment;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\MFA\Method\Handler\VerifyHandlerInterface;
use SilverStripe\MFA\Method\Handler\RegisterHandlerInterface;
use SilverStripe\MFA\Method\MethodInterface;
use SilverStripe\View\Requirements;

/**
 * Enables time-based one-time password (TOTP) authentication for the silverstripe/mfa module.
 */
class Method implements MethodInterface
{
    use Configurable;

    /**
     * The Twilio Verify code length
     *
     * @config
     * @var int
     */
    private static $code_length = 6;
    
    /**
     * The default country used for the phone input/validation
     *
     * @config
     * @var string
     */
    private static $default_country = 'nl';

    public function getName(): string
    {
        return _t(__CLASS__ . '.NAME', 'SMS code');
    }

    public function getURLSegment(): string
    {
        return 'twilio';
    }

    public function getVerifyHandler(): VerifyHandlerInterface
    {
        return Injector::inst()->create(VerifyHandler::class);
    }

    public function getRegisterHandler(): RegisterHandlerInterface
    {
        return Injector::inst()->create(RegisterHandler::class);
    }

    public function getThumbnail(): string
    {
        return ModuleLoader::getModule('xddesigners/twilio-authenticator')
            ->getResource('client/dist/images/sms.svg')
            ->getURL();
    }

    public function applyRequirements(): void
    {
        Requirements::javascript('xddesigners/twilio-authenticator: client/dist/js/bundle.js');
        Requirements::css('xddesigners/twilio-authenticator: client/dist/styles/bundle.css');
        Requirements::add_i18n_javascript('xddesigners/twilio-authenticator: client/lang');
    }

    /**
     * Twilio authentication is only available if the required environment variable is set.
     *
     * @return bool
     */
    public function isAvailable(): bool
    {
        return !empty(Environment::getEnv('TWILIO_VERIFICATION_SID'));
    }

    public function getUnavailableMessage(): string
    {
        return _t(__CLASS__ . '.NOT_CONFIGURED', 'This method has not been configured yet.');
    }

    /**
     * Get the configured length of the sms code
     *
     * @return int
     */
    public function getCodeLength(): int
    {
        return (int) $this->config()->get('code_length');
    }

    public function getDefaultCountry(): string
    {
        return (string) $this->config()->get('default_country');
    }
}
