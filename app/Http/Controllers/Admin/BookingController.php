<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = \App\Models\Booking::with(['user', 'classSchedule.pilatesClass', 'classSchedule.coach'])->latest()->get();
        return inertia('Admin/Bookings/Index', [
            'bookings' => $bookings
        ]);
    }

    public function edit(\App\Models\Booking $booking)
    {
        return inertia('Admin/Bookings/Form', [
            'booking' => $booking->load(['user', 'classSchedule.pilatesClass'])
        ]);
    }

    public function update(Request $request, \App\Models\Booking $booking)
    {
        $validated = $request->validate([
            'status' => 'required|in:booked,attended,cancelled,no_show',
        ]);

        $booking->update($validated);

        return redirect()->route('bookings.index')->with('success', 'Status booking berhasil diperbarui.');
    }

    public function destroy(\App\Models\Booking $booking)
    {
        $booking->delete();
        return redirect()->route('bookings.index')->with('success', 'Data booking berhasil dihapus.');
    }
}