<?php

namespace App\Http\Controllers;

use App\Models\ClassSchedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    public function index(Request $request)
    {
        $query = ClassSchedule::with('instructor.user')
            ->where('date', '>=', now()->toDateString())
            ->orderBy('date', 'asc')
            ->orderBy('start_time', 'asc');

        if ($request->has('date')) {
            $query->where('date', $request->date);
        }

        if ($request->has('instructor_id')) {
            $query->where('instructor_id', $request->instructor_id);
        }

        $schedules = $query->get();

        return Inertia::render('Schedules/Index', [
            'schedules' => $schedules
        ]);
    }

    public function show(ClassSchedule $schedule)
    {
        $schedule->load('instructor.user');
        $bookedCount = $schedule->bookings()->whereIn('status', ['booked', 'attended'])->count();

        return Inertia::render('Schedules/Show', [
            'schedule' => $schedule,
            'bookedCount' => $bookedCount,
            'isFull' => $bookedCount >= $schedule->capacity
        ]);
    }
}
