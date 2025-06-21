<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ApplicationCreateMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\JsonResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $users = $request->users;
        $users_count = count($users);
        if($users_count < 1 or $users_count > 2){
            return response()->json(['error' => 'Участников может быть от 1 до 2'], 403);
        }
        return $next($request);
    }
}
