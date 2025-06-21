<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicationCreateRequest;
use App\Http\Requests\ApplicationIndexRequest;
use App\Http\Requests\ApplicationUpdateRequest;
use App\Models\Applications;
use App\Repositories\ApplicationRepository;

class ApplicationController extends Controller
{
    private ApplicationRepository $applicationRepository;

    public function __construct(){
        $this->applicationRepository = new ApplicationRepository();

        $this->middleware('application.create')->only('store');
    }

    public function index(ApplicationIndexRequest $request){
        $data = $request->validated();
        $data = $this->applicationRepository->getAll($data);
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function store(ApplicationCreateRequest $request){
        $data = $request->validated();
        $data = $this->applicationRepository->create($data);
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function update(Applications $application, ApplicationUpdateRequest $request){
        $data = $request->validated();
        $data = $this->applicationRepository->edit($application, $data);
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function destroy(Applications $application){
        $application->delete();
        return response()->json(['success' => true]);
    }
}
