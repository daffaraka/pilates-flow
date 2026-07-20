import React, { useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Save, X } from 'lucide-react';

export default function Form({ membership, users, packages }) {
    const { auth } = usePage().props;
    const isEdit = !!membership;

    const { data, setData, post, put, processing, errors } = useForm({
        user_id: membership?.user_id || '',
        pricing_package_id: membership?.pricing_package_id || '',
        sessions_remaining: membership?.sessions_remaining || 0,
        expired_at: membership?.expired_at || '',
        status: membership?.status || 'active',
    });

    // Auto-fill sessions and expiry when package changes (only for create)
    useEffect(() => {
        if (!isEdit && data.pricing_package_id) {
            const selectedPkg = packages.find(p => p.id == data.pricing_package_id);
            if (selectedPkg) {
                const expiryDate = new Date();
                expiryDate.setDate(expiryDate.getDate() + selectedPkg.validity_days);
                
                setData(d => ({
                    ...d,
                    sessions_remaining: selectedPkg.sessions_count,
                    expired_at: expiryDate.toISOString().split('T')[0]
                }));
            }
        }
    }, [data.pricing_package_id, isEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('memberships.update', membership.id));
        } else {
            post(route('memberships.store'));
        }
    };

    return (
        <DashboardLayout user={auth.user} headerTitle={isEdit ? "Edit Membership" : "Tambah Membership"}>
            <Head title={isEdit ? "Edit Membership" : "Tambah Membership"} />

            <div className="mb-6">
                <h2 className="text-2xl font-serif text-primary-dark">
                    {isEdit ? "Edit Data Membership" : "Daftarkan Membership Baru"}
                </h2>
                <p className="text-text-secondary">
                    Tentukan member, paket yang dipilih, serta sisa kuota sesi secara manual.
                </p>
            </div>

            <Card className="max-w-3xl">
                <Card.Body>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Pilih Member</label>
                                <select
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.user_id}
                                    onChange={e => setData('user_id', e.target.value)}
                                    disabled={isEdit} // Biasa admin tak boleh ganti member saat edit
                                >
                                    <option value="" disabled>-- Pilih Member --</option>
                                    {users.map(u => (
                                        <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
                                    ))}
                                </select>
                                {errors.user_id && <p className="text-red-500 text-sm mt-1">{errors.user_id}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Pilih Paket Harga</label>
                                <select
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.pricing_package_id}
                                    onChange={e => setData('pricing_package_id', e.target.value)}
                                >
                                    <option value="" disabled>-- Pilih Paket --</option>
                                    {packages.map(p => (
                                        <option key={p.id} value={p.id}>{p.name} ({p.sessions_count} sesi)</option>
                                    ))}
                                </select>
                                {errors.pricing_package_id && <p className="text-red-500 text-sm mt-1">{errors.pricing_package_id}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Sisa Sesi</label>
                                <input
                                    type="number"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.sessions_remaining}
                                    onChange={e => setData('sessions_remaining', e.target.value)}
                                />
                                {errors.sessions_remaining && <p className="text-red-500 text-sm mt-1">{errors.sessions_remaining}</p>}
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Tanggal Berakhir</label>
                                <input
                                    type="date"
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.expired_at}
                                    onChange={e => setData('expired_at', e.target.value)}
                                />
                                {errors.expired_at && <p className="text-red-500 text-sm mt-1">{errors.expired_at}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">Status</label>
                                <select
                                    className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                    value={data.status}
                                    onChange={e => setData('status', e.target.value)}
                                >
                                    <option value="active">Active (Aktif)</option>
                                    <option value="expired">Expired (Kadaluarsa)</option>
                                </select>
                                {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <Link href={route('memberships.index')}>
                                <Button variant="outline" type="button" className="flex items-center gap-2">
                                    <X className="w-4 h-4" /> Batal
                                </Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex items-center gap-2">
                                <Save className="w-4 h-4" /> {processing ? 'Menyimpan...' : 'Simpan Membership'}
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
}
