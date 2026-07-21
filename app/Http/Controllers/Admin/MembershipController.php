<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MembershipController extends Controller
{
    public function index()
    {
        $memberships = \App\Models\MemberMembership::with(['user', 'pricingPackage'])->latest()->get();
        return inertia('Admin/Membership/Index', [
            'memberships' => $memberships
        ]);
    }

    public function create()
    {
        // For admin to create a membership for a member manually
        return inertia('Admin/Membership/Form', [
            'users' => \App\Models\User::role('member')->get(),
            'packages' => \App\Models\PricingPackage::active()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'pricing_package_id' => 'required|exists:pricing_packages,id',
            'sessions_remaining' => 'required|integer|min:0',
            'expired_at' => 'required|date',
            'status' => 'required|in:active,expired',
        ]);

        \App\Models\MemberMembership::create($validated);

        return redirect()->route('memberships.index')->with('success', 'Membership berhasil ditambahkan.');
    }

    public function edit(\App\Models\MemberMembership $membership)
    {
        return inertia('Admin/Membership/Form', [
            'membership' => $membership,
            'users' => \App\Models\User::role('member')->get(),
            'packages' => \App\Models\PricingPackage::active()->get(),
        ]);
    }

    public function update(Request $request, \App\Models\MemberMembership $membership)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'pricing_package_id' => 'required|exists:pricing_packages,id',
            'sessions_remaining' => 'required|integer|min:0',
            'expired_at' => 'required|date',
            'status' => 'required|in:active,expired',
        ]);

        $membership->update($validated);

        return redirect()->route('memberships.index')->with('success', 'Membership berhasil diperbarui.');
    }

    public function destroy(\App\Models\MemberMembership $membership)
    {
        $membership->delete();
        return redirect()->route('memberships.index')->with('success', 'Membership berhasil dihapus.');
    }
}