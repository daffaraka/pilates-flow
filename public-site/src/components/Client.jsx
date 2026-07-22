import React from "react";

export default function Client() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            date: "12 Juli 2026",
            feedback:
                "PilatesFlow benar-benar mengubah cara saya memandang olahraga. Instrukturnya sangat sabar dan fasilitasnya luar biasa. Sakit punggung saya jauh berkurang setelah rutin ikut kelas Reformer!",
        },
        {
            name: "Budi Santoso",
            date: "05 Juni 2026",
            feedback:
                "Awalnya saya ragu karena baru pertama kali mencoba Pilates. Tapi kelas Mat Foundation sangat mudah diikuti untuk pemula. Suasana studionya juga sangat menenangkan.",
        },
        {
            name: "Elena Rodriguez",
            date: "28 Mei 2026",
            feedback:
                "Saya mengambil Private Coaching untuk pemulihan cedera lutut. Coach sangat paham anatomi tubuh dan menyesuaikan setiap gerakan agar aman untuk saya.",
        },
    ];

    return (
        <section className="bg-ivory w-full py-32 px-6 md:px-16" id="testimonials">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground tracking-wide">
                        Client Feedback
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-xl mx-auto font-light">
                        Pengalaman jujur dari mereka yang telah berlatih dan bertumbuh bersama kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col border-t border-sage/30 pt-8"
                        >
                            {/* Feedback Text */}
                            <p className="text-foreground/80 leading-relaxed mb-8 flex-1 font-light text-lg">
                                "{testimonial.feedback}"
                            </p>

                            {/* Author & Date */}
                            <div className="mt-auto flex flex-col gap-1">
                                <h4 className="font-medium text-foreground tracking-wide">
                                    {testimonial.name}
                                </h4>
                                <p className="text-sm text-foreground/50 tracking-wider">
                                    {testimonial.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}