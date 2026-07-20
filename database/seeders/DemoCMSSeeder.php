<?php

namespace Database\Seeders;

use App\Models\Coach;
use App\Models\PilatesClass;
use App\Models\SiteSetting;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class DemoCMSSeeder extends Seeder
{
    public function run(): void
    {
        // Settings
        SiteSetting::firstOrCreate(['key' => 'whatsapp_number'], ['value' => '+6281234567890']);
        SiteSetting::firstOrCreate(['key' => 'instagram_url'], ['value' => 'https://instagram.com/pilatesstudio']);

        // Coaches
        Coach::firstOrCreate(['slug' => 'sarah-j'], [
            'name' => 'Sarah Johnson',
            'specialty' => 'Reformer Expert',
            'bio' => 'Sarah has over 10 years of experience in Reformer Pilates.',
            'certifications' => ['STOTT Pilates', 'PMA Certified'],
            'is_active' => true,
        ]);

        // Classes
        PilatesClass::firstOrCreate(['slug' => 'reformer-flow-101'], [
            'title' => 'Reformer Flow 101',
            'category' => 'reformer',
            'level' => 'pemula',
            'description' => 'A perfect introduction to Reformer Pilates.',
            'duration_minutes' => 60,
            'equipment' => ['Reformer'],
            'focus_area' => ['Core', 'Full Body'],
            'capacity' => 10,
            'is_active' => true,
        ]);

        // Testimonial
        Testimonial::firstOrCreate(['name' => 'Jane Doe'], [
            'role' => 'Member since 2023',
            'quote' => 'Pilates changed my life! The coaches here are amazing.',
            'rating' => 5,
            'is_active' => true,
        ]);
    }
}
