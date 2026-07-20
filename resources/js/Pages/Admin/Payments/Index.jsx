import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import Badge from '@/Components/ui/Badge';
import { Edit2, Trash2 } from 'lucide-react';

export default function Index({ payments }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="Operasional: Pembayaran">
            <Head title="Kelola Pembayaran" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Daftar Pembayaran</h2>
                    <p className="text-text-secondary">Kelola transaksi dan validasi pembayaran paket membership.</p>
                </div>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary">Waktu Dibuat</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Member</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Paket / Item</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Total (Rp)</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Metode</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {payments.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada data pembayaran.
                                    </td>
                                </tr>
                            ) : (
                                payments.map((p) => (
                                    <tr key={p.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4">
                                            {new Date(p.created_at).toLocaleString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4 font-medium">{p.user?.name}</td>
                                        <td className="px-6 py-4">{p.pricing_package?.name}</td>
                                        <td className="px-6 py-4 font-bold text-primary-dark">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(p.amount)}
                                        </td>
                                        <td className="px-6 py-4 uppercase text-xs">{p.method}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant={
                                                p.status === 'paid' ? 'success' : 
                                                p.status === 'pending' ? 'warning' : 'destructive'
                                            }>
                                                {p.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('payments.edit', p.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('payments.destroy', p.id)} method="delete" as="button">
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
