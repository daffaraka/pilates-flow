<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\PricingPackage;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Roles
        $adminRole = Role::create(['name' => 'admin']);
        $coachRole = Role::create(['name' => 'coach']);
        $memberRole = Role::create(['name' => 'member']);

        // 2. Create Admin User
        $admin = User::create([
            'name' => 'Admin Studio',
            'email' => 'admin@pilates.com',
            'password' => Hash::make('password'),
        ]);
        $admin->assignRole($adminRole);

        // 3. Create Coach
        \App\Models\Coach::create([
            'name' => 'Jane Coach',
            'specialty' => 'Reformer Pilates',
            'bio' => 'Certified Pilates Instructor with 5 years of experience.',
        ]);

        // 4. Create Member User
        $member = User::create([
            'name' => 'John Member',
            'email' => 'john@pilates.com',
            'password' => Hash::make('password'),
        ]);
        $member->assignRole($memberRole);

        // 5. Create Packages
        \App\Models\PricingPackage::insert([
            [
                'name' => 'Paket 1 Sesi (Drop-in)',
                'sessions_count' => 1,
                'price' => 150000,
                'validity_days' => 14,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Paket 4 Sesi',
                'sessions_count' => 4,
                'price' => 550000,
                'validity_days' => 30,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Paket 8 Sesi',
                'sessions_count' => 8,
                'price' => 1000000,
                'validity_days' => 60,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        // 6. Create Example Class
        \App\Models\PilatesClass::create([
            'name' => 'Reformer Basic',
            'description' => 'Kelas fundamental untuk pengenalan mesin reformer.',
            'duration' => 60,
            'level' => 'beginner',
        ]);
    }
}
