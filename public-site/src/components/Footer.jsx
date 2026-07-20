import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-ivory py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-4 block">
              Pilates<span className="text-sage-light">Studio</span>
            </Link>
            <p className="text-white/60 max-w-sm mb-6">
              Empowering your wellness journey through mindful movement, expert guidance, and a supportive community.
            </p>
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} Pilates Studio. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li><Link href="/about" className="hover:text-sage-light transition">About Us</Link></li>
              <li><Link href="/classes" className="hover:text-sage-light transition">Classes</Link></li>
              <li><Link href="/pricing" className="hover:text-sage-light transition">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-sage-light transition">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li><Link href="/contact" className="hover:text-sage-light transition">Contact Us</Link></li>
              <li><a href="https://wa.me/6281234567890" className="hover:text-sage-light transition">WhatsApp Admin</a></li>
              <li><a href="https://instagram.com/pilatesstudio" className="hover:text-sage-light transition">Instagram</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
