import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Save, X } from 'lucide-react';

export default function Form({ pilatesClass }) {
    const { auth } = usePage().props;
    const isEdit = !!pilatesClass;

    const { data, setData, post, put, processing, errors } = useForm({
        name: pilatesClass?.name || '',
        description: pilatesClass?.description || '',
        duration: pilatesClass?.duration || 60,
        level: pilatesClass?.level || 'all_levels',
        image_url: pilatesClass?.image_url || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('classes.update', pilatesClass.id));
        } else {
            post(route('classes.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Kelas Pilates" : "Tambah Kelas Pilates"}>
            <Head title={isEdit ? "Edit Kelas" : "Tambah Kelas"} />

            <div className="mb-6">
                <h2 className="text-2xl font-serif text-primary-dark">
                    {isEdit ? "Edit Kelas Pilates" : "Tambah Kelas Pilates"}
                </h2>
                <p className="text-text-secondary">
                    Lengkapi form di bawah ini untuk menyimpan data kelas.
                </p>
            </div>

            <Card className="max-w-2xl">
                <Card.Body>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Nama Kelas</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                placeholder="Contoh: Reformer Basic"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Deskripsi</label>
                            <textarea
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                rows="4"
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                placeholder="Deskripsi singkat mengenai kelas ini..."
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Durasi (Menit)</label>
                                <input
                                    type="number"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.duration}
                                    onChange={e => setData('duration', e.target.value)}
                                />
                                {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Level</label>
                                <select
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.level}
                                    onChange={e => setData('level', e.target.value)}
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                    <option value="all_levels">All Levels</option>
                                </select>
                                {errors.level && <p className="text-red-500 text-sm mt-1">{errors.level}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">URL Gambar (Opsional)</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.image_url}
                                onChange={e => setData('image_url', e.target.value)}
                                placeholder="https://example.com/image.jpg"
                            />
                            {errors.image_url && <p className="text-red-500 text-sm mt-1">{errors.image_url}</p>}
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <Link href={route('classes.index')}>
                                <Button variant="outline" type="button" className="flex items-center gap-2">
                                    <X className="w-4 h-4" /> Batal
                                </Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex items-center gap-2">
                                <Save className="w-4 h-4" /> {processing ? 'Menyimpan...' : 'Simpan Kelas'}
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
}
