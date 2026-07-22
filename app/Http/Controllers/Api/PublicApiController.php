<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Coach;
use App\Models\PilatesClass;
use App\Models\Page;
use App\Models\Testimonial;
use App\Models\PricingPackage;
use App\Models\PromoBanner;
use App\Models\SiteSetting;
use Illuminate\Http\JsonResponse;

class PublicApiController extends Controller
{
    public function coaches(): JsonResponse
    {
        $coaches = Coach::where('is_active', true)->orderBy('sort_order')->get();
        return response()->json($coaches);
    }

    public function classes(): JsonResponse
    {
        $classes = PilatesClass::where('is_active', true)->orderBy('sort_order')->get();
        return response()->json($classes);
    }

    public function page($slug): JsonResponse
    {
        $page = Page::where('slug', $slug)->where('is_published', true)->firstOrFail();
        return response()->json($page);
    }

    public function blogPosts(): JsonResponse
    {
        $posts = \App\Models\BlogPost::where('is_published', true)
            ->where('published_at', '<=', now())
            ->orderBy('published_at', 'desc')
            ->get();
        return response()->json($posts);
    }

    public function blogPost($slug): JsonResponse
    {
        $post = \App\Models\BlogPost::where('slug', $slug)
            ->where('is_published', true)
            ->where('published_at', '<=', now())
            ->firstOrFail();
        return response()->json($post);
    }

    public function testimonials(): JsonResponse
    {
        $testimonials = Testimonial::where('is_active', true)->orderBy('sort_order')->get();
        return response()->json($testimonials);
    }

    public function pricing(): JsonResponse
    {
        $pricing = PricingPackage::where('is_active', true)->orderBy('sort_order')->get();
        return response()->json($pricing);
    }

    public function promos(): JsonResponse
    {
        $now = now()->toDateString();
        $promos = PromoBanner::where('is_active', true)
            ->where('start_date', '<=', $now)
            ->where('end_date', '>=', $now)
            ->get();
        return response()->json($promos);
    }

    public function settings(): JsonResponse
    {
        $settings = SiteSetting::pluck('value', 'key');
        return response()->json($settings);
    }
}
