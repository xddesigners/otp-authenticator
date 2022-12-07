<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator\Types;

class OTPSendTo
{
    protected $to = null;

    protected $additional = [];

    public function __construct(string $to, array $additional = [])
    {
        $this->to = $to;
        $this->additional = $additional;
    }

    public function getTo(): string
    {
        return $this->to;
    }

    public function setTo(string $to): self
    {
        $this->to = $to;

        return $this;
    }

    public function getAdditional(): array
    {
        return $this->additional;
    }

    public function setAdditional(array $additional): self
    {
        $this->additional = $additional;

        return $this;
    }

    public function addAdditional(array $data): self
    {
        $this->additional = array_merge($this->additional, $data);

        return $this;
    }
}
