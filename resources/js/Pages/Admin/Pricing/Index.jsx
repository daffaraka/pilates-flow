import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function Index({ packages }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="Master Data Paket Harga">
            <Head title="Kelola Paket Harga" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Paket Harga</h2>
                    <p className="text-text-secondary">Kelola paket sesi pilates yang dapat dibeli oleh member.</p>
                </div>
                <Link href={route('pricing.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tambah Paket
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary">Nama Paket</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Harga</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Jumlah Sesi</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Masa Aktif (Hari)</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {packages.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada data paket harga.
                                    </td>
                                </tr>
                            ) : (
                                packages.map((pkg) => (
                                    <tr key={pkg.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4 font-medium">{pkg.name}</td>
                                        <td className="px-6 py-4 font-bold text-primary-dark">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(pkg.price)}
                                        </td>
                                        <td className="px-6 py-4">{pkg.sessions_count} Sesi</td>
                                        <td className="px-6 py-4">{pkg.validity_days} Hari</td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('pricing.edit', pkg.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('pricing.destroy', pkg.id)} method="delete" as="button">
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
