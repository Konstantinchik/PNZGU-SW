<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\DirectionController;
use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\PassportController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Здесь вы можете регистрировать API маршруты для вашего приложения.
| Эти маршруты загружаются с помощью RouteServiceProvider и используют группу middleware `api`.
|
*/

// Группа маршрутов для аутентификации
Route::prefix('auth')->group(function () {
    //Route::post('/register', [PassportController::class, 'register']);
    Route::post('/login', [PassportController::class, 'login']);
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [PassportController::class, 'me']);
        Route::post('/logout', [PassportController::class, 'logout']);
    });
});

// Группа маршрутов для пользователей
Route::prefix('users')->group(function () {
    Route::get('organizing', [UsersController::class, 'organizing']);
    Route::get('program', [UsersController::class, 'program']);
    Route::apiResource('/', UsersController::class)->parameters(['' => 'user']);
});

// Группа маршрутов для направлений
Route::apiResource('directions', DirectionController::class);

// Группа маршрутов для заявок с использованием middleware
Route::apiResource('applications', ApplicationController::class);
