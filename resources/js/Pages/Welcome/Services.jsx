import React from "react";
import { Link } from "@inertiajs/react";

const services = [
    {
        title: "Reformer Flow",
        description:
            "Enhance core strength and flexibility using our state-of-the-art Allegro 2 Reformers. Perfect for all levels.",
        icon: (
            <svg className="w-6 h-6 text-[#9BAE8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
        ),
    },
    {
        title: "Mat Foundation",
        description:
            "Master the fundamental principles of Pilates on the mat. Focus on breath, alignment, and precise movement.",
        icon: (
            <svg className="w-6 h-6 text-[#E8B4A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
        ),
    },
    {
        title: "Private Coaching",
        description:
            "1-on-1 personalized sessions tailored specifically to your body's needs, injuries, or athletic goals.",
        icon: (
            <svg className="w-6 h-6 text-[#7C9885]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section className="bg-[#181818] w-full py-24 px-6 md:px-16 text-surface" id="services">
            <div className="max-w-[1200px] mx-auto">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-surface">
                            Our Services
                        </h2>
                        <p className="text-[#B8B5AE] text-lg max-w-md">
                            Discover the perfect practice for your body. From dynamic reformer flows to grounding mat sessions.
                        </p>
                    </div>
                    <Link
                        href={route('schedules.index')}
                        className="bg-surface text-[#1F1F1F] px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-surface transition-colors"
                    >
                        Explore more
                    </Link>
                </div>

                {/* Grid Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="w-16 h-16 rounded-full bg-[#2A2A2A] flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-surface">{service.title}</h3>
                            <p className="text-[#B8B5AE] leading-relaxed mb-8 flex-1">
                                {service.description}
                            </p>
                            <Link
                                href={route('schedules.index')}
                                className="px-5 py-2.5 bg-[#2A2A2A] text-white rounded-md font-medium hover:bg-primary hover:shadow-lg transition-all inline-block max-w-max"
                            >
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
