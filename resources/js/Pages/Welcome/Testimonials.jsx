import React from "react";

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

export default function Testimonials() {
    return (
        <section className="bg-surface w-full py-24 px-6 md:px-16" id="testimonials">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-text-primary">
                        Client Feedback
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Jangan hanya mendengar dari kami. Lihat apa yang dikatakan oleh komunitas PilatesFlow tentang pengalaman mereka berlatih bersama kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-primary/20">
                                <svg
                                    className="w-10 h-10"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Feedback Text */}
                            <p className="text-text-secondary leading-relaxed mb-8 flex-1 italic">
                                "{testimonial.feedback}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                                />
                                <div>
                                    <h4 className="font-bold text-text-primary">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-text-secondary">
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
