import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function SettingsIndex({ auth }) {
    return (
        <DashboardLayout user={auth?.user} headerTitle="Pengaturan Akun">
            <Head title="Pengaturan" />

            <div className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-serif text-primary-dark mb-4">Pengaturan</h2>
                <p className="text-text-secondary max-w-md">Konfigurasi akun, notifikasi, dan preferensi aplikasi Anda.</p>
            </div>
        </DashboardLayout>
    );
}
