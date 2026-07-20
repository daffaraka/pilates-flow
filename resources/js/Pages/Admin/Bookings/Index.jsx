import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import Badge from '@/Components/ui/Badge';
import { Edit2, Trash2 } from 'lucide-react';

export default function Index({ bookings }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="Operasional: Data Booking">
            <Head title="Kelola Booking" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Daftar Booking Kelas</h2>
                    <p className="text-text-secondary">Kelola data pemesanan kelas oleh member.</p>
                </div>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary">Waktu Booking</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Member</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Kelas</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Jadwal</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {bookings.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada data booking.
                                    </td>
                                </tr>
                            ) : (
                                bookings.map((b) => (
                                    <tr key={b.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4">
                                            {new Date(b.booked_at).toLocaleString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-primary-dark">{b.user?.name}</td>
                                        <td className="px-6 py-4">{b.class_schedule?.pilates_class?.name}</td>
                                        <td className="px-6 py-4 text-xs">
                                            {b.class_schedule?.date} <br/>
                                            {b.class_schedule?.start_time.substring(0,5)} - {b.class_schedule?.end_time.substring(0,5)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={
                                                b.status === 'attended' ? 'success' :
                                                b.status === 'booked' ? 'primary' :
                                                b.status === 'no_show' ? 'warning' : 'destructive'
                                            }>
                                                {b.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('bookings.edit', b.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('bookings.destroy', b.id)} method="delete" as="button">
                                                <Button variant="outline" size="sm" className="!p-2 text-red-500 hover:bg-red-50 hover:border-red-200">
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>
        </DashboardLayout>
    );
}
