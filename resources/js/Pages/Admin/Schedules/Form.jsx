import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Save, X } from 'lucide-react';

export default function Form({ schedule, coaches, classes }) {
    const { auth } = usePage().props;
    const isEdit = !!schedule;

    const { data, setData, post, put, processing, errors } = useForm({
        class_id: schedule?.class_id || '',
        coach_id: schedule?.coach_id || '',
        date: schedule?.date || '',
        start_time: schedule?.start_time ? schedule.start_time.substring(0, 5) : '',
        end_time: schedule?.end_time ? schedule.end_time.substring(0, 5) : '',
        capacity: schedule?.capacity || 10,
        location: schedule?.location || 'Studio 1',
        status: schedule?.status || 'scheduled',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('schedules.update', schedule.id));
        } else {
            post(route('schedules.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Jadwal" : "Tambah Jadwal"}>
            <Head title={isEdit ? "Edit Jadwal" : "Tambah Jadwal"} />

            <div className="mb-6">
                <h2 className="text-2xl font-serif text-primary-dark">
                    {isEdit ? "Edit Jadwal Kelas" : "Tambah Jadwal Kelas"}
                </h2>
                <p className="text-text-secondary">
                    Tentukan tanggal, waktu, kelas, dan pelatih yang bertugas.
                </p>
            </div>

            <Card className="max-w-3xl">
                <Card.Body>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Pilih Kelas</label>
                                <select
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.class_id}
                                    onChange={e => setData('class_id', e.target.value)}
                                >
                                    <option value="" disabled>-- Pilih Kelas --</option>
                                    {classes.map(c => (
                                        <option key={c.id} value={c.id}>{c.name} ({c.level.replace('_', ' ')})</option>
                                    ))}
                                </select>
                                {errors.class_id && <p className="text-red-500 text-sm mt-1">{errors.class_id}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Pilih Pelatih</label>
                                <select
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.coach_id}
                                    onChange={e => setData('coach_id', e.target.value)}
                                >
                                    <option value="" disabled>-- Pilih Pelatih --</option>
                                    {coaches.map(c => (
                                        <option key={c.id} value={c.id}>{c.name} ({c.specialty})</option>
                                    ))}
                                </select>
                                {errors.coach_id && <p className="text-red-500 text-sm mt-1">{errors.coach_id}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Tanggal</label>
                                <input
                                    type="date"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.date}
                                    onChange={e => setData('date', e.target.value)}
                                />
                                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Waktu Mulai</label>
                                <input
                                    type="time"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.start_time}
                                    onChange={e => setData('start_time', e.target.value)}
                                />
                                {errors.start_time && <p className="text-red-500 text-sm mt-1">{errors.start_time}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Waktu Selesai</label>
                                <input
                                    type="time"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.end_time}
                                    onChange={e => setData('end_time', e.target.value)}
                                />
                                {errors.end_time && <p className="text-red-500 text-sm mt-1">{errors.end_time}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Kapasitas</label>
                                <input
                                    type="number"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.capacity}
                                    onChange={e => setData('capacity', e.target.value)}
                                    placeholder="Contoh: 10"
                                />
                                {errors.capacity && <p className="text-red-500 text-sm mt-1">{errors.capacity}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Lokasi / Ruangan</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.location}
                                    onChange={e => setData('location', e.target.value)}
                                    placeholder="Contoh: Studio 1"
                                />
                                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Status</label>
                                <select
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.status}
                                    onChange={e => setData('status', e.target.value)}
                                >
                                    <option value="scheduled">Scheduled (Dijadwalkan)</option>
                                    <option value="completed">Completed (Selesai)</option>
                                    <option value="cancelled">Cancelled (Dibatalkan)</option>
                                </select>
                                {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <Link href={route('schedules.index')}>
                                <Button variant="outline" type="button" className="flex items-center gap-2">
                                    <X className="w-4 h-4" /> Batal
                                </Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex items-center gap-2">
                                <Save className="w-4 h-4" /> {processing ? 'Menyimpan...' : 'Simpan Jadwal'}
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
}
