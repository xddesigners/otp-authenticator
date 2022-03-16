<?php

namespace XD\Twilio;

use SilverStripe\ORM\DataExtension;
use SilverStripe\Security\Member;

/**
 * @property Member owner
 */
class MemberExtension extends DataExtension
{
    private static $db = [
        'MFAPhone' => 'Varchar'
    ];

    public function getPhoneForMFA()
    {
        if ($this->owner->hasMethod('getTwilioPhone')) {
            return $this->owner->getTwilioPhone();    
        }

        return $this->owner->MFAPhone;
    }
}