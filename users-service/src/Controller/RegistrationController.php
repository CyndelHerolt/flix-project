<?php

namespace App\Controller;

use App\Service\UserService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController
{
    public UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    #[Route('/register', name: 'register', methods: ['POST'])]
    public function register(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (empty($data['username']) || empty($data['mail']) || empty($data['password'])) {
            return new JsonResponse(['error' => 'Expecting mandatory parameters!'], 400);
        }

        $user = $this->userService->createUser($data['username'], $data['mail'], $data['password']);

        return new JsonResponse(['status' => 'User created!', 'userId' => $user->getId()], 201);
    }
}