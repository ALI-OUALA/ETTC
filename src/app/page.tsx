'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import StatsMarquee from '@/components/StatsMarquee';
import ImageRevealSection from '@/components/ImageRevealSection';
import CTA from '@/components/CTA';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsMarquee />
      <ImageRevealSection />
      
      {/* Featured Programs Teaser */}
      <section className="py-24 md:py-40 px-6 md:px-12 z-10 relative bg-[#030303] flex flex-col items-center justify-center border-t border-white/10 text-center">
        <h2 className="text-sm md:text-base text-[#00F0FF] font-bold tracking-widest uppercase mb-6">Master Your Craft</h2>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-12 max-w-5xl leading-tight">
          Elite Certifications For The Modern Educator
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-3xl">
          {['TEFL', 'TESOL', 'CELTA', 'TOTY', 'TOTO', 'TOELT'].map((prog) => (
            <Link key={prog} href={`/programs`} className="border border-white/20 px-6 md:px-8 py-3 rounded-full text-white/50 text-sm md:text-base font-medium hover:text-white hover:border-[#00F0FF] hover:bg-white/5 transition-all text-center">
              {prog}
            </Link>
          ))}
        </div>
        <Link href="/programs" className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-sm uppercase tracking-widest font-black hover:bg-[#00F0FF] transition-all">
          Explore All Programs
          <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </section>
      
      <section className="py-32 md:py-40 px-6 md:px-12 z-10 relative bg-[#000000] border-t border-white/10 text-center overflow-hidden">
        {/* Subtle ambient glow behind Ecosystem teaser */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-[#00F0FF]/10 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-8 tracking-tighter">Join the Ecosystem</h2>
           <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Beyond certification. Engage in live workshops, explore our webinar archives, and participate in our weekly community gatherings.
           </p>
           <Link href="/ecosystem" className="inline-flex items-center gap-4 border border-white/20 text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-black hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors">
              Explore Ecosystem
           </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
