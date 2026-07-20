import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex flex-col justify-center items-center bg-ivory text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-sage/10 -z-10"></div>
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Find Your Flow. <br /> Strengthen Your Core.
        </h1>
        <p className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Experience mindful movement and holistic wellness with our expert-led Pilates classes designed for all levels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20booking%20kelas%20Pilates"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-light transition shadow-lg"
          >
            Book via WhatsApp
          </a>
          <a
            href="#classes"
            className="px-8 py-4 bg-blush text-foreground font-semibold rounded-full hover:bg-blush/80 transition"
          >
            Explore Classes
          </a>
        </div>
      </div>
    </section>
  );
}
