import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ThemeSwitcher from '@/Components/ThemeSwitcher';

export default function AppLayout({ children, title = "Dashboard" }) {
    const { auth } = usePage().props;
    const user = auth.user;
    const [showDropdown, setShowDropdown] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile

    // Helper to get active class
    const isActive = (path) => {
        return window.location.pathname.startsWith(path);
    };

    const navLinkClass = (path) => {
        const active = isActive(path);
        return `flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-150 ${
            active 
                ? 'bg-primary/10 text-primary-dark font-medium border-l-4 border-primary'
                : 'text-text-secondary hover:bg-[#F0EBE2]'
        }`;
    };

    return (
        <div className="min-h-screen bg-background flex overflow-hidden">
            
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-50 w-64 bg-surface border-r border-[#F0EBE1] flex flex-col
                transform transition-transform duration-300 ease-in-out lg:transform-none
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Logo Area */}
                <div className="h-20 flex items-center px-6">
                    <Link href="/">
                        <span className="font-serif text-2xl text-primary-dark font-bold">PilatesFlow</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    <Link href={route('dashboard')} className={navLinkClass('/dashboard')}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        Dashboard
                    </Link>
                    <Link href={route('schedules.index')} className={navLinkClass('/schedules')}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Jadwal Kelas
                    </Link>
                    <Link href={route('packages.index')} className={navLinkClass('/packages')}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                        Membership
                    </Link>
                    <Link href={route('bookings.mine')} className={navLinkClass('/my-bookings')}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Riwayat Booking
                    </Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                
                {/* Header (Sticky) */}
                <header className="h-20 bg-surface/80 backdrop-blur-md border-b border-[#F0EBE1] flex items-center justify-between px-6 lg:px-10 z-30 flex-shrink-0">
                    <div className="flex items-center gap-4">
                        <button 
                            className="lg:hidden p-2 text-text-secondary hover:bg-background rounded-lg"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <h1 className="text-2xl font-serif text-primary-dark">{title}</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Profile Block */}
                        <div className="relative">
                            <button 
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center gap-3 hover:bg-background p-2 rounded-xl transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary-dark flex items-center justify-center font-bold font-serif">
                                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <div className="hidden md:block text-left">
                                    <p className="text-sm font-bold text-text-primary leading-tight">{user?.name || 'Guest'}</p>
                                    <p className="text-xs text-text-secondary leading-tight">Member</p>
                                </div>
                                <svg className={`w-4 h-4 text-text-secondary transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>

                            {/* Dropdown Menu */}
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-surface rounded-xl shadow-lg border border-[#E0E0E0] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <Link 
                                        href={route('profile.edit')} 
                                        className="block px-4 py-2 text-sm text-text-secondary hover:bg-background hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                        Edit Profile
                                    </Link>
                                    <div className="h-px bg-[#F0EBE1] my-2"></div>
                                    <Link 
                                        href={route('logout')} 
                                        method="post" 
                                        as="button"
                                        className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error/10 transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Content Container (Scrollable) */}
                <main className="flex-1 overflow-y-auto bg-background p-4 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>

            </div>
            
            <ThemeSwitcher />
        </div>
    );
}
