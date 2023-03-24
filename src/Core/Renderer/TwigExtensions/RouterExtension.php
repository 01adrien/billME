<?php

namespace Src\Core\Renderer\TwigExtensions;

use Src\Core\Router\Router;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class RouterExtension extends AbstractExtension
{
  public function getFunctions(): array
  {
    return [
      new TwigFunction('is_active', [$this, 'isActive'], ['is_safe' => ['html'],]),
    ];
  }

  public function isActive(string $path): string
  {
    return $_SERVER['REQUEST_URI'] === $path ? "class='text-blue-400'" : '';
  }
}
