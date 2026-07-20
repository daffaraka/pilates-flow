<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PilatesClass;

class DummyClassesSeeder extends Seeder
{
    public function run()
    {
        // Prevent duplicate seedings if called multiple times
        if (PilatesClass::count() > 0) {
            return;
        }

        PilatesClass::create([
            'title' => 'Reformer Flow Basics',
            'slug' => 'reformer-flow-basics',
            'category' => 'reformer',
            'level' => 'pemula',
            'description' => 'A gentle introduction to the Reformer machine focusing on core stability.',
            'duration_minutes' => 60,
            'equipment' => ['reformer'],
            'focus_area' => ['core', 'balance'],
            'capacity' => 8,
            'is_active' => true,
        ]);

        PilatesClass::create([
            'title' => 'Power Mat Pilates',
            'slug' => 'power-mat-pilates',
            'category' => 'mat',
            'level' => 'menengah',
            'description' => 'A high-intensity mat workout designed to build endurance and strength.',
            'duration_minutes' => 45,
            'equipment' => ['mat', 'resistance_band'],
            'focus_area' => ['full_body'],
            'capacity' => 15,
            'is_active' => true,
        ]);

        PilatesClass::create([
            'title' => 'Tower Flexibility',
            'slug' => 'tower-flexibility',
            'category' => 'tower',
            'level' => 'semua',
            'description' => 'Utilize the Tower springs for deep stretching and muscle lengthening.',
            'duration_minutes' => 60,
            'equipment' => ['tower'],
            'focus_area' => ['flexibility', 'spine'],
            'capacity' => 6,
            'is_active' => true,
        ]);

        PilatesClass::create([
            'title' => 'Advanced Chair',
            'slug' => 'advanced-chair',
            'category' => 'chair',
            'level' => 'lanjutan',
            'description' => 'Challenge your stability and strength on the Wunda Chair.',
            'duration_minutes' => 60,
            'equipment' => ['wunda_chair'],
            'focus_area' => ['legs', 'core'],
            'capacity' => 4,
            'is_active' => true,
        ]);
        
        PilatesClass::create([
            'title' => 'Prenatal Pilates',
            'slug' => 'prenatal-pilates',
            'category' => 'mat',
            'level' => 'pemula',
            'description' => 'Safe and effective exercises tailored for expectant mothers.',
            'duration_minutes' => 45,
            'equipment' => ['mat', 'stability_ball'],
            'focus_area' => ['core', 'pelvic_floor'],
            'capacity' => 8,
            'is_active' => true,
        ]);
        
        PilatesClass::create([
            'title' => 'Cardio Tramp Jump',
            'slug' => 'cardio-tramp-jump',
            'category' => 'reformer',
            'level' => 'menengah',
            'description' => 'A high-energy class using the cardio tramp attachment on the Reformer.',
            'duration_minutes' => 50,
            'equipment' => ['reformer', 'cardio_tramp'],
            'focus_area' => ['cardio', 'legs'],
            'capacity' => 8,
            'is_active' => true,
        ]);
        
        PilatesClass::create([
            'title' => 'Spinal Mobility',
            'slug' => 'spinal-mobility',
            'category' => 'mat',
            'level' => 'semua',
            'description' => 'Focus entirely on mobilizing and articulating the spine to relieve back pain.',
            'duration_minutes' => 60,
            'equipment' => ['mat', 'foam_roller'],
            'focus_area' => ['spine', 'posture'],
            'capacity' => 12,
            'is_active' => true,
        ]);
        
        PilatesClass::create([
            'title' => 'Athletic Conditioning',
            'slug' => 'athletic-conditioning',
            'category' => 'reformer',
            'level' => 'lanjutan',
            'description' => 'Dynamic pacing and advanced exercises designed for athletes.',
            'duration_minutes' => 60,
            'equipment' => ['reformer', 'jump_board'],
            'focus_area' => ['full_body', 'endurance'],
            'capacity' => 8,
            'is_active' => true,
        ]);
    }
}
