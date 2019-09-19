<?php

use Illuminate\Http\Request;

// BBS
// Route::group(['namespace' => 'bbs'], function () {
    // Route::get('/', 'PostsController@index')->name('top');
    Route::resource('posts', 'PostsController', ['only' => ['index', 'create', 'store']]);
// });
