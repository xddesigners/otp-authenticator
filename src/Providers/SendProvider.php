<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator\Providers;

use SilverStripe\Core\Extensible;
use SilverStripe\Core\Injector\Injectable;

abstract class SendProvider
{
    use Extensible;
    use Injectable;

    /**
     * Send the code
     */
    abstract public function send($code, $to): bool;

    /**
     * Validate the send to address
     */
    abstract public function validate($to, $data): bool;
    
    /**
     * Add a regex to validate the input on the frond end
     */
    abstract public function getFieldValidate(): string;

    /**
     * method to check if the provider is properly set up
     */
    abstract public function enabled(): bool;

    /**
     * Obfuscate the sent to address.
     * So a user has a way to verify the sent address is correct 
     * but in a way an unallowed user couldn't make out the complete address
     */
    abstract public function obfuscateTo($to): string;
    
    /**
     * Register the field type to switch to.
     * Accepts phone, email, or text
     */
    abstract public function getFieldType(): string;

    /**
     * Register the field label
     */
    abstract public function getFieldLabel(): string;
}
