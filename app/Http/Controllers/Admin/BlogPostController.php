<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    public function index()
    {
        $posts = \App\Models\BlogPost::latest()->get();
        return inertia('Admin/BlogPosts/Index', [
            'posts' => $posts
        ]);
    }

    public function create()
    {
        return inertia('Admin/BlogPosts/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blog_posts',
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'cover_image' => 'nullable|image|max:2048',
            'meta_description' => 'nullable|string',
            'is_published' => 'boolean',
            'published_at' => 'nullable|date',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = \Illuminate\Support\Str::slug($validated['title']);
        }

        if ($request->hasFile('cover_image')) {
            $validated['cover_image'] = $request->file('cover_image')->store('blog', 'public');
        }

        \App\Models\BlogPost::create($validated);

        return redirect()->route('blog-posts.index')->with('success', 'Blog post berhasil dibuat.');
    }

    public function edit(\App\Models\BlogPost $blogPost)
    {
        return inertia('Admin/BlogPosts/Form', [
            'post' => $blogPost
        ]);
    }

    public function update(Request $request, \App\Models\BlogPost $blogPost)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blog_posts,slug,' . $blogPost->id,
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'cover_image' => 'nullable|image|max:2048',
            'meta_description' => 'nullable|string',
            'is_published' => 'boolean',
            'published_at' => 'nullable|date',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = \Illuminate\Support\Str::slug($validated['title']);
        }

        if ($request->hasFile('cover_image')) {
            // Hapus gambar lama jika ada
            if ($blogPost->cover_image) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($blogPost->cover_image);
            }
            $validated['cover_image'] = $request->file('cover_image')->store('blog', 'public');
        }

        $blogPost->update($validated);

        return redirect()->route('blog-posts.index')->with('success', 'Blog post berhasil diperbarui.');
    }

    public function destroy(\App\Models\BlogPost $blogPost)
    {
        if ($blogPost->cover_image) {
            \Illuminate\Support\Facades\Storage::disk('public')->delete($blogPost->cover_image);
        }
        $blogPost->delete();
        
        return redirect()->route('blog-posts.index')->with('success', 'Blog post berhasil dihapus.');
    }
