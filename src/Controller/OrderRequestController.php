<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class OrderRequestController extends AbstractController
{
    #[Route('/order-request', name: 'order-request')]
    public function index(): Response
    {
        return $this->render('pages/order-request/index.twig', [
            'controller_name' => 'OrderRequestController',
        ]);
    }
}
