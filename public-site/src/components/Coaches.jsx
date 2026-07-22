"use client";

import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

export default function Coaches() {
  const [coaches, setCoaches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive cards to show: could be dynamic based on screen size, but we'll default to 4 for desktop
  const cardsToShow = 4;

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/public/coaches')
      .then(res => res.json())
      .then(data => setCoaches(data))
      .catch(err => console.error('Failed to fetch coaches:', err));
  }, []);

  const maxIndex = Math.max(0, coaches.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  if (coaches.length === 0) return null;

  const visibleCoaches = coaches.slice(currentIndex, currentIndex + cardsToShow);
  
  // Calculate how many dots to show (total pages if we slide by 1)
  const totalDots = maxIndex + 1;

  return (
    <section id="coaches" className="py-24 bg-ivory text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-foreground">Meet Our Coaches</h2>
        </div>

        {/* Carousel Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 min-h-[400px]">
          {visibleCoaches.map((coach) => (
            <div key={coach.id} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="aspect-[4/5] w-full bg-sage/20 relative mb-4 overflow-hidden">
                {coach.photo ? (
                  <img 
                    src={`http://127.0.0.1:8000/storage/${coach.photo}`} 
                    alt={coach.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sage">
                    <User size={64} strokeWidth={1.5} />
                  </div>
                )}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold mb-1 group-hover:text-sage transition">{coach.name}</h3>
              <p className="text-sm text-foreground/60">{coach.specialty}</p>
            </div>
          ))}
        </div>
        
        {/* Footer Controls: Dots center, Arrows right */}
        {coaches.length > cardsToShow && (
          <div className="flex justify-between items-center relative">
            <div className="w-24"></div> {/* Spacer for symmetry */}
            
            {/* Pagination Dots */}
            <div className="flex gap-2 absolute left-1/2 -translate-x-1/2">
              {Array.from({ length: totalDots }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-sage scale-125' : 'bg-sage/30 hover:bg-sage/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="p-2 text-foreground/60 hover:text-sage transition flex items-center justify-center"
                aria-label="Previous Coaches"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 text-foreground/60 hover:text-sage transition flex items-center justify-center"
                aria-label="Next Coaches"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
