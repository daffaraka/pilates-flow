import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Input from '@/Components/ui/Input';
import Button from '@/Components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';

export default function Form({ page = null }) {
    const { auth } = usePage().props;
    const isEdit = !!page;

    const { data, setData, post, put, processing, errors } = useForm({
        title: page?.title || '',
        slug: page?.slug || '',
        meta_description: page?.meta_description || '',
        content: page?.content || { blocks: [] }, // Using a JSON structure for content blocks if needed later
        is_published: page?.is_published || false,
    });

    const submit = (e) => {
        e.preventDefault();
        
        // Convert content to JSON string for passing through inputs if we use textarea
        // But Inertia can handle objects directly for JSON columns.
        if (isEdit) {
            put(route('pages.update', page.id));
        } else {
            post(route('pages.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Halaman" : "Tambah Halaman"}>
            <Head title={isEdit ? "Edit Halaman" : "Tambah Halaman"} />

            <div className="mb-6">
                <Link href={route('pages.index')} className="text-text-secondary hover:text-primary transition flex items-center gap-2 w-max">
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Halaman
                </Link>
            </div>

            <Card className="max-w-3xl">
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <Input
                            label="Judul Halaman"
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            error={errors.title}
                            placeholder="Misal: Tentang Kami"
                            required
                        />
                    </div>

                    <div>
                        <Input
                            label="Slug URL (Opsional)"
                            id="slug"
                            value={data.slug}
                            onChange={e => setData('slug', e.target.value)}
                            error={errors.slug}
                            placeholder="Misal: tentang-kami"
                        />
                        <p className="text-xs text-gray-500 mt-1">Biarkan kosong untuk generate otomatis dari judul.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">Meta Deskripsi (Untuk SEO)</label>
                        <textarea
                            className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                                errors.meta_description ? 'border-red-500 focus:border-red-500' : 'border-[#E5E0D8] focus:border-primary'
                            } bg-white shadow-sm`}
                            rows="3"
                            value={data.meta_description}
                            onChange={e => setData('meta_description', e.target.value)}
                            placeholder="Deskripsi singkat untuk halaman ini..."
                        />
                        {errors.meta_description && <p className="text-sm text-red-500 mt-1">{errors.meta_description}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">Konten Halaman</label>
                        <textarea
                            className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                                errors.content ? 'border-red-500 focus:border-red-500' : 'border-[#E5E0D8] focus:border-primary'
                            } bg-white shadow-sm`}
                            rows="10"
                            value={typeof data.content === 'string' ? data.content : JSON.stringify(data.content)}
                            onChange={e => setData('content', e.target.value)} // Simplifying for now to just accept text/json
                            placeholder="Isi konten halaman..."
                        />
                         <p className="text-xs text-gray-500 mt-1">Anda bisa memasukkan teks atau format JSON untuk dirender di Frontend.</p>
                        {errors.content && <p className="text-sm text-red-500 mt-1">{errors.content}</p>}
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="is_published"
                            checked={data.is_published}
                            onChange={e => setData('is_published', e.target.checked)}
                            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="is_published" className="text-sm font-medium text-text-primary">
                            Publikasikan Halaman
                        </label>
                    </div>
                    {errors.is_published && <p className="text-sm text-red-500 mt-1">{errors.is_published}</p>}

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" disabled={processing} className="flex items-center gap-2">
                            <Save className="w-4 h-4" /> {isEdit ? 'Simpan Perubahan' : 'Buat Halaman'}
                        </Button>
                    </div>
                </form>
            </Card>
        </DashboardLayout>
    );
}
