<?php

namespace App\Services;

use App\Repositories\AuthRepository;

class AuthService
{
    public function __construct(AuthRepository $repository)
    {
        $this->repository = $repository;
    }

    public function login($request)
    {
        return $this->repository->execLogin($request->only('email', 'password'));
    }

    public function logout($request)
    {
        return $this->repository->execLogout($request);
    }
}