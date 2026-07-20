<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClassScheduleController extends Controller
{
    public function index()
    {
        $schedules = \App\Models\ClassSchedule::with(['coach', 'pilatesClass'])->latest('date')->latest('start_time')->get();
        return inertia('Admin/Schedules/Index', [
            'schedules' => $schedules
        ]);
    }

    public function create()
    {
        return inertia('Admin/Schedules/Form', [
            'coaches' => \App\Models\Coach::all(),
            'classes' => \App\Models\PilatesClass::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'coach_id' => 'required|exists:coaches,id',
            'class_id' => 'required|exists:classes,id',
            'date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'capacity' => 'required|integer|min:1',
            'location' => 'nullable|string|max:255',
            'status' => 'required|in:scheduled,cancelled,completed',
        ]);

        \App\Models\ClassSchedule::create($validated);

        return redirect()->route('schedules.index')->with('success', 'Jadwal kelas berhasil ditambahkan.');
    }

    public function edit(\App\Models\ClassSchedule $schedule)
    {
        return inertia('Admin/Schedules/Form', [
            'schedule' => $schedule,
            'coaches' => \App\Models\Coach::all(),
            'classes' => \App\Models\PilatesClass::all(),
        ]);
    }

    public function update(Request $request, \App\Models\ClassSchedule $schedule)
    {
        $validated = $request->validate([
            'coach_id' => 'required|exists:coaches,id',
            'class_id' => 'required|exists:classes,id',
            'date' => 'required|date',
            'start_time' => 'required|date_format:H:i', // Depending on how HTML5 time input sends it, sometimes it's H:i:s, but usually H:i
            'end_time' => 'required|date_format:H:i|after:start_time',
            'capacity' => 'required|integer|min:1',
            'location' => 'nullable|string|max:255',
            'status' => 'required|in:scheduled,cancelled,completed',
        ]);

        $schedule->update($validated);

        return redirect()->route('schedules.index')->with('success', 'Jadwal kelas berhasil diperbarui.');
    }

    public function destroy(\App\Models\ClassSchedule $schedule)
    {
        $schedule->delete();
        return redirect()->route('schedules.index')->with('success', 'Jadwal kelas berhasil dihapus.');
    }
}