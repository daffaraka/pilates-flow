import React from "react";

export default function Client() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            date: "12 Juli 2026",
            feedback:
                "Jujurly PilatesFlow bener-bener game changer banget buat aku! Instrukturnya super sabar & fasilitasnya aesthetic parah. Back pain aku auto minggat semenjak rajin ikut Reformer class! ✨",
        },
        {
            name: "Budi Santoso",
            date: "05 Juni 2026",
            feedback:
                "Awalnya sempet fomo pengen nyoba Pilates tapi takut ga kuat. Untung Mat Foundation class-nya beginner friendly abis. Studio vibes-nya juga healing banget, super zen! 🧘‍♀️",
        },
        {
            name: "Elena Rodriguez",
            date: "28 Mei 2026",
            feedback:
                "Ambil Private Coaching buat recovery lutut and it's literally the best decision ever! Coach-nya detail banget perhatiin anatomi & nyesuain gerakan. 10/10 highly recommend! 💯",
        },
    ];

    return (
        <section className="bg-ivory w-full py-32 px-6 md:px-16" id="testimonials">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground tracking-wide">
                        Vibe Check ✨
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-xl mx-auto font-light">
                        No cap, ini *real review* dari mereka yang udah buktiin sendiri *healing* bareng PilatesFlow. Spill the tea! 🍵
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Chat Bubble */}
                            <div className="bg-white text-foreground/80 leading-relaxed p-6 md:p-8 rounded-3xl rounded-bl-none shadow-sm border border-blush/20 font-light text-lg mb-6 relative">
                                "{testimonial.feedback}"
                                {/* Custom Tail (optional fallback if rounded-bl-none isn't enough, but usually it looks great as a bubble) */}
                            </div>

                            {/* Author & Date below the bubble */}
                            <div className="flex flex-col ml-2">
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