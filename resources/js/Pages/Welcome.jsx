import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Button from '@/Components/ui/Button';

export default function Welcome() {
    return (
        <MainLayout>
            <Head title="Welcome to PilatesFlow" />
            
            <div className="flex flex-col items-center justify-center text-center py-20">
                <h1 className="text-5xl md:text-6xl mb-6">
                    Temukan <span className="italic text-primary">Keseimbangan</span> Anda
                </h1>
                <p className="text-xl text-text-secondary max-w-2xl mb-10">
                    Bergabunglah dengan PilatesFlow Studio untuk memperkuat tubuh, menenangkan pikiran, dan menemukan versi terbaik dari diri Anda.
                </p>
                <div className="flex gap-4">
                    <Link href={route('schedules.index')}>
                        <Button size="lg">Lihat Jadwal</Button>
                    </Link>
                    <Link href={route('packages.index')}>
                        <Button variant="outline" size="lg">Membership</Button>
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 py-16">
                <FeatureCard 
                    title="Instruktur Bersertifikat"
                    description="Dibimbing oleh instruktur profesional yang berpengalaman untuk memastikan setiap gerakan Anda aman dan efektif."
                />
                <FeatureCard 
                    title="Studio Premium"
                    description="Fasilitas lengkap dengan reformer kelas dunia dan suasana yang menenangkan."
                />
                <FeatureCard 
                    title="Komunitas Suportif"
                    description="Berkembang bersama komunitas yang saling mendukung dalam perjalanan wellness Anda."
                />
            </div>
        </MainLayout>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div className="bg-surface p-8 rounded-3xl shadow-sm border border-[#F0EBE1] text-center hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl mb-3">{title}</h3>
            <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>
    );
}
