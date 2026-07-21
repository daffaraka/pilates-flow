<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = \App\Models\Testimonial::orderBy('sort_order')->get();
        return inertia('Admin/Testimonials/Index', [
            'testimonials' => $testimonials
        ]);
    }

    public function create()
    {
        return inertia('Admin/Testimonials/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'quote' => 'required|string',
            'photo' => 'nullable|image|max:2048',
            'rating' => 'required|integer|min:1|max:5',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('testimonials', 'public');
        }

        \App\Models\Testimonial::create($validated);

        return redirect()->route('testimonials.index')->with('success', 'Testimoni berhasil dibuat.');
    }

    public function edit(\App\Models\Testimonial $testimonial)
    {
        return inertia('Admin/Testimonials/Form', [
            'testimonial' => $testimonial
        ]);
    }

    public function update(Request $request, \App\Models\Testimonial $testimonial)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'quote' => 'required|string',
            'photo' => 'nullable|image|max:2048',
            'rating' => 'required|integer|min:1|max:5',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        if ($request->hasFile('photo')) {
            if ($testimonial->photo) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($testimonial->photo);
            }
            $validated['photo'] = $request->file('photo')->store('testimonials', 'public');
        }

        $testimonial->update($validated);

        return redirect()->route('testimonials.index')->with('success', 'Testimoni berhasil diperbarui.');
    }

    public function destroy(\App\Models\Testimonial $testimonial)
    {
        if ($testimonial->photo) {
            \Illuminate\Support\Facades\Storage::disk('public')->delete($testimonial->photo);
        }
        $testimonial->delete();
        
        return redirect()->route('testimonials.index')->with('success', 'Testimoni berhasil dihapus.');
    }
}
