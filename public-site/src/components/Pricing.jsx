import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="bg-ivory w-full py-24 md:py-32 px-6 md:px-16">
            <div className="max-w-[1100px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground tracking-wide">
                        Investment for You 💎
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-xl mx-auto font-light">
                        Pilih paket yang paling pas sama lifestyle dan goals kamu. No hidden fees, cuma komitmen buat sehat bareng!
                    </p>

                    {/* Optional Toggle Switch Placeholder (Visual only to match image) */}
                    <div className="mt-10 inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-sage/10">
                        <button className="bg-sage text-white px-6 py-2 rounded-full text-sm font-medium transition-all">
                            KELAS REGULER
                        </button>
                        <button className="text-foreground/60 px-6 py-2 rounded-full text-sm font-medium transition-all hover:text-foreground">
                            PRIVATE COACHING
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center mt-12">
                    {/* LEFT CARD (Newbie Pass) */}
                    <div className="bg-white w-full lg:w-1/3 p-10 lg:pr-12 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-sage/10 relative z-0 flex flex-col h-[500px]">
                        <div className="mb-6">
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-4xl font-bold text-foreground">Rp 150K</span>
                                <span className="text-sm font-medium text-foreground/50">/ visit</span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Newbie Pass</h3>
                            <p className="text-sm text-foreground/60 font-light leading-relaxed">
                                Cocok buat kamu yang pengen trial atau jadwalnya masih random.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3">
                                <div className="bg-sage/10 p-1 rounded-full"><Check className="w-4 h-4 text-sage" /></div>
                                <span className="font-light text-sm text-foreground/80">1x Akses kelas (Mat/Reformer)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-sage/10 p-1 rounded-full"><Check className="w-4 h-4 text-sage" /></div>
                                <span className="font-light text-sm text-foreground/80">Peminjaman matras standar</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-sage/10 p-1 rounded-full"><Check className="w-4 h-4 text-sage" /></div>
                                <span className="font-light text-sm text-foreground/80">Akses loker & ruang ganti</span>
                            </li>
                        </ul>

                        <button className="w-full py-3.5 rounded-full font-semibold text-sage bg-sage/10 hover:bg-sage/20 transition-colors mt-auto">
                            Pilih Paket
                        </button>
                    </div>

                    {/* MIDDLE CARD (Flow Pack 10) */}
                    <div className="bg-sage w-full lg:w-1/3 p-10 lg:py-14 rounded-3xl shadow-[0_10px_40px_rgba(138,154,134,0.3)] relative z-10 -my-4 lg:-mx-4 flex flex-col h-[540px]">
                        <div className="absolute top-6 right-6 bg-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                        
                        <div className="mb-6">
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-4xl font-bold text-white">Rp 1.200K</span>
                                <span className="text-sm font-medium text-white/70">/ 10 sesi</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Flow Pack 10</h3>
                            <p className="text-sm text-white/80 font-light leading-relaxed">
                                Paling worth it! Bikin rutinitas sehatmu jadi makin konsisten.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3">
                                <div className="bg-white/20 p-1 rounded-full"><Check className="w-4 h-4 text-white" /></div>
                                <span className="font-light text-sm text-white/90">Bisa untuk semua kelas grup</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white/20 p-1 rounded-full"><Check className="w-4 h-4 text-white" /></div>
                                <span className="font-light text-sm text-white/90">Masa aktif 2 bulan</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white/20 p-1 rounded-full"><Check className="w-4 h-4 text-white" /></div>
                                <span className="font-light text-sm text-white/90">Booking kelas via aplikasi</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white/20 p-1 rounded-full"><Check className="w-4 h-4 text-white" /></div>
                                <span className="font-light text-sm text-white/90">Akses shower air hangat</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-white/20 p-1 rounded-full"><Check className="w-4 h-4 text-white" /></div>
                                <span className="font-light text-sm text-white/90">Gratis teh / infused water</span>
                            </li>
                        </ul>

                        <button className="w-full py-3.5 rounded-full font-semibold text-sage bg-white hover:bg-ivory transition-colors mt-auto">
                            Pilih Paket
                        </button>
                    </div>

                    {/* RIGHT CARD (Unlimited Zen) */}
                    <div className="bg-white w-full lg:w-1/3 p-10 lg:pl-12 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-sage/10 relative z-0 flex flex-col h-[500px]">
                        <div className="mb-6">
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-4xl font-bold text-foreground">Rp 1.800K</span>
                                <span className="text-sm font-medium text-foreground/50">/ bulan</span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Unlimited Zen</h3>
                            <p className="text-sm text-foreground/60 font-light leading-relaxed">
                                Investasi terbaik buat transformasi tubuh dan pikiran seutuhnya.
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3">
                                <div className="bg-sage/10 p-1 rounded-full"><Check className="w-4 h-4 text-sage" /></div>
                                <span className="font-light text-sm text-foreground/80">Akses kelas tanpa batas tiap hari</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-sage/10 p-1 rounded-full"><Check className="w-4 h-4 text-sage" /></div>
                                <span className="font-light text-sm text-foreground/80">Priority booking (H-14)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-sage/10 p-1 rounded-full"><Check className="w-4 h-4 text-sage" /></div>
                                <span className="font-light text-sm text-foreground/80">Gratis peminjaman handuk</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-sage/10 p-1 rounded-full"><Check className="w-4 h-4 text-sage" /></div>
                                <span className="font-light text-sm text-foreground/80">Diskon 15% merchandise</span>
                            </li>
                        </ul>

                        <button className="w-full py-3.5 rounded-full font-semibold text-sage bg-sage/10 hover:bg-sage/20 transition-colors mt-auto">
                            Pilih Paket
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
