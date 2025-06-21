<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    const STATUS_DIRECTOR = 100;
    const STATUS_ORGANIZING_COMMITTEE = 99;
    const STATUS_PROGRAM_COMMITTEE = 98;
    const STATUS_USER = 1;

    protected $fillable = [
        'name',
        'email',
        'password',
        'remember_token',
        'status',
        'place',
        'position',
        'phone',
        'link'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function applicationUsers(){
        return $this->hasMany(ApplicationUsers::class, 'user_id', 'id');
    }
}
