import React from 'react';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default async function Navbar() {
  // Fetch classes for the dropdown
  let classes = [];
  try {
    const res = await fetch('http://127.0.0.1:8000/api/public/classes', { 
      next: { revalidate: 60 } 
    });
    if (res.ok) {
      classes = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch classes for navbar:', error);
  }

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-ivory/80 backdrop-blur-md border-b border-blush/20">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
            Pilates<span className="text-sage">Studio</span>
          </Link>
          
          <div className="hidden md:flex gap-8 items-center font-medium h-full">
            <Link href="/" className="text-foreground/80 hover:text-sage transition">Home</Link>
            <Link href="/about" className="text-foreground/80 hover:text-sage transition">About</Link>
            
            {/* Dropdown for Classes */}
            <div className="group h-full flex items-center relative">
              <Link href="/classes" className="text-foreground/80 hover:text-sage transition py-8">
                Classes
              </Link>
              
              {/* Mega Menu - Absolute positioned to spread out */}
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-screen max-w-5xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 pt-4">
                <div className="bg-white rounded-3xl shadow-xl border border-sage/10 p-8">
                  <div className="flex justify-between items-center border-b border-blush/30 pb-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground">Explore Our Classes</h3>
                    <Link href="/classes" className="text-sage font-semibold hover:text-sage-light">View all &rarr;</Link>
                  </div>
                  
                  {classes.length > 0 ? (
                    <div className="grid grid-cols-4 gap-6">
                      {classes.map((cls) => (
                        <div key={cls.id} className="group/item">
                          <Link href="/classes" className="block">
                            <div className="aspect-video w-full rounded-xl bg-sage/20 mb-3 overflow-hidden">
                              {cls.photo ? (
                                <img src={`http://127.0.0.1:8000/storage/${cls.photo}`} alt={cls.title} className="w-full h-full object-cover group-hover/item:scale-105 transition duration-500" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-sage">
                                  <Dumbbell size={32} strokeWidth={1.5} />
                                </div>
                              )}
                            </div>
                            <h4 className="font-semibold text-foreground group-hover/item:text-sage transition">{cls.title}</h4>
                            <p className="text-sm text-foreground/60 line-clamp-2 mt-1">{cls.description}</p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-foreground/50 py-8">No classes available.</div>
                  )}
                </div>
              </div>
            </div>
            
            <Link href="/pricing" className="text-foreground/80 hover:text-sage transition">Pricing</Link>
            <Link href="/blog" className="text-foreground/80 hover:text-sage transition">Blog</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-sage transition">Contact</Link>
          </div>
          
          <div className="hidden md:flex">
            <a 
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Pilates%20Studio" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-sage text-white rounded-full hover:bg-sage-light transition font-semibold"
            >
              Book Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
