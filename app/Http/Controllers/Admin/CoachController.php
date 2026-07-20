<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CoachController extends Controller
{
    public function index()
    {
        $coaches = \App\Models\Coach::latest()->get();
        return inertia('Admin/Coaches/Index', [
            'coaches' => $coaches
        ]);
    }

    public function create()
    {
        return inertia('Admin/Coaches/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'specialty' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'photo_url' => 'nullable|string|max:255',
        ]);

        \App\Models\Coach::create($validated);

        return redirect()->route('coaches.index')->with('success', 'Pelatih berhasil ditambahkan.');
    }

    public function edit(\App\Models\Coach $coach)
    {
        return inertia('Admin/Coaches/Form', [
            'coach' => $coach
        ]);
    }

    public function update(Request $request, \App\Models\Coach $coach)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'specialty' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'photo_url' => 'nullable|string|max:255',
        ]);

        $coach->update($validated);

        return redirect()->route('coaches.index')->with('success', 'Pelatih berhasil diperbarui.');
    }

    public function destroy(\App\Models\Coach $coach)
    {
        $coach->delete();
        return redirect()->route('coaches.index')->with('success', 'Pelatih berhasil dihapus.');
    }
}