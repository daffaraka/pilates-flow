import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Card from '@/Components/ui/Card';
import Button from '@/Components/ui/Button';

export default function Index({ packages }) {
    return (
        <AppLayout title="Membership">
            <Head title="Membership Packages" />
            
            <div>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl mb-4">Pilih Paket <span className="italic text-primary">Membership</span> Anda</h1>
                    <p className="text-text-secondary text-lg">Investasikan waktu untuk kesehatan fisik dan mental Anda bersama PilatesFlow.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map(pkg => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}

function PackageCard({ pkg }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <Card className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
            <Card.Header className="text-center bg-[#F9F7F4]">
                <h3 className="text-2xl font-serif text-primary-dark mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-text-primary">
                    {formatPrice(pkg.price)}
                </div>
            </Card.Header>
            <Card.Body className="flex-1">
                <ul className="space-y-4 text-text-secondary mt-4">
                    <li className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {pkg.session_count} Sesi Kelas Pilates
                    </li>
                    <li className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Masa aktif {pkg.validity_days} Hari
                    </li>
                    <li className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Akses ke semua alat (Reformer, Cadillac)
                    </li>
                </ul>
            </Card.Body>
            <Card.Footer>
                {/* Note: Alur pembayaran (dummy) bisa ditambahkan di sini nantinya */}
                <Button className="w-full" variant="primary">Beli Paket Ini</Button>
            </Card.Footer>
        </Card>
    );
}
