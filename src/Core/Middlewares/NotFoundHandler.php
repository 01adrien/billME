<?php

namespace Src\Core\Middlewares;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class NotFoundHandler implements RequestHandlerInterface
{
  /**
   * Handles a request and produces a response.
   *
   * May call other collaborating code to generate the response.
   *
   * @param ServerRequestInterface $request
   * @return ResponseInterface
   */
  public function handle(ServerRequestInterface $request): ResponseInterface
  {
    return new Response(404, [], '<h1>' .  $request->getUri()->getPath() . ' not found on this server</h1>');
  }
}
