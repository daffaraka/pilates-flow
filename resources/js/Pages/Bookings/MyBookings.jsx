import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Card from '@/Components/ui/Card';
import Badge from '@/Components/ui/Badge';
import Button from '@/Components/ui/Button';

export default function MyBookings({ bookings }) {
    return (
        <AppLayout title="Riwayat Booking">
            <Head title="Riwayat Booking Saya" />
            
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-serif text-primary-dark">Riwayat Booking</h1>
                    <Link href={route('schedules.index')}>
                        <Button variant="outline">Booking Baru</Button>
                    </Link>
                </div>

                <div className="space-y-4">
                    {bookings.length === 0 ? (
                        <div className="p-8 text-center bg-surface border border-[#F0EBE1] rounded-2xl text-text-secondary">
                            Belum ada riwayat booking.
                        </div>
                    ) : (
                        bookings.map(booking => (
                            <BookingItem key={booking.id} booking={booking} />
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

function BookingItem({ booking }) {
    const { delete: destroy, processing } = useForm();

    const handleCancel = () => {
        if (confirm('Yakin ingin membatalkan booking ini? Sesi Anda akan dikembalikan.')) {
            destroy(route('bookings.destroy', booking.id));
        }
    };

    const schedule = booking.class_schedule;
    const dateObj = new Date(schedule.date);
    const dateStr = dateObj.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = `${schedule.start_time.slice(0,5)} - ${schedule.end_time.slice(0,5)}`;

    const statusBadge = {
        booked: <Badge variant="primary">Booked</Badge>,
        attended: <Badge variant="success">Attended</Badge>,
        cancelled: <Badge variant="error">Cancelled</Badge>,
        no_show: <Badge variant="warning">No Show</Badge>,
    };

    return (
        <Card>
            <Card.Body className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-serif text-primary-dark font-bold">{schedule.title}</span>
                        {statusBadge[booking.status]}
                    </div>
                    <p className="text-text-secondary text-sm mb-1">{dateStr} • {timeStr}</p>
                    <p className="text-text-secondary text-sm">Instruktur: {schedule.instructor?.user?.name}</p>
                </div>
                
                {booking.status === 'booked' && (
                    <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={handleCancel}
                        disabled={processing}
                    >
                        Batalkan Booking
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
