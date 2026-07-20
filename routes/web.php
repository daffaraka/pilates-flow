<?php

use Illuminate\Support\Facades\Route;

// Redirect root to admin panel
Route::get('/', function () {
    return redirect('/dashboard');
});

// We keep the old controllers (BookingController, PackageController, ScheduleController) 
// as archive in the codebase.

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PilatesClassController;
use App\Http\Controllers\Admin\CoachController;
use App\Http\Controllers\Admin\PricingPackageController;
use App\Http\Controllers\Admin\ClassScheduleController;
use App\Http\Controllers\Admin\MembershipController;
use App\Http\Controllers\Admin\PaymentController;
use App\Http\Controllers\Admin\BookingController;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Master Data
    Route::resource('/classes', PilatesClassController::class);
    Route::resource('/coaches', CoachController::class);
    Route::resource('/pricing', PricingPackageController::class)->parameters([
        'pricing' => 'pricing'
    ]);

    // Operasional
    Route::resource('/schedules', ClassScheduleController::class);
    Route::resource('/memberships', MembershipController::class);
    Route::resource('/payments', PaymentController::class);
    Route::resource('/bookings', BookingController::class);
});

require __DIR__.'/auth.php';
