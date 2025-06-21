<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Applications extends Model
{
    use HasFactory;

    const STATUS_ACTIVE = 1;
    const STATUS_AWAITING = 0;
    const STATUS_INACTIVE = -1;

    protected $fillable = [
        'title',
        'file',
        'direction_id',
        'status'
    ];

    public function direction(){
        return $this->hasOne(Directions::class, 'id', 'direction_id');
    }

    public function applicationUsers(){
        return $this->hasMany(ApplicationUsers::class, 'applications_id', 'id');
    }

    public function users(){
        return $this->belongsToMany(User::class, 'application_users', 'applications_id', 'user_id');
    }
}
