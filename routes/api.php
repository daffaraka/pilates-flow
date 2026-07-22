<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PublicApiController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('public')->group(function () {
    Route::get('/coaches', [PublicApiController::class, 'coaches']);
    Route::get('/classes', [PublicApiController::class, 'classes']);
    Route::get('/pages/{slug}', [PublicApiController::class, 'page']);
    Route::get('/blog-posts', [PublicApiController::class, 'blogPosts']);
    Route::get('/blog-posts/{slug}', [PublicApiController::class, 'blogPost']);
    Route::get('/testimonials', [PublicApiController::class, 'testimonials']);
    Route::get('/pricing', [PublicApiController::class, 'pricing']);
    Route::get('/promos', [PublicApiController::class, 'promos']);
    Route::get('/settings', [PublicApiController::class, 'settings']);
});
