<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;
use JWTAuth;
use App\Http\Services\ArticleService;

class ArticleController extends Controller
{
	public function index(Request $request) {
		$this->articleService = new ArticleService();

		return response()->json([
			'sources' => $this->articleService->getSources(),
		]);
	}
}
