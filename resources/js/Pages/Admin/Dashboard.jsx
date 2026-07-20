import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <DashboardLayout user={auth?.user} headerTitle="Dashboard">
            <Head title="Dashboard" />

            {/* Bento Grid Area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Hero / Greeting Card */}
                <div className="md:col-span-2 bg-sage-500 rounded-3xl p-8 text-ivory relative overflow-hidden shadow-sm">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <svg className="w-48 h-48" viewBox="0 0 200 200" fill="currentColor">
                            <circle cx="100" cy="100" r="100" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <h2 className="font-serif text-3xl font-medium mb-2">Selamat pagi, {auth?.user?.name || 'Nadia'}!</h2>
                        <p className="text-sage-100 mb-8 max-w-md text-lg">Siap untuk sesi hari ini? Kelas Anda berikutnya akan dimulai dalam 2 jam.</p>
                        
                        <div className="bg-ivory/10 backdrop-blur-md rounded-2xl p-5 inline-block border border-ivory/20">
                            <p className="text-sm text-sage-100 mb-1">Upcoming Class</p>
                            <p className="font-serif text-xl font-medium">Reformer Foundation</p>
                            <p className="text-sm text-sage-100 mt-2 flex items-center gap-2">
                                <span>10:00 - 11:00</span>
                                <span className="w-1 h-1 rounded-full bg-sage-300"></span>
                                <span>Studio A</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Membership Card */}
                <div className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <h3 className="text-text-secondary font-medium mb-1">Sisa Kuota</h3>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="font-serif text-5xl font-medium text-text-primary">8</span>
                            <span className="text-text-secondary pb-1">sesi</span>
                        </div>
                        <p className="text-sm text-text-secondary">Paket Reformer 12x</p>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-sm text-text-secondary mb-3">Berlaku sampai 28 Agustus 2026</p>
                        <button className="w-full py-3 bg-sage-100 text-primary-dark font-medium rounded-xl hover:bg-sage-300 transition-colors">
                            Perpanjang Paket
                        </button>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
