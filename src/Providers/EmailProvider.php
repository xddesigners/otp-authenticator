<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator\Providers;

use SilverStripe\Control\Email\Email;
use SilverStripe\SiteConfig\SiteConfig;

class EmailProvider extends SendProvider
{
    public function send($code, $to): bool
    {
        $from = $this->getFrom(); 
        $subject = $this->getSubject();
        $message = $this->getMessage($code);
        $email = Email::create($from, $to, $subject, $message);
        $this->extend('updateEmail', $email);
        return $email->send();
    }

    public function getFrom(): string
    {
        $from = Email::config()->get('admin_email');
        $this->extend('updateFrom', $from);
        return $from;
    }

    public function getSubject(): string
    {
        $config = SiteConfig::current_site_config();
        $subject = _t(__CLASS__ . '.Subject', 'Your authentication code for {site}', null, ['site' => $config]);
        $this->extend('updateSubject', $subject);
        return $subject;
    }

    public function getMessage($code): string
    {
        $message = _t(__CLASS__ . '.Message', 'Your authentication code is: <strong>{code}</strong>', null, ['code' => $code]);
        $this->extend('updateMessage', $message);
        return $message;
    }

    public function obfuscateTo($to): string
    {
        // TODO show first 3 chars and all after @
        return $to;
    }

    public function validate($to): bool
    {
        return Email::is_valid_address($to);
    }

    public function getFieldType(): string
    {
        return 'email';
    }

    public function getFieldLabel(): string
    {
        return _t(__CLASS__ . '.FieldLabel', 'Email');
    }
}
