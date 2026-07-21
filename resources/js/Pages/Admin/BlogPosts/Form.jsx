import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Input from '@/Components/ui/Input';
import Button from '@/Components/ui/Button';
import { ArrowLeft, Save, Upload } from 'lucide-react';

export default function Form({ post = null }) {
    const { auth } = usePage().props;
    const isEdit = !!post;

    const { data, setData, post: submitPost, processing, errors } = useForm({
        title: post?.title || '',
        slug: post?.slug || '',
        excerpt: post?.excerpt || '',
        content: post?.content || '',
        cover_image: null,
        meta_description: post?.meta_description || '',
        is_published: post?.is_published || false,
        published_at: post?.published_at ? post.published_at.split('T')[0] : '', // Format for date input
        _method: isEdit ? 'PUT' : 'POST',
    });

    const submit = (e) => {
        e.preventDefault();
        
        if (isEdit) {
            submitPost(route('blog-posts.update', post.id));
        } else {
            submitPost(route('blog-posts.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Blog Post" : "Tulis Blog Post"}>
            <Head title={isEdit ? "Edit Blog" : "Tulis Blog"} />

            <div className="mb-6">
                <Link href={route('blog-posts.index')} className="text-text-secondary hover:text-primary transition flex items-center gap-2 w-max">
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Blog
                </Link>
            </div>

            <Card className="max-w-4xl">
                <form onSubmit={submit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div>
                                <Input
                                    label="Judul Artikel"
                                    id="title"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    error={errors.title}
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
                                />
                                <p className="text-xs text-gray-500 mt-1">Kosongkan untuk otomatis dari judul.</p>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-1">Cover Image</label>
                                {isEdit && post.cover_image && (
                                    <div className="mb-2">
                                        <img src={`/storage/${post.cover_image}`} alt="Current Cover" className="h-32 rounded object-cover" />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    onChange={e => setData('cover_image', e.target.files[0])}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                                    accept="image/*"
                                />
                                {errors.cover_image && <p className="text-sm text-red-500 mt-1">{errors.cover_image}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-1">Excerpt (Ringkasan Singkat)</label>
                                <textarea
                                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                                        errors.excerpt ? 'border-red-500 focus:border-red-500' : 'border-[#E5E0D8] focus:border-primary'
                                    } bg-white shadow-sm`}
                                    rows="3"
                                    value={data.excerpt}
                                    onChange={e => setData('excerpt', e.target.value)}
                                />
                                {errors.excerpt && <p className="text-sm text-red-500 mt-1">{errors.excerpt}</p>}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-1">Isi Artikel Lengkap</label>
                                <textarea
                                    className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                                        errors.content ? 'border-red-500 focus:border-red-500' : 'border-[#E5E0D8] focus:border-primary'
                                    } bg-white shadow-sm`}
                                    rows="12"
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                />
                                {errors.content && <p className="text-sm text-red-500 mt-1">{errors.content}</p>}
                            </div>

                            <div>
                                <Input
                                    type="date"
                                    label="Tanggal Publikasi"
                                    id="published_at"
                                    value={data.published_at}
                                    onChange={e => setData('published_at', e.target.value)}
                                    error={errors.published_at}
                                />
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
                                    Publikasikan Artikel
                                </label>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-1">Meta Deskripsi (SEO)</label>
                                <textarea
                                    className="w-full px-4 py-2 rounded-xl border border-[#E5E0D8] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white shadow-sm"
                                    rows="2"
                                    value={data.meta_description}
                                    onChange={e => setData('meta_description', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end border-t border-[#F0EBE1] mt-6">
                        <Button type="submit" disabled={processing} className="flex items-center gap-2">
                            <Save className="w-4 h-4" /> {isEdit ? 'Simpan Perubahan' : 'Publish Blog'}
                        </Button>
                    </div>
                </form>
            </Card>
        </DashboardLayout>
    );
}
