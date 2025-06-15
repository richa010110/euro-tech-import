<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class CheckoutController extends AbstractController
{
    #[Route('/checkout', name: 'checkout')]
    public function index(): Response
    {
        return $this->render('pages/checkout/index.twig', [
            'controller_name' => 'CheckoutController',
        ]);
    }
}
