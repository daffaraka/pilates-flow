<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        $pages = \App\Models\Page::latest()->get();
        return inertia('Admin/Pages/Index', [
            'pages' => $pages
        ]);
    }

    public function create()
    {
        return inertia('Admin/Pages/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:pages',
            'meta_description' => 'nullable|string',
            'content' => 'nullable|array',
            'is_published' => 'boolean',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = \Illuminate\Support\Str::slug($validated['title']);
        }

        \App\Models\Page::create($validated);

        return redirect()->route('pages.index')->with('success', 'Page berhasil dibuat.');
    }

    public function edit(\App\Models\Page $page)
    {
        return inertia('Admin/Pages/Form', [
            'page' => $page
        ]);
    }

    public function update(Request $request, \App\Models\Page $page)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:pages,slug,' . $page->id,
            'meta_description' => 'nullable|string',
            'content' => 'nullable|array',
            'is_published' => 'boolean',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = \Illuminate\Support\Str::slug($validated['title']);
        }

        $page->update($validated);

        return redirect()->route('pages.index')->with('success', 'Page berhasil diperbarui.');
    }

    public function destroy(\App\Models\Page $page)
    {
        $page->delete();
        return redirect()->route('pages.index')->with('success', 'Page berhasil dihapus.');
    }
}
