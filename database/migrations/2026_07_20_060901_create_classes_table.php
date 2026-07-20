<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->enum('category', ['mat', 'reformer', 'tower', 'chair', 'ladder_barrel', 'prenatal', 'yoga', 'core_mobility'])->default('mat');
            $table->enum('level', ['pemula', 'menengah', 'lanjutan', 'semua'])->default('semua');
            $table->text('description')->nullable();
            $table->string('photo')->nullable();
            $table->integer('duration_minutes')->default(60);
            $table->json('equipment')->nullable();
            $table->json('focus_area')->nullable();
            $table->integer('capacity')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
