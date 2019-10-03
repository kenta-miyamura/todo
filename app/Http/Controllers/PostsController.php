<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BBS\Post;

class PostsController extends Controller
{
    public function index()
    {
        return Post::with('comments')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function show(int $id)
    {
        $posts = Post::with('comments')
        ->where('id', $id)
        ->orderBy('created_at', 'desc')
        ->first();

        // todo response->jsonの第二引数でstatus_codeを指定してもvue側で受け取れない
        if (is_null($posts)) {
            return response()->json(['status' => 404]);
        }

        return $posts;
    }
}