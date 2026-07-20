import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Save, X } from 'lucide-react';

export default function Form({ package: pricingPackage }) {
    const { auth } = usePage().props;
    const isEdit = !!pricingPackage;

    const { data, setData, post, put, processing, errors } = useForm({
        name: pricingPackage?.name || '',
        description: pricingPackage?.description || '',
        price: pricingPackage?.price || '',
        sessions_count: pricingPackage?.sessions_count || 1,
        validity_days: pricingPackage?.validity_days || 30,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('pricing.update', pricingPackage.id));
        } else {
            post(route('pricing.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Paket Harga" : "Tambah Paket Harga"}>
            <Head title={isEdit ? "Edit Paket" : "Tambah Paket"} />

            <div className="mb-6">
                <h2 className="text-2xl font-serif text-primary-dark">
                    {isEdit ? "Edit Paket Harga" : "Tambah Paket Harga"}
                </h2>
                <p className="text-text-secondary">
                    Lengkapi form di bawah ini untuk menyimpan data paket harga.
                </p>
            </div>

            <Card className="max-w-2xl">
                <Card.Body>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Nama Paket</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                placeholder="Contoh: Paket 10 Sesi"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Deskripsi Lengkap</label>
                            <textarea
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                rows="4"
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                placeholder="Jelaskan fasilitas atau ketentuan paket ini..."
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Harga (Rp)</label>
                            <input
                                type="number"
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.price}
                                onChange={e => setData('price', e.target.value)}
                                placeholder="Contoh: 1500000"
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Jumlah Sesi</label>
                                <input
                                    type="number"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.sessions_count}
                                    onChange={e => setData('sessions_count', e.target.value)}
                                />
                                {errors.sessions_count && <p className="text-red-500 text-sm mt-1">{errors.sessions_count}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Masa Aktif (Hari)</label>
                                <input
                                    type="number"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.validity_days}
                                    onChange={e => setData('validity_days', e.target.value)}
                                />
                                {errors.validity_days && <p className="text-red-500 text-sm mt-1">{errors.validity_days}</p>}
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <Link href={route('pricing.index')}>
                                <Button variant="outline" type="button" className="flex items-center gap-2">
                                    <X className="w-4 h-4" /> Batal
                                </Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex items-center gap-2">
                                <Save className="w-4 h-4" /> {processing ? 'Menyimpan...' : 'Simpan Paket'}
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
}
