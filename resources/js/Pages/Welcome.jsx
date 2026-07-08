import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import ThemeSwitcher from "@/Components/ThemeSwitcher";
import Services from "./Welcome/Services";
import Coaches from "./Welcome/Coaches";

export default function Welcome({ auth }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen font-sans selection:bg-primary selection:text-surface overflow-x-hidden">
            <Head title="Welcome to PilatesFlow" />

            {/* Navbar (Sticky / Fixed) */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-8 flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-[#181818]/95 backdrop-blur-md shadow-md text-surface" : "bg-transparent text-surface"}`}
            >
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <svg
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2C9.5 2 7 4.5 7 7c0 1.5.8 2.8 2 3.5C7.8 11.2 7 12.5 7 14c0 2.5 2.5 5 5 5s5-2.5 5-5c0-1.5-.8-2.8-2-3.5 1.2-.7 2-2 2-3.5 0-2.5-2.5-5-5-5zm0 15c-1.5 0-2.5-1-2.5-2.5S10.5 12 12 12s2.5 1 2.5 2.5S13.5 17 12 17zm0-7c-1.5 0-2.5-1-2.5-2.5S10.5 5 12 5s2.5 1 2.5 2.5S13.5 10 12 10z" />
                    </svg>
                    <span className="font-serif text-2xl font-bold tracking-wide">
                        PilatesFlow
                    </span>
                </div>

                {/* Center: Navigation Menu (Desktop) */}
                <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
                    <a
                        href="#services"
                        className="hover:text-primary transition-colors"
                    >
                        Services
                    </a>
                    <a
                        href="#appointment"
                        className="hover:text-primary transition-colors"
                    >
                        Appointment
                    </a>
                    <a
                        href="#blog"
                        className="hover:text-primary transition-colors"
                    >
                        Blog
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-primary transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="bg-surface text-text-primary px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium hover:bg-surface/90 transition-colors shadow-lg text-sm md:text-base"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="hidden md:block font-medium hover:text-surface/80 transition-colors text-sm"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="bg-surface text-text-primary px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium hover:bg-surface/90 transition-colors shadow-lg text-sm md:text-base"
                            >
                                Join now
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section className="relative h-[90vh] md:h-screen w-full flex flex-col items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop')",
                    }}
                ></div>

                {/* Dark Overlay (50% transparent) */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mt-12">
                    <h1 className="text-5xl md:text-7xl font-serif font-semibold text-surface leading-[1.1] mb-6">
                        Find your balance <br className="hidden md:block" />{" "}
                        with PilatesFlow
                    </h1>
                    <p className="text-surface/90 text-lg md:text-xl font-medium max-w-xl mx-auto">
                        A mindful approach to movement. Strengthen your core,
                        improve flexibility, and connect with your breath in our
                        guided sessions.
                    </p>
                </div>
            </section>

            {/* 2. Stats Bar Section (Dark) */}
            <section className="bg-[#181818] w-full text-surface py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative">
                    {/* Decorative Clover Icon */}
                    <div className="absolute right-0 bottom-0 translate-y-10 opacity-10 pointer-events-none">
                        <svg
                            className="w-64 h-64 text-surface"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2C9.5 2 7 4.5 7 7c0 1.5.8 2.8 2 3.5C7.8 11.2 7 12.5 7 14c0 2.5 2.5 5 5 5s5-2.5 5-5c0-1.5-.8-2.8-2-3.5 1.2-.7 2-2 2-3.5 0-2.5-2.5-5-5-5zm0 15c-1.5 0-2.5-1-2.5-2.5S10.5 12 12 12s2.5 1 2.5 2.5S13.5 17 12 17zm0-7c-1.5 0-2.5-1-2.5-2.5S10.5 5 12 5s2.5 1 2.5 2.5S13.5 10 12 10z" />
                        </svg>
                    </div>

                    <div className="flex flex-wrap gap-12 md:gap-24 relative z-10">
                        <div>
                            <div className="flex items-start">
                                <span className="text-5xl md:text-6xl font-bold tracking-tight">
                                    1k
                                </span>
                                <span className="text-xl md:text-2xl mt-1 text-primary">
                                    +
                                </span>
                            </div>
                            <p className="text-[#B8B5AE] text-sm mt-2">
                                Active members
                            </p>
                        </div>
                        <div>
                            <div className="flex items-start">
                                <span className="text-5xl md:text-6xl font-bold tracking-tight">
                                    4.9
                                </span>
                            </div>
                            <p className="text-[#B8B5AE] text-sm mt-2">
                                Average rating
                            </p>
                        </div>
                        <div>
                            <div className="flex items-start">
                                <span className="text-5xl md:text-6xl font-bold tracking-tight">
                                    150
                                </span>
                                <span className="text-xl md:text-2xl mt-1 text-primary">
                                    +
                                </span>
                            </div>
                            <p className="text-[#B8B5AE] text-sm mt-2">
                                Weekly classes
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm relative z-10">
                        <p className="text-[#B8B5AE] leading-relaxed mb-4 text-sm md:text-base">
                            Join our community and experience the transformative
                            power of Pilates. Our expert instructors are here to
                            guide you every step of the way.
                        </p>
                        <Link
                            href={route("register")}
                            className="inline-block border-b-2 border-surface pb-1 text-surface font-medium hover:text-primary hover:border-primary transition-colors uppercase tracking-wider text-sm"
                        >
                            Join Member
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. Our Services Section (Light) */}
            <Services></Services>
            {/* Dev Tool */}

            {/* 4. Our Coaches Section (Light) */}
            <Coaches></Coaches>
            <ThemeSwitcher />
        </div>
    );
}
