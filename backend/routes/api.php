<?php

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ArticleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/login', function (Request $request) {
//     $user = User::create("test");
// });

Route::group(['middleware' => 'cors'], function(){
	Route::post('login', ['uses' => 'UserController@authenticate']);
	Route::get('sources', ['uses' => 'ArticleController@index']);
});

