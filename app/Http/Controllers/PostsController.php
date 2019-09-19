<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BBS\Post;
use Illuminate\Support\Facades\Log;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::with('comments')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($posts);
    }

    // return response()->json($request->user()->update($data));
}