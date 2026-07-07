<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\MembershipPackage;
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
        $instructorRole = Role::create(['name' => 'instructor']);
        $memberRole = Role::create(['name' => 'member']);

        // 2. Create Admin User
        $admin = User::create([
            'name' => 'Admin Studio',
            'email' => 'admin@pilates.com',
            'password' => Hash::make('password'),
        ]);
        $admin->assignRole($adminRole);

        // 3. Create Instructor User
        $instructorUser = User::create([
            'name' => 'Jane Instructor',
            'email' => 'jane@pilates.com',
            'password' => Hash::make('password'),
        ]);
        $instructorUser->assignRole($instructorRole);

        $instructorUser->instructor()->create([
            'bio' => 'Certified Pilates Instructor with 5 years of experience.',
            'specialization' => 'Reformer Pilates',
        ]);

        // 4. Create Member User
        $member = User::create([
            'name' => 'John Member',
            'email' => 'john@pilates.com',
            'password' => Hash::make('password'),
        ]);
        $member->assignRole($memberRole);

        // 5. Create Packages
        MembershipPackage::insert([
            [
                'name' => 'Paket 1 Sesi (Drop-in)',
                'session_count' => 1,
                'price' => 150000,
                'validity_days' => 14,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Paket 4 Sesi',
                'session_count' => 4,
                'price' => 550000,
                'validity_days' => 30,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Paket 8 Sesi',
                'session_count' => 8,
                'price' => 1000000,
                'validity_days' => 60,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
