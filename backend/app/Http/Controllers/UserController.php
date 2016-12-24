<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;
use App\User;

class UserController extends Controller
{
	public function index(Request $request) {
		$accessToken = $request->input("token");
		$user = Socialite::driver('google')->userFromToken($accessToken);

		if (!User::where('email', $user->getEmail())->first()) {
			$userEmail = $user->getEmail();
			$userName = $user->getName();
			$newUser = new User;
			$newUser->name = $userName;
			$newUser->email = $userEmail;
			$newUser->save();
			return response()->json([
			    'user created' => $newUser->email,
			]);
		}
		

		return response()->json([
		    'email' => $user->getName(),
		]);
	}
}
