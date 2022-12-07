<?php

declare(strict_types=1);

namespace XD\OTPAuthenticator\Handlers;

use Exception;
use Psr\Log\LoggerInterface;
use RuntimeException;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Injector\Injectable;
use SilverStripe\MFA\Method\Handler\VerifyHandlerInterface;
use SilverStripe\MFA\Model\RegisteredMethod;
use SilverStripe\MFA\State\Result;
use SilverStripe\MFA\Store\StoreInterface;
use XD\OTPAuthenticator\Method;
use XD\OTPAuthenticator\TOTPAware;

/**
 * Handles verification requests using a time-based one-time password (TOTP) with the silverstripe/mfa module.
 */
class VerifyHandler implements VerifyHandlerInterface
{
    use Injectable;
    use TOTPAware;

    /**
     * @var string[]
     */
    private static $dependencies = [
        'Logger' => '%$' . LoggerInterface::class . '.mfa',
    ];

    /**
     * @var LoggerInterface
     */
    protected $logger;

    public function start(StoreInterface $store, RegisteredMethod $registeredMethod): array
    {
        $data = json_decode((string)$registeredMethod->Data, true);
        if (!$data || !isset($data['secret'])) {
            throw new RuntimeException('TOTP secret is not available in the registered method data');
        }

        $method = $registeredMethod->getMethod();
        if (!$method instanceof Method) {
            return [
                'enabled' => false,
            ];
        }

        $secret = $this->decryptSecrey($data['secret']);
        $this->storeSecret($store, $secret);

        $sendProvider = $method->getSendProvider();
        $enabled = $sendProvider->enabled();
        $to = isset($data['sendTo']) ? $data['sendTo'] : null;
        $additional = isset($data['additional']) ? $data['additional'] : [];

        // Validate the send to address and send the code
        if ($to && $sendProvider->validate($to, $additional)) {
            $code = $this->getCode($store);

            try {
                $sendProvider->send($code, $to);
            } catch (Exception $ex) {
                $enabled = false;
                $this->getLogger()->debug($ex->getMessage(), $ex->getTrace());
            }
        } else {
            $enabled = false;
        }

        return [
            'enabled' => $enabled,
            'obfuscatedTo' => $sendProvider->obfuscateTo($to),
            'codeLength' => $method->getCodeLength(),
        ];
    }

    public function verify(HTTPRequest $request, StoreInterface $store, RegisteredMethod $registeredMethod): Result
    {
        $data = json_decode($request->getBody(), true);
        if (!$this->verifyCode($data['code'] ?? '', $store)) {
            return Result::create(false, _t(__CLASS__ . '.INVALID_CODE', 'Invalid code'));
        }

        return Result::create();
    }

    public function getComponent(): string
    {
        return 'OTPAuthenticatorVerify';
    }

    /**
     * @return LoggerInterface
     */
    public function getLogger(): ?LoggerInterface
    {
        return $this->logger;
    }

    /**
     * @param LoggerInterface $logger
     * @return VerifyHandler
     */
    public function setLogger(LoggerInterface $logger): VerifyHandler
    {
        $this->logger = $logger;

        return $this;
    }
}
