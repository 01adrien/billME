<?php

namespace Src\Core\Renderer;

use DI\Container;
use Pagerfanta\Twig\Extension\PagerfantaExtension;
use Psr\Container\ContainerInterface;
use Src\Core\Renderer\TwigExtensions\RouterExtension;
use Src\Core\Router\Router;
use Symfony\Bridge\Twig\Extension\AssetExtension;
use Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension;
use Twig\Environment;
use Twig\Extra\Intl\IntlExtension;
use Twig\Loader\FilesystemLoader;

class TwigRendererFactory
{

    public function __invoke(Container $container): TwigRenderer
    {
        $loader = new FilesystemLoader(VIEWS_DIR);
        $twig = new Environment($loader, [
            'debug' => true,
            'cache' => false,
        ]);
        // $twig->addExtension(new IntlExtension());
        $twig->addExtension(new EntryFilesTwigExtension($container));
        $twig->addExtension(new AssetExtension($container->get('webpack_encore.packages')));
        $twig->addExtension(new RouterExtension($container->get(Router::class)));
        return new TwigRenderer($loader, $twig);
    }
}
