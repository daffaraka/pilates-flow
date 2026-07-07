<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MembershipPackage extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function memberMemberships()
    {
        return $this->hasMany(MemberMembership::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
