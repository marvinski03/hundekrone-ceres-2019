<?php

namespace Hundekrone\Containers;

use Plenty\Plugin\Templates\Twig;

class HundekroneContainer
{
    public function call(Twig $twig):string
    {
        return $twig->render('Hundekrone::Stylesheet');
    }
}