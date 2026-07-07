<?php

namespace App\Http\Controllers;

use App\Models\MembershipPackage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PackageController extends Controller
{
    public function index()
    {
        $packages = MembershipPackage::orderBy('session_count', 'asc')->get();

        return Inertia::render('Packages/Index', [
            'packages' => $packages
        ]);
    }
}
