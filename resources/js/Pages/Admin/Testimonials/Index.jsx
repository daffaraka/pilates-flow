import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import Badge from '@/Components/ui/Badge';
import { Plus, Edit2, Trash2, CheckCircle, XCircle, Star } from 'lucide-react';

export default function Index({ testimonials }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="CMS: Testimoni">
            <Head title="Kelola Testimoni" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Daftar Testimoni</h2>
                    <p className="text-text-secondary">Ulasan klien yang akan ditampilkan di halaman utama.</p>
                </div>
                <Link href={route('testimonials.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tambah Testimoni
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary w-16">Foto</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Klien</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Rating</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Urutan</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {testimonials.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada testimoni.
                                    </td>
                                </tr>
                            ) : (
                                testimonials.map((testimonial) => (
                                    <tr key={testimonial.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4">
                                            {testimonial.photo ? (
                                                <img src={`/storage/${testimonial.photo}`} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                                    -
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-primary-dark">
                                            {testimonial.name}
                                            <div className="text-xs text-gray-500 font-normal">{testimonial.role || '-'}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                {testimonial.rating} <Star className="w-4 h-4 fill-current" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            {testimonial.sort_order}
                                        </td>
                                        <td className="px-6 py-4">
                                            {testimonial.is_active ? (
                                                <Badge variant="success" className="flex items-center gap-1 w-max"><CheckCircle className="w-3 h-3"/> Tampil</Badge>
                                            ) : (
                                                <Badge variant="warning" className="flex items-center gap-1 w-max"><XCircle className="w-3 h-3"/> Sembunyi</Badge>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('testimonials.edit', testimonial.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('testimonials.destroy', testimonial.id)} method="delete" as="button">
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
