<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ContactsController extends AbstractController
{
    #[Route('/contacts', name: 'contacts')]
    public function index(): Response
    {
        return $this->render('pages/contacts/index.twig', [
            'controller_name' => 'ContactsController',
        ]);
    }
}
