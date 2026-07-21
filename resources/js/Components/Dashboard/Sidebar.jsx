import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
    LayoutDashboard, 
    Dumbbell, 
    Users, 
    CreditCard, 
    Calendar, 
    UserPlus, 
    Receipt, 
    Clock, 
    FileText, 
    Edit3, 
    MessageSquare, 
    Image as ImageIcon,
    Settings, 
    Shield 
} from 'lucide-react';

export default function Sidebar({ className = '' }) {
    const { url } = usePage();

    return (
        <aside className={`flex flex-col w-64 h-screen bg-surface border-r border-gray-200 ${className}`}>
            <div className="flex items-center h-16 px-6 font-serif text-2xl font-bold text-primary-dark border-b border-gray-100">
                PilatesFlow
            </div>
            
            <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto custom-scrollbar">
                
                {/* Main */}
                <div>
                    <p className="px-3 text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">Utilitas</p>
                    <div className="space-y-1">
                        <NavLink href="/dashboard" active={url.startsWith('/dashboard')} icon={LayoutDashboard}>Dashboard</NavLink>
                    </div>
                </div>

                {/* Master Data */}
                <div>
                    <p className="px-3 text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">Master Data</p>
                    <div className="space-y-1">
                        <NavLink href="/classes" active={url.startsWith('/classes')} icon={Dumbbell}>Kelas Pilates</NavLink>
                        <NavLink href="/coaches" active={url.startsWith('/coaches')} icon={Users}>Pelatih</NavLink>
                        <NavLink href="/pricing" active={url.startsWith('/pricing')} icon={CreditCard}>Paket Harga</NavLink>
                    </div>
                </div>

                {/* Operasional */}
                <div>
                    <p className="px-3 text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">Operasional</p>
                    <div className="space-y-1">
                        <NavLink href="/schedules" active={url.startsWith('/schedules')} icon={Calendar}>Jadwal Kelas</NavLink>
                        <NavLink href="/memberships" active={url.startsWith('/memberships')} icon={UserPlus}>Membership</NavLink>
                        <NavLink href="/payments" active={url.startsWith('/payments')} icon={Receipt}>Pembayaran</NavLink>
                        <NavLink href="/bookings" active={url.startsWith('/bookings')} icon={Clock}>Booking Aktif</NavLink>
                    </div>
                </div>

                {/* CMS */}
                <div>
                    <p className="px-3 text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">Konten (CMS)</p>
                    <div className="space-y-1">
                        <NavLink href={route('pages.index')} active={url.startsWith('/pages')} icon={FileText}>Halaman</NavLink>
                        <NavLink href={route('blog-posts.index')} active={url.startsWith('/blog-posts')} icon={Edit3}>Artikel Blog</NavLink>
                        <NavLink href={route('testimonials.index')} active={url.startsWith('/testimonials')} icon={MessageSquare}>Testimonial</NavLink>
                        <NavLink href={route('promo-banners.index')} active={url.startsWith('/promo-banners')} icon={ImageIcon}>Promo Banner</NavLink>
                    </div>
                </div>
            </nav>

            <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                <p className="px-3 text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">Sistem</p>
                <div className="space-y-1">
                    <NavLink href="/settings" active={url.startsWith('/settings')} icon={Settings}>Pengaturan Umum</NavLink>
                    <NavLink href="/users" active={url.startsWith('/users')} icon={Shield}>Pengguna & Akses</NavLink>
                </div>
            </div>
        </aside>
    );
}

function NavLink({ href, active, icon: Icon, children }) {
    return (
        <Link 
            href={href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                active 
                    ? 'bg-sage-100 text-primary-dark border-l-4 border-primary font-medium' 
                    : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
            }`}
        >
            <Icon className="w-5 h-5" />
            <span>{children}</span>
        </Link>
    );
}
