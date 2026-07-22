import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
    const plans = [
        {
            name: "Newbie Pass",
            price: "Rp 150K",
            period: "/ kedatangan",
            description: "Cocok buat kamu yang pengen trial atau jadwalnya masih random.",
            features: [
                "1x Akses kelas (Mat/Reformer)",
                "Peminjaman matras standar",
                "Akses loker & ruang ganti",
            ],
            bgColor: "bg-white",
            textColor: "text-foreground",
            buttonColor: "bg-sage text-white hover:bg-sage/90",
            border: "border border-sage/20 shadow-sm",
        },
        {
            name: "Flow Pack 10",
            price: "Rp 1.200K",
            period: "/ 10 sesi",
            description: "Paling worth it! Bikin rutinitas sehatmu jadi makin konsisten.",
            features: [
                "Bisa untuk semua kelas grup",
                "Masa aktif 2 bulan",
                "Booking kelas via aplikasi",
                "Akses shower air hangat",
                "Gratis teh / infused water",
            ],
            bgColor: "bg-blush",
            textColor: "text-foreground",
            buttonColor: "bg-foreground text-white hover:bg-foreground/90",
            border: "border-none shadow-md relative scale-105 z-10", // Highlighted card
            badge: "Paling Laku 🔥",
        },
        {
            name: "Unlimited Zen",
            price: "Rp 1.800K",
            period: "/ bulan",
            description: "Investasi terbaik buat transformasi tubuh dan pikiran seutuhnya.",
            features: [
                "Akses kelas tanpa batas tiap hari",
                "Priority booking (H-14)",
                "Gratis peminjaman handuk",
                "Diskon 15% merchandise",
                "Akses VIP community event",
            ],
            bgColor: "bg-sage",
            textColor: "text-white",
            buttonColor: "bg-ivory text-sage hover:bg-white",
            border: "border-none shadow-md",
        },
    ];

    return (
        <section id="pricing" className="bg-ivory w-full py-24 md:py-32 px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground tracking-wide">
                        Investment for You 💎
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-xl mx-auto font-light">
                        Pilih paket yang paling pas sama lifestyle dan goals kamu. No hidden fees, cuma komitmen buat sehat bareng!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-center mt-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${plan.bgColor} ${plan.textColor} ${plan.border}`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                    {plan.badge}
                                </div>
                            )}
                            
                            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                            <p className="text-sm opacity-80 mb-6 font-light">{plan.description}</p>
                            
                            <div className="mb-8">
                                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                                <span className="text-sm opacity-70 ml-1">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 shrink-0 opacity-80 mt-0.5" />
                                        <span className="font-light text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-medium tracking-wide transition-colors ${plan.buttonColor}`}>
                                Pilih Paket Ini
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
