# SilverStripe OPT Authenticator

Log in to SilverStripe with an One Time Password

You can configure a provider to send trough SMS or use Email.

This module provides a authenticator that plugs in to the [silverstripe/mfa](https://github.com/silverstripe/silverstripe-mfa)
module.

The default providers that ship with this module:

* Email
* [Twilio](https://www.twilio.com/sms)
* [SMSTools](https://www.smstools.nl/)

## Requirements

* PHP ^7.4
* SilverStripe ^4.1
* silverstripe/mfa: ^4.0
* twilio/sdk: "^6.35"
* giggsey/libphonenumber-for-php: "^8.12"

## Installation

Install with Composer:

```bash
composer require xddesigners/otp-authenticator
```

The email provider is configured by default and requires no further setup.

If you want to change providers, to SMSTools for example, you can add the following to your .yml config:

```yml
SilverStripe\Core\Injector\Injector:
  XD\OTPAuthenticator\Providers\SendProvider:
    class: XD\OTPAuthenticator\Providers\SMSToolsProvider
    # The other providers:
    # class: XD\OTPAuthenticator\Providers\EmailProvider
    # class: XD\OTPAuthenticator\Providers\TwilioProvider
```

For Twillio and SMSTools you'll need to define authentication tokens in your environment:

```env
# Twilio API credentials
# (find here https://www.twilio.com/console)
TWILIO_ACCOUNT_SID="SID"
TWILIO_AUTH_TOKEN="TOKEN"
TWILIO_PHONE_NUMBER="PHONE NUMBER"

# SMS Tools credentials
SMS_TOOLS_CLIENT_ID="CLIENT_ID"
SMS_TOOLS_CLIENT_SECRET="CLIENT_SECRET"
```

### pass exisiting send to address

This can be an existing phone number, or if you use the email provider an existing email address.
On your member add the method `otpSendTo` that returns an `OTPSendTo` object.
The additional data can be used by the configured provider for validation and is also stored on the `RegisteredMethod`.
The SMS providers use an extra `region` property to validate the phone number for example.

```php
public function otpSendTo()
{
    return new OTPSendTo($member->Email, ['additional' => 'data']);
}
```

### create a custom send provider

If you want to make use of a different service to pass the code you can create a custom provider.
You'll need to extend the abstract `SendProvider` class and implement the required methods.

```php
class MySendProvider extends XD\OTPAuthenticator\Providers\SendProvider
{
/**
     * Send the code
     */
    public function send($code, $to): bool
    {}

    /**
     * Validate the send to address
     */
    public function validate($to, $data): bool
    {}
    
    /**
     * Add a regex to validate the input on the frond end
     */
    public function getFieldValidate(): string
    {}

    /**
     * method to check if the provider is properly set up
     */
    public function enabled(): bool
    {}

    /**
     * Obfuscate the sent to address.
     * So a user has a way to verify the sent address is correct 
     * but in a way an unallowed user couldn't make out the complete address
     */
    public function obfuscateTo($to): string
    {}
    
    /**
     * Register the field type to switch to.
     * Accepts phone, email, or text
     */
    public function getFieldType(): string
    {}

    /**
     * Register the field label
     */
    public function getFieldLabel(): string
    {}
}
```
