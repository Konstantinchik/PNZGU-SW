<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use App\Repositories\UserRepository;

class UsersController extends Controller
{
    protected UserRepository $userRepository;

    public function __construct(){
        $this->userRepository = new UserRepository();
    }

    public function index(){
        $data = $this->userRepository->getAll();
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function store(UserCreateRequest $request){
        $data = $request->validated();
        $data = $this->userRepository->create($data);
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function update(User $user, UserUpdateRequest $request){
        $data = $request->validated();
        $data = $this->userRepository->edit($user, $data);
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function destroy(User $user){
        $this->userRepository->delete($user);
        return response()->json(['success' => true,]);
    }

    public function show(User $user){
        $data = $this->userRepository->get($user);
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function organizing(){
        $data = $this->userRepository->getOrganizing();
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function program(){
        $data = $this->userRepository->getProgram();
        return response()->json(['success' => true, 'data' => $data]);
    }
}
