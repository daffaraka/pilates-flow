import React from "react";
import { Link } from "@inertiajs/react";

const services = [
    {
        duration: "1 hr",
        title: "Reformer Flow",
        description:
            "Active, dynamic practice focused on strengthening the body and nervous system. Increases vitality and stress resistance.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
    },
    {
        duration: "1 hr",
        title: "Vinyasa Yoga",
        description:
            "Active, dynamic practice focused on strengthening the body and nervous system. Increases vitality and stress resistance.",
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=600",
    },
    {
        duration: "1 hr",
        title: "Pilates Mat",
        description:
            "Active, dynamic practice focused on strengthening the body and nervous system. Increases vitality and stress resistance.",
        image: "https://images.unsplash.com/photo-1552196563-55259270bc9f?auto=format&fit=crop&q=80&w=600",
    },
    {
        duration: "1 hr",
        title: "Barre Sculpt",
        description:
            "Active, dynamic practice focused on strengthening the body and nervous system. Increases vitality and stress resistance.",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600",
    },
];

export default function Services() {
    return (
        <section className="bg-black w-full py-24 px-6 md:px-16 text-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Row */}
                <div className="mb-12">
                    <h2 className="text-6xl md:text-5xl font-bold mb-3 text-white">
                        Client's Choice
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Our clients choose these classes
                    </p>
                </div>

                {/* Grid Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden group cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
                            />

                            {/* Purple Overlay */}
                            <div className="absolute inset-0 bg-[#5A5B7B]/70 mix-blend-multiply group-hover:bg-[#6C5B7B]/60 transition-colors duration-300"></div>

                            {/* Solid semi-transparent overlay to ensure color visibility */}
                            <div className="absolute inset-0 bg-[#5A4B69]/40"></div>

                            {/* Dark Gradient for bottom text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-between p-6 md:p-8 text-white z-10">
                                <div className="flex justify-between items-start text-sm font-medium tracking-wide">
                                    <span className="opacity-90">
                                        {service.duration}
                                    </span>
                                    <span className="opacity-90 text-right max-w-[60%]">
                                        {service.title}
                                    </span>
                                </div>
                                <p className="text-xs md:text-sm leading-relaxed opacity-90 font-light text-gray-200">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
