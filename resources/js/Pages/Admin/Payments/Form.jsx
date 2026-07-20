import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';
import { Save, X } from 'lucide-react';

export default function Form({ payment }) {
    const { auth } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        status: payment?.status || 'pending',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('payments.update', payment.id));
    };

    return (
        <DashboardLayout user={auth.user} headerTitle="Update Status Pembayaran">
            <Head title="Update Pembayaran" />

            <div className="mb-6">
                <h2 className="text-2xl font-serif text-primary-dark">Validasi Pembayaran</h2>
                <p className="text-text-secondary">Ubah status transaksi untuk member <strong>{payment.user?.name}</strong>.</p>
            </div>

            <Card className="max-w-xl">
                <Card.Body>
                    <div className="bg-sage-50 rounded-xl p-4 mb-6 border border-sage-100">
                        <h4 className="font-medium text-sage-800 mb-2">Detail Transaksi</h4>
                        <ul className="text-sm text-sage-700 space-y-1">
                            <li><strong>Paket:</strong> {payment.pricing_package?.name}</li>
                            <li><strong>Total:</strong> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(payment.amount)}</li>
                            <li><strong>Metode:</strong> {payment.method.toUpperCase()}</li>
                            <li><strong>Waktu Dibuat:</strong> {new Date(payment.created_at).toLocaleString('id-ID')}</li>
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Status Pembayaran</label>
                            <select
                                className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition"
                                value={data.status}
                                onChange={e => setData('status', e.target.value)}
                            >
                                <option value="pending">Pending (Menunggu Pembayaran)</option>
                                <option value="paid">Paid (Lunas)</option>
                                <option value="failed">Failed (Gagal / Dibatalkan)</option>
                            </select>
                            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <Link href={route('payments.index')}>
                                <Button variant="outline" type="button" className="flex items-center gap-2">
                                    <X className="w-4 h-4" /> Batal
                                </Button>
                            </Link>
                            <Button type="submit" disabled={processing} className="flex items-center gap-2">
                                <Save className="w-4 h-4" /> {processing ? 'Menyimpan...' : 'Simpan Status'}
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
}
