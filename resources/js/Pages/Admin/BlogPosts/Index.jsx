import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import Badge from '@/Components/ui/Badge';
import { Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function Index({ posts }) {
    const { auth } = usePage().props;

    return (
        <DashboardLayout user={auth.user} headerTitle="CMS: Blog & Pengumuman">
            <Head title="Kelola Blog" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-primary-dark">Daftar Blog Post</h2>
                    <p className="text-text-secondary">Buat artikel, tips, atau pengumuman seputar Pilates.</p>
                </div>
                <Link href={route('blog-posts.create')}>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Tulis Blog Baru
                    </Button>
                </Link>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-background border-b border-[#F0EBE1]">
                            <tr>
                                <th className="px-6 py-4 font-medium text-text-secondary w-16">Cover</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Judul</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Tanggal Publish</th>
                                <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                <th className="px-6 py-4 font-medium text-text-secondary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1]">
                            {posts.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-text-secondary">
                                        Belum ada blog post.
                                    </td>
                                </tr>
                            ) : (
                                posts.map((post) => (
                                    <tr key={post.id} className="hover:bg-background/50 transition">
                                        <td className="px-6 py-4">
                                            {post.cover_image ? (
                                                <img src={`/storage/${post.cover_image}`} alt={post.title} className="w-12 h-12 rounded object-cover" />
                                            ) : (
                                                <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center text-gray-400">
                                                    -
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-primary-dark">
                                            {post.title}
                                            <div className="text-xs text-gray-500 font-normal truncate max-w-[200px] mt-1">{post.excerpt}</div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            {post.published_at ? new Date(post.published_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {post.is_published ? (
                                                <Badge variant="success" className="flex items-center gap-1 w-max"><CheckCircle className="w-3 h-3"/> Published</Badge>
                                            ) : (
                                                <Badge variant="warning" className="flex items-center gap-1 w-max"><XCircle className="w-3 h-3"/> Draft</Badge>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 flex justify-end gap-2">
                                            <Link href={route('blog-posts.edit', post.id)}>
                                                <Button variant="outline" size="sm" className="!p-2">
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Link href={route('blog-posts.destroy', post.id)} method="delete" as="button">
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
