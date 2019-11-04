<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    // todo: __construct

    /**
     * アップロード処理
     * @param Illuminate\Http\Request $request
     */
    public function upload(Request $request)
    {
        $path = Storage::cloud()->putFileAs(
            'flies/4',  // todo: 固定値の変更
            $request->file,
            'test_mint_neko.' . $request->file->extension(),  // todo: 固定値の変更
            'public'
        );
        $s3Path = Storage::cloud()->url($path);

        // todo: s3PathをDBに書き込む処理

        return response()->json($s3Path);
    }
}
