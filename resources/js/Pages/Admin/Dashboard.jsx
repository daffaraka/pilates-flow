import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Card from '@/Components/ui/Card';
import Badge from '@/Components/ui/Badge';

export default function Dashboard({ stats, recentBookings }) {
    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />
            
            <div className="mb-8">
                <h2 className="text-3xl font-serif text-primary-dark mb-2">Ringkasan Hari Ini</h2>
                <p className="text-text-secondary">Statistik operasional PilatesFlow Studio.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Jadwal Hari Ini" value={stats.todaySchedules} suffix="Kelas" />
                <StatCard title="Total Member Aktif" value={stats.totalMembers} suffix="Orang" />
                <StatCard 
                    title="Total Pendapatan" 
                    value={new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(stats.totalRevenue)} 
                />
            </div>

            <Card>
                <Card.Header>
                    <h3 className="text-xl font-serif text-primary-dark">Booking Terbaru</h3>
                </Card.Header>
                <Card.Body className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-background border-b border-[#F0EBE1]">
                                <tr>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Member</th>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Kelas</th>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Tanggal Booking</th>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F0EBE1]">
                                {recentBookings.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-8 text-center text-text-secondary">
                                            Belum ada data booking.
                                        </td>
                                    </tr>
                                ) : (
                                    recentBookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-background/50 transition">
                                            <td className="px-6 py-4 font-medium">{booking.user?.name}</td>
                                            <td className="px-6 py-4">{booking.class_schedule?.title}</td>
                                            <td className="px-6 py-4">{new Date(booking.created_at).toLocaleDateString('id-ID')}</td>
                                            <td className="px-6 py-4">
                                                <Badge variant={booking.status === 'booked' ? 'primary' : 'default'}>
                                                    {booking.status}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card.Body>
            </Card>
        </AdminLayout>
    );
}

function StatCard({ title, value, suffix }) {
    return (
        <Card className="border-l-4 border-l-primary">
            <Card.Body>
                <p className="text-sm text-text-secondary font-medium mb-2">{title}</p>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-text-primary">{value}</span>
                    {suffix && <span className="text-sm text-text-secondary font-medium">{suffix}</span>}
                </div>
            </Card.Body>
        </Card>
    );
}
