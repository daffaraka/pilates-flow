<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClassSchedule;
use App\Models\Instructor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    public function index()
    {
        $schedules = ClassSchedule::with('instructor.user')->orderBy('date', 'desc')->paginate(10);
        return Inertia::render('Admin/Schedules/Index', ['schedules' => $schedules]);
    }

    public function create()
    {
        $instructors = Instructor::with('user')->get();
        return Inertia::render('Admin/Schedules/Create', ['instructors' => $instructors]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'instructor_id' => 'required|exists:instructors,id',
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required',
            'capacity' => 'required|integer|min:1',
            'location' => 'nullable|string',
        ]);

        ClassSchedule::create($validated);

        return redirect()->route('admin.schedules.index')->with('success', 'Jadwal berhasil ditambahkan.');
    }

    public function edit(ClassSchedule $schedule)
    {
        $instructors = Instructor::with('user')->get();
        return Inertia::render('Admin/Schedules/Edit', [
            'schedule' => $schedule,
            'instructors' => $instructors
        ]);
    }

    public function update(Request $request, ClassSchedule $schedule)
    {
        $validated = $request->validate([
            'instructor_id' => 'required|exists:instructors,id',
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required',
            'capacity' => 'required|integer|min:1',
            'location' => 'nullable|string',
            'status' => 'required|in:scheduled,cancelled,completed'
        ]);

        $schedule->update($validated);

        return redirect()->route('admin.schedules.index')->with('success', 'Jadwal berhasil diperbarui.');
    }

    public function destroy(ClassSchedule $schedule)
    {
        $schedule->delete();
        return redirect()->route('admin.schedules.index')->with('success', 'Jadwal berhasil dihapus.');
    }
}
