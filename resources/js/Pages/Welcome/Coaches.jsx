import React from "react";

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

export default function Coaches() {
    return (
        <section className="bg-white w-full py-24 px-6 md:px-16 text-black">
            <div className="max-w-[1200px] mx-auto">
                {/* Header Row */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-black">
                        Our Coaches
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Meet our expert instructors
                    </p>
                </div>

                {/* Grid Coaches */}
                <div className="flex flex-col gap-8">
                    {coaches.map((coach, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row w-full bg-white border border-black rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Left: Coach Image */}
                            <div className="w-full md:w-1/3 lg:w-1/4 h-64 md:h-auto relative overflow-hidden shrink-0">
                                <img
                                    src={coach.image}
                                    alt={coach.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Right: Coach Identity & Details */}
                            <div className="w-full md:w-2/3 lg:w-3/4 p-6 md:p-8 flex flex-col justify-center bg-white">
                                <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                                    {coach.name}
                                </h3>
                                <span className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                                    {coach.specialty}
                                </span>
                                <p className="text-base text-gray-700 leading-relaxed max-w-3xl">
                                    {coach.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
