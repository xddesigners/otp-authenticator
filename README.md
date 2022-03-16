# SilverStripe Twilio Authenticator

Log in to SilverStripe with Twilio using their Verify service.

This module provides a authenticator that plugs in to the [silverstripe/mfa](https://github.com/silverstripe/silverstripe-mfa)
module.

For more information about Twilio Verify (Authy), see [Twilio](https://www.twilio.com/verify).

## Requirements

* PHP ^7.1
* SilverStripe ^4.1
* silverstripe/mfa: ^4.0
* twilio/sdk: "^6.35"
* giggsey/libphonenumber-for-php: "^8.12"

## Installation

Install with Composer:

```
composer require xddesigners/twilio-authenticator ^4.0
```

In your environment you'll need to define the following values:

```
# Twilio API credentials
# (find here https://www.twilio.com/console)
TWILIO_ACCOUNT_SID="SID"
TWILIO_AUTH_TOKEN="TOKEN"

# Verification Service SID
# (create one here https://www.twilio.com/console/verify/services)
TWILIO_VERIFICATION_SID="SID"
```
