<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;
use JWTAuth;
use App\Http\Services\ArticleService;
use App\Exceptions\APIException;
use App\ArticleSource;

class ArticleController extends Controller
{
	public function index(Request $request) {
		$this->articleService = new ArticleService();

		return response()->json([
			'sources' => $this->articleService->fetchSources(),
		]);
	}

	public function fetchSources(Request $request) {
		$this->articleService = new ArticleService();

		return response()->json([
			'sources' => $this->articleService->fetchSources(),
		]);
	}

	public function fetchArticles() {
		$this->articleService = new ArticleService();
		return response()->json([
			'articles' => $this->articleService->fetchArticles(),
		]);
	}

	public function getSources() {
		return response()->json([
			'sources' => ArticleSource::all(),
		]);
	}

	public function getArticles($sourceId) {
		$articleSource = ArticleSource::find($sourceId);
		if (!$articleSource) {
			throw new APIException("SOURCE_NOT_FOUND");
		}	

		return response()->json([
			'sourceId' => $sourceId,
			'title' => $articleSource->name,
			'articles' => $articleSource->articles()->orderBy('created_at', 'DESC')->get(),
		]);
		
	}
}
