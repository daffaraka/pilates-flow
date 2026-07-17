import React, { useState, useEffect } from "react";

const coaches = [
    {
        name: "Sarah Jenkins",
        specialty: "Reformer Pilates Expert",
        description:
            "With over 10 years of experience, Sarah focuses on core strength and dynamic movement to help you achieve your best form. Her classes are designed to challenge you while ensuring proper alignment and safety.",
        image: "/assets/images/coaches/coach-1.png",
    },
    {
        name: "Michael Chen",
        specialty: "Vinyasa Yoga & Mat Pilates",
        description:
            "Michael brings a calming yet challenging energy to his classes, blending mindful breathing with intense physical conditioning. Perfect for those looking to build endurance and flexibility.",
        image: "/assets/images/coaches/coach-2.png",
    },
    {
        name: "Emma Davis",
        specialty: "Barre & Sculpt Specialist",
        description:
            "Emma's high-energy classes are designed to tone and sculpt every muscle group while keeping you motivated and moving. Expect a fun, fast-paced workout with a killer playlist.",
        image: "https://images.unsplash.com/photo-1552196563-55259270bc9f?auto=format&fit=crop&q=80&w=600",
    },
];

const activityImages = [
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1522898467493-49726bf28798?auto=format&fit=crop&q=80&w=1200",
];

export default function Coaches() {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const [currentCoachIdx, setCurrentCoachIdx] = useState(0);

    // Auto rotate hero images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIdx((prev) => (prev + 1) % activityImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextCoach = () => {
        setCurrentCoachIdx((prev) => (prev + 1) % coaches.length);
    };

    const prevCoach = () => {
        setCurrentCoachIdx((prev) => (prev - 1 + coaches.length) % coaches.length);
    };

    return (
        <section className="bg-[#2A2A2A] w-full py-24 px-6 md:px-16 text-white" id="coaches">
            <div className="max-w-[1200px] mx-auto">
                {/* 1. Section Hero (Ratio 30:70) */}
                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    {/* 30% Greeting Singkat */}
                    <div className="w-full md:w-[30%] flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                            Meet Our Experts
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Welcome to our studio. Our passionate coaches are here to guide you, challenge you, and help you achieve your wellness goals with personalized care.
                        </p>
                    </div>

                    {/* 70% Gambar Dinamis / Berubah-ubah */}
                    <div className="w-full md:w-[70%] h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-lg">
                        {activityImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="Coaches Activity"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                    idx === currentImageIdx ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* 2. Section Coaches Carousel (Ratio 40:60) */}
                <div className="mt-32">
                    {/* Header & Navigasi Slider */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                        <h3 className="text-3xl font-bold text-white">Our Coaches</h3>
                        <div className="flex gap-4">
                            <button 
                                onClick={prevCoach} 
                                className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                aria-label="Previous Coach"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={nextCoach} 
                                className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                                aria-label="Next Coach"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Carousel Box */}
                    <div className="w-full bg-[#1F1F1F] rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px] shadow-2xl relative">
                        {/* 40% Gambar Coach */}
                        <div className="w-full md:w-[40%] relative h-96 md:h-full shrink-0 bg-[#2A2A2A]">
                            {coaches.map((coach, idx) => (
                                <img
                                    key={idx}
                                    src={coach.image}
                                    alt={coach.name}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                                        idx === currentCoachIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* 60% Konten Coach */}
                        <div className="w-full md:w-[60%] relative min-h-[400px] md:min-h-full flex-1">
                            {coaches.map((coach, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 p-8 md:p-16 flex flex-col justify-center transition-all duration-700 ${
                                        idx === currentCoachIdx 
                                        ? "opacity-100 translate-x-0 z-10" 
                                        : "opacity-0 translate-x-8 z-0 pointer-events-none"
                                    }`}
                                >
                                    <h4 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                        {coach.name}
                                    </h4>
                                    <span className="inline-block px-5 py-2 bg-primary text-white text-sm font-bold rounded-full uppercase tracking-wider mb-8 w-max">
                                        {coach.specialty}
                                    </span>
                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                        {coach.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
