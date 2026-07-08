import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ThemeSwitcher from '@/Components/ThemeSwitcher';
import Sidebar from '@/Components/Sidebar';

export default function AppLayout({ children, title = "Dashboard" }) {
    const { auth } = usePage().props;
    const user = auth.user;
    const [showDropdown, setShowDropdown] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile
    const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true); // For desktop toggle

    return (
        <div className="min-h-screen bg-background flex overflow-hidden">
            
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Component */}
            <Sidebar 
                isOpen={isSidebarOpen} 
                isDesktopOpen={isDesktopSidebarOpen}
                onClose={() => setIsSidebarOpen(false)} 
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                
                {/* Header (Sticky) */}
                <header className="h-20 bg-surface/80 backdrop-blur-md border-b border-[#F0EBE1] flex items-center justify-between px-6 lg:px-10 z-30 flex-shrink-0 transition-all">
                    <div className="flex items-center gap-4">
                        {/* Mobile Toggle */}
                        <button 
                            className="lg:hidden p-2 text-primary-dark hover:bg-background rounded-lg transition-colors"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        
                        {/* Desktop Toggle (Hijau Tua) */}
                        <button 
                            className="hidden lg:block p-2 text-primary-dark hover:bg-primary/10 rounded-lg transition-colors"
                            onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)}
                            title="Toggle Sidebar"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isDesktopSidebarOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
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
