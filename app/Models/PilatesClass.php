<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class PilatesClass extends Model
{
    protected $table = 'classes';

    protected $fillable = [
        'title', 'slug', 'category', 'level', 'description', 'photo',
        'duration_minutes', 'equipment', 'focus_area', 'capacity',
        'is_active', 'sort_order',
    ];

    protected $casts = [
        'equipment' => 'array',
        'focus_area' => 'array',
        'is_active' => 'boolean',
    ];

    protected static function booted(): void
    {
        static::creating(function (PilatesClass $class) {
            if (empty($class->slug)) {
                $class->slug = Str::slug($class->title);
            }
        });
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }
}
