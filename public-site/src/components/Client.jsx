import React from "react";

export default function Client() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            date: "12 Juli 2026",
            feedback: "Jujurly PilatesFlow bener-bener game changer! Back pain auto minggat semenjak ikut Reformer class! ✨",
        },
        {
            name: "Budi Santoso",
            date: "05 Juni 2026",
            feedback: "Awalnya fomo, tapi ternyata beginner friendly abis. Studio vibes-nya super zen! 🧘‍♀️",
        },
        {
            name: "Elena Rodriguez",
            date: "28 Mei 2026",
            feedback: "Recovery lutut pakai Private Coaching literally the best decision ever! 10/10 highly recommend! 💯",
        },
        {
            name: "Dinda K",
            date: "18 Juli 2026",
            feedback: "Asli kelas terapinya ngebantu banget buat postur bungkuk aku. Bye bye pegel linu! 👋",
        },
        {
            name: "Rizky A",
            date: "20 Juni 2026",
            feedback: "Coach-nya on point banget benerin form. Dompet aman karena harganya affordable abis! 💸",
        },
        {
            name: "Clarissa T",
            date: "02 Mei 2026",
            feedback: "Tempatnya super aesthetic, tiap abis kelas wajib mirror selfie! Core auto kenceng. 📸",
        },
        {
            name: "Putri S",
            date: "15 April 2026",
            feedback: "Gila sih, baru sebulan ikutan udah berasa banget bedanya di perut. Worth every penny! 🔥",
        },
        {
            name: "Kenzie W",
            date: "10 Juli 2026",
            feedback: "Ga nyangka cowok juga cocok Pilates. Flexibility naik drastis sejak rutin ikutan. 💪",
        },
        {
            name: "Amanda P",
            date: "03 Juni 2026",
            feedback: "Fix bakal jadi langganan. Energy di studionya bener-bener se-positif itu, no toxic vibes! 🌸",
        },
        {
            name: "Tasya N",
            date: "25 April 2026",
            feedback: "Capeknya dapet, healing-nya dapet. Emang boleh se-perfect ini? Bakal racunin bestie buat join! 👯‍♀️",
        },
    ];

    // Duplicate for smooth infinite scroll
    const scrollItems = [...testimonials, ...testimonials];

    return (
        <section className="bg-ivory w-full py-24 md:py-32 overflow-hidden" id="testimonials">
            <div className="max-w-[1200px] mx-auto px-6 md:px-16 mb-16">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground tracking-wide">
                        Vibe Check ✨
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-xl mx-auto font-light">
                        No cap, ini *real review* dari mereka yang udah buktiin sendiri *healing* bareng PilatesFlow. Spill the tea! 🍵
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden">
                <div className="flex w-max animate-marquee gap-6 px-4">
                    {scrollItems.map((testimonial, index) => (
                        <div key={index} className="flex flex-col w-[300px] md:w-[320px] shrink-0">
                            {/* Chat Bubble */}
                            <div className="bg-white p-5 md:p-6 rounded-2xl rounded-bl-none shadow-sm border border-blush/20 relative flex flex-col h-[180px]">
                                <p className="text-foreground/80 leading-relaxed font-light text-base flex-1">
                                    "{testimonial.feedback}"
                                </p>
                                
                                {/* Author & Date inside the bubble */}
                                <div className="flex flex-col mt-auto pt-3 border-t border-blush/30">
                                    <h4 className="font-bold text-foreground text-sm tracking-wide">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-foreground/50 tracking-wider mt-0.5">
                                        {testimonial.date}
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