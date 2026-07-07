import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/ui/Button';
import ThemeSwitcher from '@/Components/ThemeSwitcher';

export default function MainLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <nav className="bg-surface border-b border-[#F0EBE1] py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-8">
                            <Link href="/">
                                <span className="font-serif text-2xl text-primary-dark font-bold">PilatesFlow</span>
                            </Link>
                            <div className="hidden md:flex gap-6">
                                <Link href={route('schedules.index')} className="text-text-primary hover:text-primary transition">Jadwal Kelas</Link>
                                <Link href={route('packages.index')} className="text-text-primary hover:text-primary transition">Membership</Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <>
                                    <Link href={route('dashboard')} className="text-text-primary hover:text-primary transition">Dashboard</Link>
                                    <Link href={route('logout')} method="post" as="button" className="text-text-secondary hover:text-error transition">
                                        Logout
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link href={route('login')} className="text-text-secondary hover:text-primary transition">Login</Link>
                                    <Link href={route('register')}>
                                        <Button size="sm">Daftar</Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            <footer className="bg-primary-dark text-surface py-12 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="font-serif text-xl mb-4">PilatesFlow Studio</p>
                    <p className="text-sm opacity-80">Find your center, strengthen your core.</p>
                </div>
            </footer>
            
            {/* Dev Tool: Theme Switcher */}
            <ThemeSwitcher />
        </div>
    );
}
