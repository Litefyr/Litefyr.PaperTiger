<?php

namespace Litefyr\PaperTiger\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Security\Cryptography\HashService;

#[Flow\Scope('singleton')]
class FormController extends ActionController
{
    #[Flow\Inject]
    protected HashService $hashService;

    public function hmacAction(): string
    {
        $hmac = $this->hashService->appendHmac((string) time());

        $this->response->setHttpHeader('Hmac', $hmac);
        return '';
    }
}
