<?php

namespace App\Repositories;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Exceptions\HttpResponseException;

class AuthRepository
{
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function execLogin(array $credentials)
    {
        $user = $this->user->where('email', $credentials['email'])->first();

        if (is_null($user)) {
            $response['errors']  = trans('auth.failed');
            throw new HttpResponseException(
                response()->json($response, 422)
            );
        }

        // if (password_verify($credentials['password'], $user->password)) {
        //     $user = User::where('email', $credentials['email'])->update(['api_token' => Str::random(60)]);

        //     return response()->json([], 200);
        // }
        if (Auth::attempt($credentials)) {
            User::where('email', $credentials['email'])->update(['api_token' => Str::random(60)]);
            return response()->json([], 200);
        }
    }

    public function execLogout($request)
    {
        $token = Str::replaceFirst('Bearer ', '', $request->header('Authorization'));
        \Log::debug(['@@@', $token]);
        $user = User::where('api_token', $token)->first();
        if($user) {
            User::where('id', $user->id)->update(['api_token' => null]);
            return response()->json([], 200);
        }

        throw new HttpResponseException(
            response()->json([], 422)
        );
    }
}