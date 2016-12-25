<?php

namespace App;

use App\ArticleSource;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
	public function source() {
		return $this->belongsTo('ArticleSource');
	}
}
