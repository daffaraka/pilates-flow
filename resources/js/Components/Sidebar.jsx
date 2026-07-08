import React from 'react';
import { Link } from '@inertiajs/react';

export default function Sidebar({ isOpen, isDesktopOpen = true, onClose }) {
    // Helper to get active class
    const isActive = (path) => {
        if (typeof window !== 'undefined') {
            return window.location.pathname.startsWith(path);
        }
        return false;
    };

    const navLinkClass = (path) => {
        const active = isActive(path);
        return `flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
            active 
                ? 'bg-surface/20 text-surface font-bold border-l-4 border-surface shadow-inner'
                : 'text-surface/70 hover:bg-surface/10 hover:text-surface'
        }`;
    };

    return (
        <aside className={`
            fixed lg:static inset-y-0 left-0 z-50 bg-primary-dark text-surface flex flex-col overflow-hidden
            transform transition-all duration-300 ease-in-out shadow-lg
            ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
            ${isDesktopOpen ? 'lg:translate-x-0 lg:w-64' : 'lg:-translate-x-full lg:w-0'}
        `}>
            {/* Logo Area */}
            <div className="h-20 flex items-center px-6 relative flex-shrink-0 min-w-[16rem]">
                <Link href="/">
                    <span className="font-serif text-2xl text-surface font-bold tracking-wide">PilatesFlow</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                <Link href={route('dashboard')} className={navLinkClass('/dashboard')} onClick={onClose}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    Dashboard
                </Link>
                <Link href={route('schedules.index')} className={navLinkClass('/schedules')} onClick={onClose}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    Jadwal Kelas
                </Link>
                <Link href={route('packages.index')} className={navLinkClass('/packages')} onClick={onClose}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                    Membership
                </Link>
                <Link href={route('bookings.mine')} className={navLinkClass('/my-bookings')} onClick={onClose}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Riwayat Booking
                </Link>
            </nav>
        </aside>
    );
}
