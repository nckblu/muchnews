<?php

namespace App;
use App\Article;
use Illuminate\Database\Eloquent\Model;

class ArticleSource extends Model
{
    public function articles() {
    	return $this->hasMany('App\Article');
    }
}
