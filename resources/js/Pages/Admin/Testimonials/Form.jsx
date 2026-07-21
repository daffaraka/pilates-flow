import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Input from '@/Components/ui/Input';
import Button from '@/Components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';

export default function Form({ testimonial = null }) {
    const { auth } = usePage().props;
    const isEdit = !!testimonial;

    const { data, setData, post: submitForm, processing, errors } = useForm({
        name: testimonial?.name || '',
        role: testimonial?.role || '',
        quote: testimonial?.quote || '',
        photo: null,
        rating: testimonial?.rating || 5,
        is_active: testimonial?.is_active ?? true,
        sort_order: testimonial?.sort_order || 0,
        _method: isEdit ? 'PUT' : 'POST',
    });

    const submit = (e) => {
        e.preventDefault();
        
        if (isEdit) {
            submitForm(route('testimonials.update', testimonial.id));
        } else {
            submitForm(route('testimonials.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Testimoni" : "Tambah Testimoni"}>
            <Head title={isEdit ? "Edit Testimoni" : "Tambah Testimoni"} />

            <div className="mb-6">
                <Link href={route('testimonials.index')} className="text-text-secondary hover:text-primary transition flex items-center gap-2 w-max">
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Testimoni
                </Link>
            </div>

            <Card className="max-w-2xl">
                <form onSubmit={submit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Input
                                label="Nama Klien"
                                id="name"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                error={errors.name}
                                required
                            />
                        </div>

                        <div>
                            <Input
                                label="Peran/Pekerjaan (Opsional)"
                                id="role"
                                value={data.role}
                                onChange={e => setData('role', e.target.value)}
                                error={errors.role}
                                placeholder="Misal: Member Sejak 2024"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">Kutipan Testimoni</label>
                        <textarea
                            className={`w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                                errors.quote ? 'border-red-500 focus:border-red-500' : 'border-[#E5E0D8] focus:border-primary'
                            } bg-white shadow-sm`}
                            rows="4"
                            value={data.quote}
                            onChange={e => setData('quote', e.target.value)}
                            required
                        />
                        {errors.quote && <p className="text-sm text-red-500 mt-1">{errors.quote}</p>}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">Foto Klien (Opsional)</label>
                        {isEdit && testimonial.photo && (
                            <div className="mb-2">
                                <img src={`/storage/${testimonial.photo}`} alt="Current Photo" className="w-16 h-16 rounded-full object-cover" />
                            </div>
                        )}
                        <input
                            type="file"
                            onChange={e => setData('photo', e.target.files[0])}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                            accept="image/*"
                        />
                        {errors.photo && <p className="text-sm text-red-500 mt-1">{errors.photo}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Input
                                type="number"
                                min="1"
                                max="5"
                                label="Rating (1-5)"
                                id="rating"
                                value={data.rating}
                                onChange={e => setData('rating', e.target.value)}
                                error={errors.rating}
                                required
                            />
                        </div>

                        <div>
                            <Input
                                type="number"
                                label="Urutan Tampil (Makin kecil makin awal)"
                                id="sort_order"
                                value={data.sort_order}
                                onChange={e => setData('sort_order', e.target.value)}
                                error={errors.sort_order}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="is_active"
                            checked={data.is_active}
                            onChange={e => setData('is_active', e.target.checked)}
                            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="is_active" className="text-sm font-medium text-text-primary">
                            Tampilkan Testimoni ini
                        </label>
                    </div>

                    <div className="pt-4 flex justify-end border-t border-[#F0EBE1] mt-6">
                        <Button type="submit" disabled={processing} className="flex items-center gap-2">
                            <Save className="w-4 h-4" /> {isEdit ? 'Simpan Perubahan' : 'Tambah Testimoni'}
                        </Button>
                    </div>
                </form>
            </Card>
        </DashboardLayout>
    );
}
