import RevealOnScroll from './RevealOnScroll';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 z-10 pt-20">
      <RevealOnScroll>
        <div className="mono text-[#00F0FF] text-sm md:text-base tracking-widest mb-6 uppercase">
          [ 01 // English Teacher Training Center ]
        </div>
        <h1 className="title-huge text-white">
          BOOST YOUR <br />
          <span className="text-outline">CAREER.</span>
        </h1>
      </RevealOnScroll>

      <RevealOnScroll className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-7xl">
        <div className="col-span-1 md:col-span-2 text-lg md:text-2xl font-light text-neutral-400 max-w-3xl leading-relaxed">
          ETTC is a teacher-development center focused on high-quality, international-standard training for aspiring and experienced English teachers.
        </div>
        <div className="flex flex-col justify-end items-start md:items-end">
          <button className="flex items-center gap-4 text-white hover:text-[#00F0FF] transition-colors group">
            <span className="text-sm uppercase tracking-widest font-bold">Discover Programs</span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#00F0FF] transition-colors">
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
            </div>
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
