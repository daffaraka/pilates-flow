<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PilatesClassController extends Controller
{
    public function index()
    {
        $classes = \App\Models\PilatesClass::latest()->get();
        return inertia('Admin/Classes/Index', [
            'classes' => $classes
        ]);
    }

    public function create()
    {
        return inertia('Admin/Classes/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'duration' => 'required|integer|min:1',
            'level' => 'required|in:beginner,intermediate,advanced,all_levels',
            'image_url' => 'nullable|string|max:255',
        ]);

        \App\Models\PilatesClass::create($validated);

        return redirect()->route('classes.index')->with('success', 'Kelas Pilates berhasil ditambahkan.');
    }

    public function edit(\App\Models\PilatesClass $class)
    {
        return inertia('Admin/Classes/Form', [
            'pilatesClass' => $class
        ]);
    }

    public function update(Request $request, \App\Models\PilatesClass $class)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'duration' => 'required|integer|min:1',
            'level' => 'required|in:beginner,intermediate,advanced,all_levels',
            'image_url' => 'nullable|string|max:255',
        ]);

        $class->update($validated);

        return redirect()->route('classes.index')->with('success', 'Kelas Pilates berhasil diperbarui.');
    }

    public function destroy(\App\Models\PilatesClass $class)
    {
        $class->delete();
        return redirect()->route('classes.index')->with('success', 'Kelas Pilates berhasil dihapus.');
    }
}