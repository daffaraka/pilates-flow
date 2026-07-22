<?php
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PilatesClassController;
use App\Http\Controllers\Admin\CoachController;
use App\Http\Controllers\Admin\PricingPackageController;
use App\Http\Controllers\Admin\ClassScheduleController;
use App\Http\Controllers\Admin\MembershipController;
use App\Http\Controllers\Admin\PaymentController;
use App\Http\Controllers\Admin\BookingController;
use Inertia\Inertia;

use Illuminate\Support\Facades\Route;

// Redirect root to Welcome page (Customer Frontend)
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Illuminate\Foundation\Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// We keep the old controllers (BookingController, PackageController, ScheduleController) 
// as archive in the codebase.


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
    Route::resource('memberships', \App\Http\Controllers\Admin\MembershipController::class);
    Route::resource('payments', \App\Http\Controllers\Admin\PaymentController::class);
    Route::resource('bookings', \App\Http\Controllers\Admin\BookingController::class);
    
    // CMS Routes
    Route::resource('pages', \App\Http\Controllers\Admin\PageController::class);
    Route::resource('blog-posts', \App\Http\Controllers\Admin\BlogPostController::class);
    Route::resource('testimonials', \App\Http\Controllers\Admin\TestimonialController::class);
    Route::resource('promo-banners', \App\Http\Controllers\Admin\PromoBannerController::class);
});

require __DIR__.'/auth.php';
