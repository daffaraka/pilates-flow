import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Save, X } from 'lucide-react';

export default function Form({ booking }) {
    const { auth } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        status: booking?.status || 'booked',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('bookings.update', booking.id));
    };

    return (
        <DashboardLayout user={auth.user} headerTitle="Update Status Booking">
            <Head title="Update Booking" />

            <div className="mb-6">
                <h2 className="text-2xl font-serif text-primary-dark">Status Kehadiran / Booking</h2>
                <p className="text-text-secondary">Ubah status kehadiran untuk member <strong>{booking.user?.name}</strong>.</p>
            </div>

            <Card className="max-w-xl">
                <Card.Body>
                    <div className="bg-sage-50 rounded-xl p-4 mb-6 border border-sage-100">
                        <h4 className="font-medium text-sage-800 mb-2">Detail Booking</h4>
                        <ul className="text-sm text-sage-700 space-y-1">
                            <li><strong>Kelas:</strong> {booking.class_schedule?.pilates_class?.name}</li>
                            <li><strong>Tanggal Jadwal:</strong> {booking.class_schedule?.date}</li>
                            <li><strong>Waktu Jadwal:</strong> {booking.class_schedule?.start_time} - {booking.class_schedule?.end_time}</li>
                            <li><strong>Waktu Booking:</strong> {new Date(booking.booked_at).toLocaleString('id-ID')}</li>
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Status Kehadiran</label>
                            <select
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.status}
                                onChange={e => setData('status', e.target.value)}
                            >
                                <option value="booked">Booked (Telah Dipesan)</option>
                                <option value="attended">Attended (Hadir)</option>
                                <option value="no_show">No Show (Tidak Hadir)</option>
                                <option value="cancelled">Cancelled (Dibatalkan)</option>
                            </select>
                            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <Link href={route('bookings.index')}>
                                <Button variant="outline" type="button" className="flex items-center gap-2">
                                    <X className="w-4 h-4" /> Batal
                                </Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex items-center gap-2">
                                <Save className="w-4 h-4" /> {processing ? 'Menyimpan...' : 'Simpan Status'}
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
}
