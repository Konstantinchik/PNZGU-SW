<?php

namespace App\Repositories;

use App\Models\Applications;
use App\Models\ApplicationUsers;
use App\Models\User;

class ApplicationRepository
{
    public function getAll($data = []){
        if(!empty($data))
            return Applications::where('status', '=', $data['status'])->with('direction')->with('users')->get();

        return Applications::with('direction')->with('users')->get();
    }
    public function create($data){
        $extension = '';

        $application = Applications::create([
            'title' => $data['title'],
            'file' => 'nullable',//$data['file'],
            'direction_id' => $data['direction_id'],
            'status' => Applications::STATUS_AWAITING
        ]);

        if (isset($data['file']) && $data['file']->isValid()) {
            $extension = $data['file']->getClientOriginalExtension();
            $fileName = $application->id . '.' . $extension;
            $filePath = $data['file']->storeAs('-uploads/applications', $fileName, 'public');
            $application->update(['file' => $filePath]);
        }

        $application->update(['file' => $extension]);

        foreach ($data['users'] as $user) {
            ApplicationUsers::create([
                'applications_id' => $application->id,
                'user_id' => User::create([
                    'name' => $user['name'],
                    'email' => $user['email'],
                    'status' => User::STATUS_USER,
                    'place' => $user['place'],
                    'position' => $user['position'],
                    'phone' => $user['phone']
                ])->id,
                'status' => $user['status']
            ]);
        }


        return $application;
    }

    public function edit($application, $data){
        return $application->update($data);
    }
}
