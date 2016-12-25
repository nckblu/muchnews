<?php

namespace App\Http\Services;

use App\ArticleSource;
use App\Article;
use GuzzleHttp\Client;

class ArticleService {

	public function __construct() {
		$this->API_KEY = env("NEWS_API_KEY");
		$this->API_URL = "https://newsapi.org/v1/";
		$this->client = new Client(['base_uri' => $this->API_URL]);
	}

	public function getSources() {
		$res = $this->client->get('sources?language=en&apiKey='.$this->API_KEY);
		if ($res->getStatusCode() === 200) {
			$sourcesResponse = json_decode($res->getBody()->getContents());
			$sources = $sourcesResponse->sources;
		}

		if (!$sources) {
			return;
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

	public function getArticles($sourceId) {

	} 
}