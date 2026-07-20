import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function Index({ classes }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="Master Kelas Pilates">
            <Head title="Kelola Kelas Pilates" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Kelas Pilates</h2>
                    <p className="text-text-secondary">Kelola data master kelas pilates yang ditawarkan.</p>
                </div>
                <Link href={route('classes.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tambah Kelas
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary">Nama Kelas</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Level</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Durasi (Menit)</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {classes.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada data kelas.
                                    </td>
                                </tr>
                            ) : (
                                classes.map((c) => (
                                    <tr key={c.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4 font-medium">{c.name}</td>
                                        <td className="px-6 py-4 capitalize">{c.level.replace('_', ' ')}</td>
                                        <td className="px-6 py-4">{c.duration}</td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('classes.edit', c.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('classes.destroy', c.id)} method="delete" as="button">
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
