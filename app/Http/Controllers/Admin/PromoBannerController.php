<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PromoBannerController extends Controller
{
    public function index()
    {
        $banners = \App\Models\PromoBanner::latest()->get();
        return inertia('Admin/PromoBanners/Index', [
            'banners' => $banners
        ]);
    }

    public function create()
    {
        return inertia('Admin/PromoBanners/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|image|max:2048',
            'link' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('banners', 'public');
        }

        \App\Models\PromoBanner::create($validated);

        return redirect()->route('promo-banners.index')->with('success', 'Banner berhasil dibuat.');
    }

    public function edit(\App\Models\PromoBanner $promoBanner)
    {
        return inertia('Admin/PromoBanners/Form', [
            'banner' => $promoBanner
        ]);
    }

    public function update(Request $request, \App\Models\PromoBanner $promoBanner)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|max:2048',
            'link' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            if ($promoBanner->image) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($promoBanner->image);
            }
            $validated['image'] = $request->file('image')->store('banners', 'public');
        }

        $promoBanner->update($validated);

        return redirect()->route('promo-banners.index')->with('success', 'Banner berhasil diperbarui.');
    }

    public function destroy(\App\Models\PromoBanner $promoBanner)
    {
        if ($promoBanner->image) {
            \Illuminate\Support\Facades\Storage::disk('public')->delete($promoBanner->image);
        }
        $promoBanner->delete();
        
        return redirect()->route('promo-banners.index')->with('success', 'Banner berhasil dihapus.');
    }
