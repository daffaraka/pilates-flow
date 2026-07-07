import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Card from '@/Components/ui/Card';
import Badge from '@/Components/ui/Badge';
import Button from '@/Components/ui/Button';

export default function Index({ schedules }) {
    return (
        <AppLayout title="Jadwal Kelas">
            <Head title="Jadwal Kelas" />
            
            <div>
                <div className="mb-10 text-center">
                    <h1 className="text-4xl mb-4">Jadwal Kelas</h1>
                    <p className="text-text-secondary">Pilih dan pesan kelas pilates Anda hari ini.</p>
                </div>

                <div className="grid gap-6">
                    {schedules.length === 0 ? (
                        <div className="text-center py-12 bg-surface rounded-2xl border border-[#F0EBE1]">
                            <p className="text-text-secondary">Belum ada jadwal kelas yang tersedia.</p>
                        </div>
                    ) : (
                        schedules.map(schedule => (
                            <ScheduleCard key={schedule.id} schedule={schedule} />
                        ))
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

function ScheduleCard({ schedule }) {
    // Format tanggal & waktu sederhana
    const dateObj = new Date(schedule.date);
    const dateStr = dateObj.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = `${schedule.start_time.slice(0,5)} - ${schedule.end_time.slice(0,5)}`;

    return (
        <Card className="hover:border-primary/30 transition-colors">
            <Card.Body className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <Badge variant="primary">{dateStr}</Badge>
                        <Badge variant="default">{timeStr}</Badge>
                        {schedule.status === 'cancelled' && <Badge variant="error">Dibatalkan</Badge>}
                    </div>
                    <h3 className="text-2xl font-serif text-primary-dark">{schedule.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                        <span>Instruktur: {schedule.instructor?.user?.name || '-'}</span>
                        <span>•</span>
                        <span>Ruangan: {schedule.location || '-'}</span>
                    </div>
                </div>
                
                <div>
                    <Link href={route('schedules.show', schedule.id)}>
                        <Button disabled={schedule.status === 'cancelled'}>Detail & Booking</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}
