import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Input from '@/Components/ui/Input';
import Button from '@/Components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';

export default function Form({ banner = null }) {
    const { auth } = usePage().props;
    const isEdit = !!banner;

    const { data, setData, post: submitForm, processing, errors } = useForm({
        title: banner?.title || '',
        image: null,
        link: banner?.link || '',
        start_date: banner?.start_date ? banner.start_date.split('T')[0] : '',
        end_date: banner?.end_date ? banner.end_date.split('T')[0] : '',
        is_active: banner?.is_active ?? true,
        _method: isEdit ? 'PUT' : 'POST',
    });

    const submit = (e) => {
        e.preventDefault();
        
        if (isEdit) {
            submitForm(route('promo-banners.update', banner.id));
        } else {
            submitForm(route('promo-banners.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Banner" : "Tambah Banner"}>
            <Head title={isEdit ? "Edit Banner" : "Tambah Banner"} />

            <div className="mb-6">
                <Link href={route('promo-banners.index')} className="text-text-secondary hover:text-primary transition flex items-center gap-2 w-max">
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Banner
                </Link>
            </div>

            <Card className="max-w-2xl">
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <Input
                            label="Judul Promo / Banner"
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            error={errors.title}
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">Gambar Banner</label>
                        {isEdit && banner.image && (
                            <div className="mb-2">
                                <img src={`/storage/${banner.image}`} alt="Current Banner" className="h-32 rounded object-cover" />
                            </div>
                        )}
                        <input
                            type="file"
                            onChange={e => setData('image', e.target.files[0])}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                            accept="image/*"
                        />
                        {errors.image && <p className="text-sm text-red-500 mt-1">{errors.image}</p>}
                    </div>

                    <div>
                        <Input
                            label="Link Tujuan (Opsional)"
                            id="link"
                            value={data.link}
                            onChange={e => setData('link', e.target.value)}
                            error={errors.link}
                            placeholder="https://..."
                        />
                        <p className="text-xs text-gray-500 mt-1">Jika di klik, akan diarahkan ke link ini.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Input
                                type="date"
                                label="Tanggal Mulai"
                                id="start_date"
                                value={data.start_date}
                                onChange={e => setData('start_date', e.target.value)}
                                error={errors.start_date}
                                required
                            />
                        </div>

                        <div>
                            <Input
                                type="date"
                                label="Tanggal Selesai"
                                id="end_date"
                                value={data.end_date}
                                onChange={e => setData('end_date', e.target.value)}
                                error={errors.end_date}
                                required
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
                            Aktifkan Banner ini
                        </label>
                    </div>

                    <div className="pt-4 flex justify-end border-t border-[#F0EBE1] mt-6">
                        <Button type="submit" disabled={processing} className="flex items-center gap-2">
                            <Save className="w-4 h-4" /> {isEdit ? 'Simpan Perubahan' : 'Tambah Banner'}
                        </Button>
                    </div>
                </form>
            </Card>
        </DashboardLayout>
    );
}
