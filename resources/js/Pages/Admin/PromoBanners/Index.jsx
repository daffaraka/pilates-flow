import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import Badge from '@/Components/ui/Badge';
import { Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function Index({ banners }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="CMS: Promo Banner">
            <Head title="Kelola Banner" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Daftar Banner</h2>
                    <p className="text-text-secondary">Kelola banner promo atau informasi di halaman depan.</p>
                </div>
                <Link href={route('promo-banners.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tambah Banner
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary w-32">Gambar</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Judul</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Periode Aktif</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {banners.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada banner promo.
                                    </td>
                                </tr>
                            ) : (
                                banners.map((banner) => (
                                    <tr key={banner.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4">
                                            {banner.image ? (
                                                <img src={`/storage/${banner.image}`} alt={banner.title} className="w-24 h-12 rounded object-cover" />
                                            ) : (
                                                <div className="w-24 h-12 rounded bg-gray-200 flex items-center justify-center text-gray-400">
                                                    -
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-primary-dark">
                                            {banner.title}
                                            {banner.link && (
                                                <div className="text-xs text-blue-500 font-normal mt-1"><a href={banner.link} target="_blank" rel="noreferrer">Lihat Link</a></div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 text-xs">
                                            {new Date(banner.start_date).toLocaleDateString('id-ID')} - {new Date(banner.end_date).toLocaleDateString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4">
                                            {banner.is_active ? (
                                                <Badge variant="success" className="flex items-center gap-1 w-max"><CheckCircle className="w-3 h-3"/> Aktif</Badge>
                                            ) : (
                                                <Badge variant="warning" className="flex items-center gap-1 w-max"><XCircle className="w-3 h-3"/> Nonaktif</Badge>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('promo-banners.edit', banner.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('promo-banners.destroy', banner.id)} method="delete" as="button">
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
