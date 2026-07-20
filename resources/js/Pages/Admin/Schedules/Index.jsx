import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import Badge from '@/Components/ui/Badge';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function Index({ schedules }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="Operasional: Jadwal Kelas">
            <Head title="Kelola Jadwal Kelas" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Jadwal Kelas</h2>
                    <p className="text-text-secondary">Kelola jadwal kelas pilates harian.</p>
                </div>
                <Link href={route('schedules.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tambah Jadwal
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary">Tanggal</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Waktu</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Kelas</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Pelatih</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Kapasitas</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {schedules.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada jadwal kelas yang tersedia.
                                    </td>
                                </tr>
                            ) : (
                                schedules.map((schedule) => (
                                    <tr key={schedule.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4 font-medium">
                                            {new Date(schedule.date).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                                        </td>
                                        <td className="px-6 py-4">
                                            {schedule.start_time.substring(0, 5)} - {schedule.end_time.substring(0, 5)}
                                        </td>
                                        <td className="px-6 py-4 font-medium">{schedule.pilates_class?.name}</td>
                                        <td className="px-6 py-4">{schedule.coach?.name}</td>
                                        <td className="px-6 py-4">{schedule.capacity} Orang</td>
                                        <td className="px-6 py-4">
                                            <Badge variant={
                                                schedule.status === 'scheduled' ? 'primary' : 
                                                schedule.status === 'completed' ? 'success' : 'destructive'
                                            }>
                                                {schedule.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('schedules.edit', schedule.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('schedules.destroy', schedule.id)} method="delete" as="button">
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
