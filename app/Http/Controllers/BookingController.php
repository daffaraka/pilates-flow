<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\ClassSchedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function store(Request $request, ClassSchedule $schedule)
    {
        $user = $request->user();

        // 1. Cek apakah kelas sudah penuh
        $bookedCount = $schedule->bookings()->whereIn('status', ['booked', 'attended'])->count();
        if ($bookedCount >= $schedule->capacity) {
            return back()->with('error', 'Maaf, kuota kelas ini sudah penuh.');
        }

        // 2. Cek apakah user sudah booking kelas ini
        $alreadyBooked = $schedule->bookings()->where('user_id', $user->id)->where('status', 'booked')->exists();
        if ($alreadyBooked) {
            return back()->with('error', 'Anda sudah memesan kelas ini.');
        }

        // 3. Cek apakah user memiliki membership aktif dengan sisa sesi > 0
        $activeMembership = $user->memberships()
            ->where('status', 'active')
            ->where('expired_at', '>=', now())
            ->where('sessions_remaining', '>', 0)
            ->first();

        if (!$activeMembership) {
            return back()->with('error', 'Anda tidak memiliki paket aktif atau sesi sudah habis. Silakan beli paket baru.');
        }

        // 4. Lakukan proses booking dengan database transaction
        DB::transaction(function () use ($user, $schedule, $activeMembership) {
            // Buat booking
            Booking::create([
                'user_id' => $user->id,
                'class_schedule_id' => $schedule->id,
                'status' => 'booked',
            ]);

            // Kurangi sisa sesi
            $activeMembership->decrement('sessions_remaining');
        });

        return redirect()->route('schedules.show', $schedule->id)
            ->with('success', 'Berhasil memesan kelas!');
    }

    public function myBookings(Request $request)
    {
        $user = $request->user();
        
        $bookings = Booking::with('classSchedule.instructor.user')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Bookings/MyBookings', [
            'bookings' => $bookings
        ]);
    }

    public function destroy(Request $request, Booking $booking)
    {
        if ($booking->user_id !== $request->user()->id) {
            abort(403);
        }

        if ($booking->status !== 'booked') {
            return back()->with('error', 'Status booking tidak bisa dibatalkan.');
        }

        DB::transaction(function () use ($request, $booking) {
            // Update status booking
            $booking->update(['status' => 'cancelled']);

            // Kembalikan sisa sesi ke membership yang aktif
            $activeMembership = $request->user()->memberships()
                ->where('status', 'active')
                ->where('expired_at', '>=', now())
                ->first();

            if ($activeMembership) {
                $activeMembership->increment('sessions_remaining');
            }
        });

        return back()->with('success', 'Booking berhasil dibatalkan dan sesi telah dikembalikan.');
    }
}
