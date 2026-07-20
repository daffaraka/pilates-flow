import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import Badge from '@/Components/ui/Badge';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function Index({ memberships }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="Operasional: Membership Aktif">
            <Head title="Kelola Membership" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Daftar Membership</h2>
                    <p className="text-text-secondary">Pantau paket aktif yang dimiliki oleh masing-masing member.</p>
                </div>
                <Link href={route('memberships.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tambah Membership
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary">Member</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Paket</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Sisa Sesi</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Masa Berlaku</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {memberships.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada data membership.
                                    </td>
                                </tr>
                            ) : (
                                memberships.map((m) => (
                                    <tr key={m.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4 font-medium text-primary-dark">{m.user?.name}</td>
                                        <td className="px-6 py-4">{m.pricing_package?.name}</td>
                                        <td className="px-6 py-4">
                                            <span className={`font-bold ${m.sessions_remaining > 0 ? 'text-sage-600' : 'text-red-500'}`}>
                                                {m.sessions_remaining}
                                            </span> Sesi
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(m.expired_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={m.status === 'active' ? 'success' : 'destructive'}>
                                                {m.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('memberships.edit', m.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('memberships.destroy', m.id)} method="delete" as="button">
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
