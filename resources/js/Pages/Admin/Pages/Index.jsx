import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import Badge from '@/Components/ui/Badge';
import { Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function Index({ pages }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="CMS: Halaman Statis">
            <Head title="Kelola Halaman" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Daftar Halaman</h2>
                    <p className="text-text-secondary">Kelola halaman statis untuk website (misal: About Us, Term of Service).</p>
                </div>
                <Link href={route('pages.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tambah Halaman
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary">Judul Halaman</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Slug</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {pages.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada halaman.
                                    </td>
                                </tr>
                            ) : (
                                pages.map((page) => (
                                    <tr key={page.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4 font-medium text-primary-dark">{page.title}</td>
                                        <td className="px-6 py-4 text-gray-500">/{page.slug}</td>
                                        <td className="px-6 py-4">
                                            {page.is_published ? (
                                                <Badge variant="success" className="flex items-center gap-1 w-max"><CheckCircle className="w-3 h-3"/> Published</Badge>
                                            ) : (
                                                <Badge variant="warning" className="flex items-center gap-1 w-max"><XCircle className="w-3 h-3"/> Draft</Badge>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('pages.edit', page.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('pages.destroy', page.id)} method="delete" as="button">
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
