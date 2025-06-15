<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class CatalogSparesController extends AbstractController
{
    #[Route('/catalog-spares', name: 'catalog_spares')]
    public function index(): Response
    {
        return $this->render('pages/catalog_spares/index.twig', [
            'controller_name' => 'CatalogSparesController',
        ]);
    }
}
