import React from "react";
import { Head, useForm, usePage, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Card from "@/Components/ui/Card";
import Badge from "@/Components/ui/Badge";
import Button from "@/Components/ui/Button";

export default function Show({ schedule, bookedCount, isFull }) {
    const { auth, flash } = usePage().props;
    const { post, processing } = useForm();

    const handleBooking = (e) => {
        e.preventDefault();
        post(route("bookings.store", schedule.id));
    };

    const dateObj = new Date(schedule.date);
    const dateStr = dateObj.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const timeStr = `${schedule.start_time.slice(0, 5)} - ${schedule.end_time.slice(0, 5)}`;

    return (
        <AppLayout title="Detail Kelas">
            <Head title={`Detail Kelas - ${schedule.title}`} />

            <div>
                <Link
                    href={route("schedules.index")}
                    className="text-sm text-text-secondary hover:text-primary mb-6 inline-flex items-center gap-2"
                >
                    &larr; Kembali ke Jadwal
                </Link>

                {flash.success && (
                    <div className="mb-6 p-4 bg-success/10 border border-success/20 text-success rounded-xl">
                        {flash.success}
                    </div>
                )}

                {flash.error && (
                    <div className="mb-6 p-4 bg-error/10 border border-error/20 text-error rounded-xl">
                        {flash.error}
                    </div>
                )}

                <Card>
                    <Card.Header className="bg-primary-dark text-surface">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-serif mb-2">
                                    {schedule.title}
                                </h1>
                                <p className="text-surface/80">
                                    {dateStr} • {timeStr}
                                </p>
                            </div>
                            <Badge variant={isFull ? "error" : "success"}>
                                {bookedCount} / {schedule.capacity} Terisi
                            </Badge>
                        </div>
                    </Card.Header>

                    <Card.Body className="space-y-6">
                        <div>
                            <h4 className="text-sm text-text-secondary uppercase tracking-wider font-bold mb-2">
                                Instruktur
                            </h4>
                            <p className="text-lg">
                                {schedule.instructor?.user?.name || "-"}
                            </p>
                            <p className="text-text-secondary text-sm">
                                {schedule.instructor?.bio || ""}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm text-text-secondary uppercase tracking-wider font-bold mb-2">
                                Lokasi
                            </h4>
                            <p className="text-lg">
                                {schedule.location || "Studio Utama"}
                            </p>
                        </div>
                    </Card.Body>

                    <Card.Footer className="flex justify-between items-center">
                        <span className="text-sm text-text-secondary">
                            Pastikan Anda memiliki membership aktif untuk
                            memesan.
                        </span>

                        {auth.user ? (
                            <form onSubmit={handleBooking}>
                                <Button
                                    disabled={
                                        isFull ||
                                        schedule.status === "cancelled" ||
                                        processing
                                    }
                                >
                                    {isFull
                                        ? "Kelas Penuh"
                                        : "Booking Sekarang"}
                                </Button>
                            </form>
                        ) : (
                            <Link href={route("login")}>
                                <Button>Login untuk Booking</Button>
                            </Link>
                        )}
                    </Card.Footer>
                </Card>
            </div>
        </AppLayout>
    );
}
