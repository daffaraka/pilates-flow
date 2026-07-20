import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Feather, Sun, Moon, Zap, Anchor } from 'lucide-react';

export const metadata = {
  title: 'About Us | Pilates Studio',
  description: 'Learn more about our Pilates studio, our philosophy, and our team of expert coaches.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SPLIT SCREEN */}
      <section className="flex flex-col lg:flex-row min-h-screen pt-20 lg:pt-0">
        
        {/* Left Side: Dark Panel */}
        <div className="lg:w-1/2 bg-[#1c1917] flex flex-col justify-center px-8 lg:px-24 py-24 text-white relative">
          <div className="mb-12">
            <span className="text-sage text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-sage rounded-full"></span> 01. OUR MISSION
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-10">
            STRENGTH,<br/>
            BALANCE<br/>
            &amp; CONTROL.
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-auto gap-8">
            <p className="text-white/60 max-w-sm font-medium leading-relaxed uppercase text-sm tracking-wide">
              We help individuals build stronger bodies and calmer minds with mindful movement and <span className="text-white font-bold">smooth studio experiences.</span>
            </p>
            
            <Link href="/classes" className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase hover:text-sage transition">
              View Classes <span className="bg-sage text-white p-2 flex items-center justify-center"><ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>

        {/* Right Side: Image Panel */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-[#1c1917]">
          <img 
            src="/images/about-hero.png" 
            alt="Pilates Studio Instructor" 
            className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
          />
          {/* Overlapping massive text */}
          <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
            <h2 className="text-[12vw] lg:text-[9vw] font-bold tracking-tight text-white/90 drop-shadow-2xl leading-none">
              STUDIO&reg;
            </h2>
          </div>
          
          {/* Top right floating badge */}
          <div className="absolute top-24 lg:top-8 right-8 bg-black/80 backdrop-blur text-white text-xs font-bold tracking-widest uppercase flex items-center gap-4 py-2 px-4">
            <img src="/images/about-hero.png" className="w-6 h-6 rounded-full object-cover" alt="Coach" />
            <span>START YOUR JOURNEY / AVAILABLE</span>
          </div>
        </div>
      </section>

      {/* 2. LOGO MARQUEE (Simulated) */}
      <div className="border-b border-gray-200 py-8 overflow-hidden bg-white">
        <div className="flex justify-between items-center px-4 lg:px-12 opacity-40 grayscale flex-wrap gap-8 text-sm font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2"><Activity size={20} /> STOTT Pilates</div>
          <div className="flex items-center gap-2"><Feather size={20} /> Balanced Body</div>
          <div className="flex items-center gap-2"><Sun size={20} /> Yoga Alliance</div>
          <div className="flex items-center gap-2"><Moon size={20} /> Basi</div>
          <div className="flex items-center gap-2"><Zap size={20} /> Polestar</div>
          <div className="flex items-center gap-2"><Anchor size={20} /> Peak Pilates</div>
        </div>
      </div>

      {/* 3. MISSION SECTION */}
      <section className="py-32 px-8 lg:px-24 bg-white text-[#1c1917]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Column */}
          <div className="lg:w-2/5">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-none mb-10 text-gray-400">
              A CLEAR <br/> <span className="text-[#1c1917]">DIRECTION.</span>
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest leading-relaxed mb-10 max-w-xs">
              I turn mindful movement and health goals into <span className="text-gray-400">results that feel</span> focused, polished, and easy to achieve.
            </p>
            <Link href="/contact" className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase hover:text-sage transition text-[#1c1917]">
              Book A Free Call <span className="bg-sage text-white p-2 flex items-center justify-center"><ArrowRight size={16} /></span>
            </Link>
          </div>

          {/* Right Column */}
          <div className="lg:w-3/5 text-lg lg:text-xl text-gray-600 leading-relaxed space-y-8 font-medium">
            <div className="mb-8">
              <span className="text-sage text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 bg-sage rounded-full"></span> 02. MY PHILOSOPHY
              </span>
              <p className="text-2xl font-bold text-[#1c1917] leading-snug">
                I help individuals, athletes, and modern professionals turn health goals into a reality that feels clear, polished, and easy to maintain. My work combines anatomical knowledge, visual alignment, and mind-body connection to create physical experiences that are both refined and practical.
              </p>
            </div>
            
            <p>
              Every journey starts with understanding what the body needs to achieve. Before I assign a program, I look at the individual, their daily habits, the physical constraints, and the goals behind it. This gives the journey a clear direction and helps every session feel intentional.
            </p>
            
            <p>
              I like workouts that feel challenging, but not overwhelming. Clean movements, strong posture, smooth transitions, and a clear structure should work together quietly in the background. The result should feel refined, easy to execute, and natural from the first stretch to the final breath.
            </p>
            
            <p>
              For me, good fitness is not only about how a body looks. It is about how clearly it moves, how smoothly it functions, and how easy it is to manage day to day. That is why I connect physical training and mental wellness from the beginning of every program.
            </p>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="pb-32 px-8 lg:px-24 bg-white text-[#1c1917]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 border-t border-gray-200 pt-16">
          
          <div>
            <h3 className="text-5xl font-bold tracking-tight mb-4">100<span className="text-gray-400">+</span></h3>
            <div className="flex items-center gap-2 mb-4">
               <span className="w-1 h-1 bg-sage rounded-full"></span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Active Members</span>
            </div>
            <p className="text-sm text-gray-500 font-medium pr-4">
              Individuals dedicated to creating <span className="font-bold text-[#1c1917]">clear journeys, stronger engagement,</span> and better physical health.
            </p>
          </div>
          
          <div>
            <h3 className="text-5xl font-bold tracking-tight mb-4">12<span className="text-gray-400">+</span></h3>
            <div className="flex items-center gap-2 mb-4">
               <span className="w-1 h-1 bg-sage rounded-full"></span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Expert Coaches</span>
            </div>
            <p className="text-sm text-gray-500 font-medium pr-4">
              Certified professionals seen across <span className="font-bold text-[#1c1917]">mat classes, reformer sessions,</span> and private touchpoints.
            </p>
          </div>
          
          <div>
            <h3 className="text-5xl font-bold tracking-tight mb-4">55<span className="text-gray-400">+</span></h3>
            <div className="flex items-center gap-2 mb-4">
               <span className="w-1 h-1 bg-sage rounded-full"></span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Weekly Classes</span>
            </div>
            <p className="text-sm text-gray-500 font-medium pr-4">
              <span className="font-bold text-[#1c1917]">Mat pilates, reformer flows, and</span> private sessions created for beginners, athletes, and everyone in between.
            </p>
          </div>
          
          <div>
            <h3 className="text-5xl font-bold tracking-tight mb-4">4.9</h3>
            <div className="flex items-center gap-2 mb-4">
               <span className="w-1 h-1 bg-sage rounded-full"></span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Average Rating</span>
            </div>
            <p className="text-sm text-gray-500 font-medium pr-4">
              User moments shaped through <span className="font-bold text-[#1c1917]">clean facilities, smooth sessions,</span> and thoughtful coaching design.
            </p>
          </div>
          
        </div>
      </section>

      {/* 5. FOOTER / CTA SECTION */}
      <section className="bg-[#1c1917] text-white py-32 px-8 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          
          <div className="lg:w-1/2">
            <span className="text-sage text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 bg-sage rounded-full"></span> 03. SERVICES
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-12 text-gray-400">
              WHAT I <br/> <span className="text-white">CREATE.</span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest leading-relaxed text-gray-400 max-w-xs">
              FROM FIRST STRETCH TO FINAL GOAL,<br/>
              I CREATE PROGRAMS WITH <span className="text-white">CLEAR STRUCTURE &amp; SMOOTH</span> PROGRESSION.
            </p>
          </div>
          
          <div className="lg:w-1/3">
            <span className="text-sage text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 bg-sage rounded-full"></span> 04. CONTACT
            </span>
            <h2 className="text-4xl font-bold tracking-tight leading-none mb-8 text-gray-400">
              PLAN YOUR <br/> NEXT SESSION <br/> <span className="text-white">WITH ME.</span>
            </h2>
            
            <div className="bg-white/5 border border-white/10 p-6 flex items-center gap-6 mt-12 hover:bg-white/10 transition cursor-pointer">
              <img src="/images/about-hero.png" className="w-16 h-16 object-cover rounded" alt="Coach" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-1">Ayu Lestari</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">HEAD COACH &amp; EXPERT</p>
                <span className="text-sage text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  BOOK A CALL NOW <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </main>
  );
}
