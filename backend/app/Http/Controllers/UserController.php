<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
	public function index(Request $request) {
		$email = $request->input("email");

		return response()->json([
		    'email' => $email,
		]);
	}
}
