<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\ClassSchedule;
use App\Models\Payment;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $todaySchedules = ClassSchedule::where('date', now()->toDateString())->count();
        $totalMembers = User::role('member')->count();
        $totalRevenue = Payment::where('status', 'paid')->sum('amount');
        $recentBookings = Booking::with('user', 'classSchedule')->latest()->take(5)->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'todaySchedules' => $todaySchedules,
                'totalMembers' => $totalMembers,
                'totalRevenue' => $totalRevenue,
            ],
            'recentBookings' => $recentBookings
        ]);
    }
}
