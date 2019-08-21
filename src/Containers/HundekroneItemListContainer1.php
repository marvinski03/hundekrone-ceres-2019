<?php

namespace Hundekrone\Containers;

use Plenty\Plugin\Templates\Twig;

class HundekroneItemListContainer1
{
    public function call(Twig $twig, $arg):string
    {
        return $twig->render('Hundekrone::Containers.ItemLists.ItemList1', ["item" => $arg[0]]);
    }
}