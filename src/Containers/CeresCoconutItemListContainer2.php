<?php

namespace Hundekrone\Containers;

use Plenty\Plugin\Templates\Twig;

class HundekroneItemListContainer2
{
    public function call(Twig $twig, $arg):string
    {
        return $twig->render('Hundekrone::Containers.ItemLists.ItemList2', ["item" => $arg[0]]);
    }
}