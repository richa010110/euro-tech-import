<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class CatalogController extends AbstractController
{
    #[Route('/catalog', name: 'catalog')]
    public function index(): Response
    {
        return $this->render('pages/catalog/index.twig', [
            'controller_name' => 'CatalogController',
        ]);
    }
}
