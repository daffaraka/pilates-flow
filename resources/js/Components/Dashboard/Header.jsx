import React, { useState } from 'react';
import { Bell, ChevronDown, User, LogOut, Menu } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Header({ user, title = "Dashboard", onMenuClick }) {
    const [showDropdown, setShowDropdown] = useState(false);

    // Fallback user if not provided yet
    const currentUser = user || { name: 'Nadia Putri', role: 'Member', initials: 'NP' };

    return (
        <header className="sticky top-0 z-20 flex items-center justify-between h-16 px-6 bg-surface/80 backdrop-blur-md border-b border-gray-100">
            <div className="flex items-center gap-4">
                <button onClick={onMenuClick} className="lg:hidden text-text-secondary hover:text-text-primary">
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-medium font-serif text-text-primary">{title}</h1>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-text-secondary hover:text-text-primary transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
                </button>

                <div className="relative">
                    <button 
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 text-primary font-semibold">
                            {currentUser.initials}
                        </div>
                        <div className="hidden md:flex flex-col items-start">
                            <span className="text-sm font-medium text-text-primary leading-tight">{currentUser.name}</span>
                            <span className="text-xs text-text-secondary">{currentUser.role}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-text-secondary hidden md:block" />
                    </button>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-surface rounded-xl shadow-lg border border-gray-100 py-1 animate-in fade-in slide-in-from-top-2">
                            <div className="px-4 py-2 border-b border-gray-100 md:hidden">
                                <span className="block text-sm font-medium text-text-primary">{currentUser.name}</span>
                                <span className="block text-xs text-text-secondary">{currentUser.role}</span>
                            </div>
                            <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 hover:text-text-primary">
                                <User className="w-4 h-4" /> Edit Profile
                            </Link>
                            <Link href="/logout" method="post" as="button" className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                <LogOut className="w-4 h-4" /> Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
