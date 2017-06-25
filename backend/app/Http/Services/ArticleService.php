<?php

namespace App\Http\Services;

use App\ArticleSource;
use App\Article;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;

class ArticleService {

	public function __construct() {
		$this->API_KEY = env("NEWS_API_KEY");
		$this->API_URL = "https://newsapi.org/v1/";
		$this->client = new Client(['base_uri' => $this->API_URL]);
	}

	public function fetchSources() {
		$res = $this->client->get('sources?language=en&apiKey='.$this->API_KEY);
		if ($res->getStatusCode() === 200) {
			$sourcesResponse = json_decode($res->getBody()->getContents());
			$sources = $sourcesResponse->sources;
		} else {
			return; // THRO EXCEPTION
		}

		if (!$sources) {
			return; // THRO EXCEPTION
		}

		foreach ($sources as $key => $source) {
			if (!ArticleSource::where('name_id', $source->id)->first()) {
				$articleSource = new ArticleSource();
				$articleSource->name = $source->name;
				$articleSource->name_id = $source->id;
				$articleSource->image_url = $source->urlsToLogos->large;
				$articleSource->description = $source->description;
				$articleSource->category = $source->category;
				$articleSource->sort_bys_available = json_encode($source->sortBysAvailable);
				$articleSource->save();
			}
		}

		return $sources;
	}

	public function fetchArticles() {
		$allArticleSources = ArticleSource::all();
		foreach ($allArticleSources as $key => $articleSource) {
			$articles = $articleSource->articles();
			$orderBy = json_decode($articleSource->sort_bys_available)[0];
			$nameId = $articleSource->name_id;
			$url = "articles?source=".$nameId."&sortBy=".$orderBy."&apiKey=".$this->API_KEY;
			$res = $this->client->get($url);
			if ($res->getStatusCode() === 200) {
				$articlesResponse = json_decode($res->getBody()->getContents());
				$newArticles = $articlesResponse->articles;
			} else {
				return; // THRO EXCEPTION
			}

			if (!$newArticles) {
				return; // THRO EXCEPTION
			}

			foreach ($newArticles as $key => $article) {
				if (DB::table('articles')->where('url', $article->url)->first() === null) {
					$articleToAdd = new Article;
					$articleToAdd->title = $article->title;
					$articleToAdd->content = $article->description;
					$articleToAdd->url = $article->url;
					$articleToAdd->image_url = $article->urlToImage;
					$articles->save($articleToAdd);
				}
			}



		}
	}

	public function getArticles($sourceId) {

	} 
}