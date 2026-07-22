import React from "react";

export default function Client() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            date: "12 Juli 2026",
            feedback:
                "Jujurly PilatesFlow bener-bener game changer! Back pain auto minggat semenjak ikut Reformer class! ✨",
        },
        {
            name: "Budi Santoso",
            date: "05 Juni 2026",
            feedback:
                "Awalnya fomo, tapi ternyata beginner friendly abis. Studio vibes-nya super zen! 🧘‍♀️",
        },
        {
            name: "Elena Rodriguez",
            date: "28 Mei 2026",
            feedback:
                "Recovery lutut pakai Private Coaching literally the best decision ever! 10/10 highly recommend! 💯",
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
                            <div className="bg-white p-6 md:p-8 rounded-3xl rounded-bl-none shadow-sm border border-blush/20 relative flex flex-col h-full">
                                <p className="text-foreground/80 leading-relaxed font-light text-lg flex-1 mb-6">
                                    "{testimonial.feedback}"
                                </p>
                                
                                {/* Author & Date inside the bubble */}
                                <div className="flex flex-col mt-auto pt-4 border-t border-blush/30">
                                    <h4 className="font-bold text-foreground tracking-wide">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-foreground/50 tracking-wider mt-1">
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