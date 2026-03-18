'use client';

import RevealOnScroll from './RevealOnScroll';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-48 pb-24 px-6 md:px-12 z-10 bg-[#000000] overflow-hidden border-b border-white/10">
      {/* Background ambient glow specific to inner pages */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vw] md:w-[60vw] md:h-[30vw] bg-[#00F0FF] rounded-full filter blur-[150px] opacity-[0.05] pointer-events-none" />
      
      <RevealOnScroll className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-8 tracking-tighter leading-none">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-6 border-t border-white/20 pt-8">
          <div className="w-12 h-[1px] bg-[#00F0FF] hidden md:block" />
          <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
