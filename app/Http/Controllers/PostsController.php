<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\BBS\Post;

class PostsController extends Controller
{
    public function __construct(Post $post)
    {
        $this->post = $post;
    }
    public function index()
    {
        return $this->post->with('comments')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function show(int $id)
    {
        return $this->post->with('comments')
            ->where('id', $id)
            ->orderBy('created_at', 'desc')
            ->firstOrFail();
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $this->post->fill($request->all())->save();
            DB::commit();
            return response($this->post, 200);
        } catch (\PDOException $e) {
            DB::rollBack();
            Log::info($e);
        }
    }
}
