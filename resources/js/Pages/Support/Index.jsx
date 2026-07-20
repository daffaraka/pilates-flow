import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function SupportIndex({ auth }) {
    return (
        <DashboardLayout user={auth?.user} headerTitle="Bantuan & Dukungan">
            <Head title="Bantuan" />

            <div className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-serif text-primary-dark mb-4">Pusat Bantuan</h2>
                <p className="text-text-secondary max-w-md">Punya pertanyaan atau kendala? Hubungi tim admin PilatesFlow melalui halaman ini.</p>
            </div>
        </DashboardLayout>
    );
}
