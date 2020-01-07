<?php

namespace App\Http\Controllers;

use App\Repositories\UploadRepository;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    protected $uploadRepository;

    public function __construct(UploadRepository $upload_repository)
    {
        $this->uploadRepository = $upload_repository;
    }

    /**
     * アップロード処理
     * @param Illuminate\Http\Request $request
     */
    public function upload(Request $request)
    {
        $file = $request->file;

        return $this->uploadRepository->upload($file);
    }
}
