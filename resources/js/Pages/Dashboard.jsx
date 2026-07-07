import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Button from '@/Components/ui/Button';
import ProgressRing from '@/Components/ui/ProgressRing';

export default function Dashboard({ auth }) {
    const [greeting, setGreeting] = useState('Selamat datang');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 11) setGreeting('Selamat pagi');
        else if (hour < 15) setGreeting('Selamat siang');
        else if (hour < 18) setGreeting('Selamat sore');
        else setGreeting('Selamat malam');
    }, []);

    // Dummy data for consistency calendar
    const consistencyDays = [
        { label: 'Sen', done: true },
        { label: 'Sel', done: false },
        { label: 'Rab', done: true },
        { label: 'Kam', done: false },
        { label: 'Jum', done: false },
        { label: 'Sab', done: false },
        { label: 'Min', done: false },
    ];

    return (
        <AppLayout title="Dashboard">
            <Head title="Dashboard Member" />

            <div className="space-y-6">
                
                {/* Bento Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Hero Card (Glassmorphism) - Spans 2 columns */}
                    <div className="md:col-span-2 relative overflow-hidden rounded-3xl p-8 bg-surface border border-white/40 shadow-sm backdrop-blur-md">
                        {/* Decorative gradient blob */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-60"></div>
                        
                        <div className="relative z-10">
                            <p className="text-primary-dark font-medium mb-1">{greeting},</p>
                            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
                                {auth.user.name.split(' ')[0]}
                            </h2>
                            
                            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 border border-white/50 max-w-md">
                                <p className="text-sm text-text-secondary mb-2">Kelas berikutnya</p>
                                <h3 className="text-xl font-bold text-text-primary">Reformer Core Flow</h3>
                                <p className="text-sm text-text-secondary mt-1 mb-4">Hari ini • 16:00 - 17:00</p>
                                <Button size="sm">Siap-siap (Check-in)</Button>
                            </div>
                        </div>
                    </div>

                    {/* Progress Ring Card */}
                    <div className="bg-surface rounded-3xl p-6 border border-[#F0EBE1] shadow-sm flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-serif text-text-primary mb-6">Sisa Membership</h3>
                        <ProgressRing radius={60} stroke={10} progress={5} total={8} />
                        <p className="text-sm text-text-secondary mt-4">
                            Kamu masih punya <strong className="text-primary-dark">5 sesi</strong> dari paket terakhirmu.
                        </p>
                    </div>

                    {/* Consistency Heatmap */}
                    <div className="bg-surface rounded-3xl p-6 border border-[#F0EBE1] shadow-sm md:col-span-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-serif text-text-primary mb-2">Konsistensi Minggu Ini</h3>
                            <p className="text-sm text-text-secondary mb-6">Kamu sudah berlatih 2 hari minggu ini. Teruskan!</p>
                        </div>
                        <div className="flex gap-2 justify-between">
                            {consistencyDays.map((day, idx) => (
                                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                                    <div 
                                        className={`w-full aspect-square rounded-full flex items-center justify-center transition-colors duration-500
                                        ${day.done ? 'bg-primary text-surface shadow-sm' : 'bg-background border border-[#E0E0E0]'}
                                    `}>
                                        {day.done && (
                                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        )}
                                    </div>
                                    <span className="text-xs text-text-secondary font-medium">{day.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Shortcuts */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-6">
                        <Link href={route('schedules.index')} className="bg-secondary/10 hover:bg-secondary/20 transition-colors rounded-3xl p-6 border border-secondary/20 flex flex-col justify-center items-start group">
                            <div className="w-12 h-12 bg-secondary/30 text-secondary-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="font-bold text-text-primary text-lg">Booking Kelas</h3>
                            <p className="text-sm text-text-secondary mt-1">Lihat jadwal & pesan sesi baru.</p>
                        </Link>

                        <Link href={route('packages.index')} className="bg-background hover:bg-[#EBE5DA] transition-colors rounded-3xl p-6 border border-[#F0EBE1] flex flex-col justify-center items-start group">
                            <div className="w-12 h-12 bg-surface shadow-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                            </div>
                            <h3 className="font-bold text-text-primary text-lg">Beli Paket</h3>
                            <p className="text-sm text-text-secondary mt-1">Perpanjang atau tambah sesi.</p>
                        </Link>
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}
