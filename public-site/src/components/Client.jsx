import React from "react";
import { Star, Quote } from "lucide-react";

export default function Client() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Member sejak 2024",
            feedback:
                "PilatesFlow benar-benar mengubah cara saya memandang olahraga. Instrukturnya sangat sabar dan fasilitasnya luar biasa. Sakit punggung saya jauh berkurang setelah rutin ikut kelas Reformer!",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
        },
        {
            name: "Budi Santoso",
            role: "Member sejak 2025",
            feedback:
                "Awalnya saya ragu karena baru pertama kali mencoba Pilates. Tapi kelas Mat Foundation sangat mudah diikuti untuk pemula. Suasana studionya juga sangat menenangkan (zen vibes!).",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
        },
        {
            name: "Elena Rodriguez",
            role: "Private Coaching",
            feedback:
                "Saya mengambil Private Coaching untuk pemulihan cedera lutut. Coach sangat paham anatomi tubuh dan menyesuaikan setiap gerakan agar aman untuk saya. Sangat direkomendasikan!",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
        },
    ];

    return (
        <section className="bg-ivory w-full py-24 px-6 md:px-16" id="testimonials">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                        Client Feedback
                    </h2>
                    <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                        Jangan hanya mendengar dari kami. Lihat apa yang dikatakan oleh komunitas PilatesFlow tentang pengalaman mereka berlatih bersama kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-blush/30 flex flex-col relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-sage/20">
                                <Quote size={40} className="fill-current" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        className="text-yellow-400 fill-current"
                                    />
                                ))}
                            </div>

                            {/* Feedback Text */}
                            <p className="text-foreground/80 leading-relaxed mb-8 flex-1 italic">
                                "{testimonial.feedback}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-sage"
                                />
                                <div>
                                    <h4 className="font-bold text-foreground">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-foreground/60">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}