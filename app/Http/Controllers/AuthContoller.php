<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use App\Services\AuthService;

class AuthContoller extends Controller
{
    public function __construct(AuthService $service)
    {
        $this->authService = $service;
    }

    // todo
    // public function login(AuthRequest $request)
    public function login(Request $request)
    {
        return $this->authService->login($request);
    }

    public function logout(Request $request)
    {
        return $this->authService->logout($request);
    }
}
