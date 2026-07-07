import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-primary-dark text-surface flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-white/10 font-serif text-xl font-bold">
                    PilatesFlow Admin
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <Link href={route('admin.dashboard')} className="block px-4 py-2 rounded-lg hover:bg-white/10 transition">
                        Dashboard
                    </Link>
                    <Link href={route('admin.schedules.index')} className="block px-4 py-2 rounded-lg hover:bg-white/10 transition">
                        Kelola Jadwal
                    </Link>
                    {/* Link menu admin lainnya */}
                </nav>
                <div className="p-4 border-t border-white/10 text-sm">
                    <p className="mb-2 opacity-80">Login sebagai:</p>
                    <p className="font-bold">{auth.user.name}</p>
                    <Link href={route('logout')} method="post" as="button" className="text-secondary hover:text-white mt-4 text-xs transition">
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 bg-surface border-b border-gray-200 flex items-center px-8 shadow-sm">
                    <h1 className="text-xl font-medium text-text-primary">Admin Panel</h1>
                </header>
                <div className="p-8 flex-1 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
