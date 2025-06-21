<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function getAll(){
        return User::where('status', '=', User::STATUS_USER)->get();
    }

    public function     create($data){
        return User::create($data);
    }

    public function edit($user, $data){
        return $user->update($data);
    }

    public function delete($user){
        $user->delete();
    }

    public function get($user){
        return $user;
    }

    public function getOrganizing(){
        return User::where('status', '=', User::STATUS_ORGANIZING_COMMITTEE)->get();
    }

    public function getProgram(){
        return User::where('status', '=', User::STATUS_PROGRAM_COMMITTEE)->get();
    }
}
