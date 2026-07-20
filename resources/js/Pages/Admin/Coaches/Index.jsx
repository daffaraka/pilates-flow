import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function Index({ coaches }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="Master Data Pelatih">
            <Head title="Kelola Pelatih" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Pelatih / Instruktur</h2>
                    <p className="text-text-secondary">Kelola daftar instruktur yang ada di PilatesFlow Studio.</p>
                </div>
                <Link href={route('coaches.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tambah Pelatih
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary">Nama</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Spesialisasi</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {coaches.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada data pelatih.
                                    </td>
                                </tr>
                            ) : (
                                coaches.map((coach) => (
                                    <tr key={coach.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4 font-medium">
                                            <div className="flex items-center gap-3">
                                                {coach.photo_url ? (
                                                    <img src={coach.photo_url} alt={coach.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-primary-dark font-bold border border-sage-200">
                                                        {coach.name.charAt(0)}
                                                    </div>
                                                )}
                                                {coach.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{coach.specialty}</td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('coaches.edit', coach.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('coaches.destroy', coach.id)} method="delete" as="button">
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
