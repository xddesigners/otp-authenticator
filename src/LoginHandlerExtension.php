<?php

namespace XD\Twilio;

use Exception;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Extension;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\MFA\Authenticator\LoginHandler;
use SilverStripe\MFA\RequestHandler\BaseHandlerTrait;
use SilverStripe\Security\Security;

/**
 * @property LoginHandler owner
 */
class LoginHandlerExtension extends Extension
{
    use BaseHandlerTrait;
    use TwilioAware;

    private static $url_handlers = [
        'POST mfa/registerphone' => 'registerPhone',
        'GET mfa/resendcode' => 'resendTwilioCode'
    ];

    private static $allowed_actions = [
        'registerPhone',
        'resendTwilioCode',
    ];

    /**
     * Register the phone number
     */
    public function registerPhone(HTTPRequest $request)
    {
        $data = json_decode($request->getBody(), true);
        $store = $this->getStore();
        $member = $store->getMember() ?: Security::getCurrentUser();

        if (!isset($data['phone'])) {
            return $this->owner->jsonResponse([
                'error' => _t(RegisterHandler::class . '.NO_PHONE_NUMBER', "Phone number not provided")
            ]);
        }

        $country = isset($data['country']) ? $data['country'] : Injector::inst()->create(Method::class)->getDefaultCountry();
        if ($member) {
            $member->MFAPhone = null;
            $member->write();
        }

        if (!$phone = $this->validatePhone($data['phone'], $country)) {
            return $this->owner->jsonResponse([
                'error' => _t(
                    RegisterHandler::class . '.INVALID_PHONE_NUMBER', 
                    "Phone number {phone} is invalid", null, ['phone' => $data['phone']]
                )
            ]);
        }

        if ($member) {
            $member->MFAPhone = $phone;
            $member->write();
        }

        try {
            $this->sendSMSCodeTo($phone);
        } catch (Exception $ex) {
            return $this->owner->jsonResponse([
                'error' => _t(
                    __CLASS__ . '.INVALID_PHONE_NUMBER', 
                    "Phone number {phone} is invalid", null, ['phone' => $data['phone']]
                )
            ]);
        }
        
        return $this->owner->jsonResponse([
            'view' => 'VALIDATE_CODE',
            'obfuscatedPhone' => $this->obfuscatePhone($phone)
        ]);
    }

    /**
     * Resend the sms code
     */
    public function resendTwilioCode(HTTPRequest $request)
    {
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
            return $this->owner->jsonResponse([
                'sent' => true
            ]);
        } else {
            return $this->owner->jsonResponse([
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
