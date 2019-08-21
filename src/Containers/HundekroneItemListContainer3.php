<?php

namespace Hundekrone\Containers;

use Plenty\Plugin\Templates\Twig;

class HundekroneItemListContainer3
{
    public function call(Twig $twig, $arg):string
    {
        return $twig->render('Hundekrone::Containers.ItemLists.ItemList3', ["item" => $arg[0]]);
    }
}