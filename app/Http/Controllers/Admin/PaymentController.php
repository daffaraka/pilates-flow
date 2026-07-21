<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        $payments = \App\Models\Payment::with(['user', 'pricingPackage'])->latest()->get();
        return inertia('Admin/Payments/Index', [
            'payments' => $payments
        ]);
    }

    public function edit(\App\Models\Payment $payment)
    {
        return inertia('Admin/Payments/Form', [
            'payment' => $payment->load(['user', 'pricingPackage'])
        ]);
    }

    public function update(Request $request, \App\Models\Payment $payment)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,paid,failed',
        ]);

        if ($validated['status'] === 'paid' && $payment->status !== 'paid') {
            $validated['paid_at'] = now();
            
            // If paid, optionally we can create membership here automatically, but for now we just update status
        } elseif ($validated['status'] !== 'paid') {
            $validated['paid_at'] = null;
        }

        $payment->update($validated);

        return redirect()->route('payments.index')->with('success', 'Status pembayaran berhasil diperbarui.');
    }

    public function destroy(\App\Models\Payment $payment)
    {
        $payment->delete();
        return redirect()->route('payments.index')->with('success', 'Data pembayaran berhasil dihapus.');
    }
}