<?php

namespace XD\OTPAuthenticator\Extensions;

use SilverStripe\ORM\DataExtension;
use SilverStripe\Security\Member;

/**
 * @property Member owner
 */
class MemberExtension extends DataExtension
{
    private static $db = [
        'OTPSend' => 'Varchar'
    ];

    public function updateCMSFields($fields)
    {
        $fields->removeByName('OTPSend');
    }

    public function getOTPSendTo()
    {
        $to = $this->owner->OTPSend;
        $this->owner->extend('updateOTPSendTo', $to);
        return $to;
    }
}
