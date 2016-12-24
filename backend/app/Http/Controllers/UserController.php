<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;
use JWTAuth;
use App\User;

class UserController extends Controller
{
	public function authenticate(Request $request) {
		$accessToken = $request->input("token");
		$user = Socialite::driver('google')->userFromToken($accessToken);

		if (!User::where('email', $user->getEmail())->first()) {
			$userEmail = $user->getEmail();
			$userName = $user->getName();
			$newUser = new User;
			$newUser->name = $userName;
			$newUser->email = $userEmail;
			$newUser->save();

			$token = JWTAuth::fromUser($newUser);
			return response()->json([
				'token' => $token,
				'newUser' => true,
			]);
		} else {
			$token = JWTAuth::fromUser($user);
			return response()->json([
				'token' => $token,
			]);
		}
	}
}
