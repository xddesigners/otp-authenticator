<?php

namespace XD\Twilio;

use Exception;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Extension;
use SilverStripe\MFA\Authenticator\LoginHandler;
use SilverStripe\MFA\RequestHandler\BaseHandlerTrait;
use SilverStripe\Security\Security;

/**
 * @property LoginHandler owner
 */
class LoginHandlerExtension extends Extension
{
    use BaseHandlerTrait;
    // use VerificationHandlerTrait;
    // use RegistrationHandlerTrait;
    use TwilioAware;

    private static $url_handlers = [
        'GET mfa/resendCode' => 'resendTwilioCode'
    ];

    private static $allowed_actions = [
        'resendTwilioCode',
    ];

    public function resendTwilioCode(HTTPRequest $request)
    {
        // $phone ? 
        $store = $this->getStore();
        $member = $store->getMember() ?: Security::getCurrentUser();
        if ($member) {
            $mfaPhone = $member->getPhoneForMFA();
            if ($mfaPhone && $phone = $this->validatePhone($mfaPhone)) {
                // $hiddenPhone = $this->obfuscatePhone($phone);
                try {
                    $sent = $this->sendSMSCodeTo($phone);
                } catch (Exception $ex) {
                    $sent = false;
                }
            }
        }

        if ($sent && $sent->status === 'pending') {            
            return json_encode([
                'sent' => true
            ]);
        } else {
            return json_encode([
                'sent' => false,
                'error' => _t(__CLASS__ . '.COULD_NOT_SEND_CODE', 'Could not send code')
            ]);
        }
    }

    // without the store is inaccesible
    public function getRequest()
    {
        return $this->owner->getRequest();
    }
    // protected function getStore(): ?StoreInterface
    // {
    //     if (!$this->store) {
    //         $spec = Injector::inst()->getServiceSpec(StoreInterface::class);
    //         $class = is_string($spec) ? $spec : $spec['class'];
    //         $this->store = call_user_func([$class, 'load'], $this->owner->getRequest());
    //     }

    //     return $this->store;
    // }
}
