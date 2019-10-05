<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\BBS\Comment;

class CommentsController extends Controller
{
    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }
    public function index()
    {
        return $this->comment->with('comments')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function show(int $id)
    {
        return $this->comment->with('comments')
            ->where('id', $id)
            ->orderBy('created_at', 'desc')
            ->firstOrFail();
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $this->comment->fill($request->all())->save();
            DB::commit();
            return response($this->comment, 200);
        } catch (\PDOException $e) {
            DB::rollBack();
            Log::info($e);
        }
    }

    public function destroy(int $id)
    {
        DB::beginTransaction();
        try {
            $record = $this->comment->findOrFail($id);
            $record->delete();
            DB::commit();
            return $record;
        } catch (\PDOException $e) {
            DB::rollBack();
            Log::info($e);
        }
    }
}
