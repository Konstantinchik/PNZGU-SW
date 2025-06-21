<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ApplicationUsers extends Model
{
    use HasFactory, SoftDeletes;

    const STATUS_AUTHOR = 1;
    const STATUS_COLLABORATOR = 2;

    protected $fillable = [
        'applications_id',
        'user_id',
        'status'
    ];

    public function application(){
        return $this->hasOne(Applications::class, 'id', 'applications_id');
    }

    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
