<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassSchedule extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'date' => 'date',
    ];

    public function coach()
    {
        return $this->belongsTo(Coach::class);
    }

    public function pilatesClass()
    {
        return $this->belongsTo(PilatesClass::class, 'class_id');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
