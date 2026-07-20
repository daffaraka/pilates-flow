import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Save, X } from 'lucide-react';

export default function Form({ coach }) {
    const { auth } = usePage().props;
    const isEdit = !!coach;

    const { data, setData, post, put, processing, errors } = useForm({
        name: coach?.name || '',
        specialty: coach?.specialty || '',
        bio: coach?.bio || '',
        photo_url: coach?.photo_url || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('coaches.update', coach.id));
        } else {
            post(route('coaches.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Pelatih" : "Tambah Pelatih"}>
            <Head title={isEdit ? "Edit Pelatih" : "Tambah Pelatih"} />

            <div className="mb-6">
                <h2 className="text-2xl font-serif text-primary-dark">
                    {isEdit ? "Edit Pelatih" : "Tambah Pelatih"}
                </h2>
                <p className="text-text-secondary">
                    Lengkapi form di bawah ini untuk menyimpan data instruktur / pelatih.
                </p>
            </div>

            <Card className="max-w-2xl">
                <Card.Body>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Nama Lengkap</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                placeholder="Contoh: Sarah Johnson"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Spesialisasi</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.specialty}
                                onChange={e => setData('specialty', e.target.value)}
                                placeholder="Contoh: Mat Pilates, Reformer"
                            />
                            {errors.specialty && <p className="text-red-500 text-sm mt-1">{errors.specialty}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Biografi Singkat (Opsional)</label>
                            <textarea
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                rows="4"
                                value={data.bio}
                                onChange={e => setData('bio', e.target.value)}
                                placeholder="Ceritakan pengalaman atau latar belakang pelatih..."
                            ></textarea>
                            {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">URL Foto (Opsional)</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.photo_url}
                                onChange={e => setData('photo_url', e.target.value)}
                                placeholder="https://example.com/photo.jpg"
                            />
                            {errors.photo_url && <p className="text-red-500 text-sm mt-1">{errors.photo_url}</p>}
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <Link href={route('coaches.index')}>
                                <Button variant="outline" type="button" className="flex items-center gap-2">
                                    <X className="w-4 h-4" /> Batal
                                </Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex items-center gap-2">
                                <Save className="w-4 h-4" /> {processing ? 'Menyimpan...' : 'Simpan Pelatih'}
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
}
