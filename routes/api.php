<?php

use Illuminate\Http\Request;

// BBS
// Route::group(['namespace' => 'bbs'], function () {
    // Route::get('/', 'PostsController@index')->name('top');
    Route::resource('posts', 'PostsController', ['only' => ['index', 'create', 'store']]);
// });

Route::group(['middleware' => 'api'], function () {
    Route::post('/auth/login', 'AuthContoller@login');
    Route::post('/auth/logout', 'AuthContoller@logout');
    Route::resource('posts', 'PostsController');
    Route::resource('comment', 'CommentsController');

    Route::post('/upload', 'UploadController@upload');
});
