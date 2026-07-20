<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PricingPackageController extends Controller
{
    public function index()
    {
        $packages = \App\Models\PricingPackage::latest()->get();
        return inertia('Admin/Pricing/Index', [
            'packages' => $packages
        ]);
    }

    public function create()
    {
        return inertia('Admin/Pricing/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'sessions_count' => 'required|integer|min:1',
            'validity_days' => 'required|integer|min:1',
        ]);

        \App\Models\PricingPackage::create($validated);

        return redirect()->route('pricing.index')->with('success', 'Paket harga berhasil ditambahkan.');
    }

    public function edit(\App\Models\PricingPackage $pricing) // Param explicitly named pricing to match route
    {
        return inertia('Admin/Pricing/Form', [
            'package' => $pricing
        ]);
    }

    public function update(Request $request, \App\Models\PricingPackage $pricing)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'sessions_count' => 'required|integer|min:1',
            'validity_days' => 'required|integer|min:1',
        ]);

        $pricing->update($validated);

        return redirect()->route('pricing.index')->with('success', 'Paket harga berhasil diperbarui.');
    }

    public function destroy(\App\Models\PricingPackage $pricing)
    {
        $pricing->delete();
        return redirect()->route('pricing.index')->with('success', 'Paket harga berhasil dihapus.');
    }
}