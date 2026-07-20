<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Coach;

class IndonesianCoachesSeeder extends Seeder
{
    public function run()
    {
        // Remove existing coaches to start fresh with Indonesian ones
        Coach::truncate();

        Coach::create([
            'name' => 'Ayu Lestari',
            'specialty' => 'Reformer Expert',
            'bio' => 'Ayu memiliki pengalaman lebih dari 5 tahun dalam mengajar Pilates Reformer. Pendekatannya yang hangat dan berfokus pada postur akan membantu Anda mencapai keseimbangan tubuh yang optimal.',
            'certifications' => ['STOTT Pilates Certified', 'Anatomy Trains', 'First Aid'],
            'photo' => 'coaches/ayu.png',
            'is_active' => true,
            'sort_order' => 1,
        ]);

        Coach::create([
            'name' => 'Dimas Pratama',
            'specialty' => 'Athletic Conditioning',
            'bio' => 'Dengan latar belakang fisioterapi dan kebugaran, Dimas menggabungkan Pilates dengan latihan kekuatan intensitas tinggi. Cocok untuk Anda yang ingin tantangan ekstra.',
            'certifications' => ['Polestar Pilates', 'BSc Physiotherapy', 'TRX Certified'],
            'photo' => 'coaches/dimas.png',
            'is_active' => true,
            'sort_order' => 2,
        ]);

        Coach::create([
            'name' => 'Sari Wijaya',
            'specialty' => 'Mat & Flexibility',
            'bio' => 'Sari sangat berdedikasi dalam mengajarkan Mat Pilates dengan penekanan pada kelenturan (flexibility) dan pemulihan cedera. Kelasnya selalu terasa seperti sesi meditasi bergerak.',
            'certifications' => ['Balanced Body Mat', 'Yoga Alliance RYT 200', 'Prenatal Pilates'],
            'photo' => 'coaches/portrait.png',
            'is_active' => true,
            'sort_order' => 3,
        ]);
        
        Coach::create([
            'name' => 'Budi Santoso',
            'specialty' => 'Core Stability',
            'bio' => 'Budi berfokus pada kekuatan inti tubuh (core strength). Instruktur yang disiplin namun ramah ini akan memastikan teknik dan pernapasan Anda selalu tepat pada setiap gerakan.',
            'certifications' => ['BASI Pilates', 'Functional Training Specialist'],
            'photo' => 'coaches/dimas.png',
            'is_active' => true,
            'sort_order' => 4,
        ]);
    }
}
