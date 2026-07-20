<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Coach extends Model
{
    protected $fillable = [
        'name', 'slug', 'specialty', 'bio', 'photo',
        'certifications', 'is_active', 'sort_order',
    ];

    protected $casts = [
        'certifications' => 'array',
        'is_active' => 'boolean',
    ];

    protected static function booted(): void
    {
        static::creating(function (Coach $coach) {
            if (empty($coach->slug)) {
                $coach->slug = Str::slug($coach->name);
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
