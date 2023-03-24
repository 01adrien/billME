<?php

namespace Src\App\Controllers;

use Src\Core\Attributes\Routes\Route;
use Src\Core\Interfaces\RendererInterface;
use Psr\Http\Message\ServerRequestInterface as Request;

class DashboardController
{
  public function __construct(private RendererInterface $renderer)
  {
  }

  #[Route(path: '/', name: 'dashboard', method: 'GET')]
  public function index(Request $request): string
  {
    return $this->renderer->render('index', ['path' => $request->getUri()->getPath(),]);
  }
}
