'use client';

import { useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    num: '01',
    title: 'TEFL',
    desc: 'Teaching English as a Foreign Language: Methodologies, classroom management, and lesson planning.',
    tag: 'Online / On-site',
    imgId: '1524178232363-1fb2b075b655',
  },
  {
    num: '02',
    title: 'TESOL',
    desc: 'Teaching English to Speakers of Other Languages: Acquisition theories, instructional strategies, and assessment.',
    tag: 'Online / On-site',
    imgId: '1503676260728-1c00da094a0b',
  },
  {
    num: '03',
    title: 'CELTA',
    desc: 'Certificate in English Language Teaching to Adults: Internationally recognized qualification focusing on adult learners.',
    tag: 'Online / On-site',
    imgId: '1456513080510-7bf3a84b82f8',
  },
  {
    num: '04',
    title: 'TOTY',
    desc: 'Training of Teaching Youngsters: Engaging strategies and hands-on activities for positive learning environments.',
    tag: 'Online / On-site',
    imgId: '1584697964190-f3b1456e3477', 
  },
  {
    num: '05',
    title: 'TOTO',
    desc: 'Training of Teaching Online: Online teaching methodologies, technology integration, and digital engagement strategies.',
    tag: 'Online / On-site',
    imgId: '1516321318423-f06f85e504b3', 
  },
  {
    num: '06',
    title: 'TOELT',
    desc: 'Training of English Language Trainers: Advanced teacher-trainer development, mentoring, and professional leadership.',
    tag: 'Online / On-site',
    imgId: '1552664730-d307ca884978', 
  },
];

export default function Programs() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only update transform to ensure high performance 60fps tracking without re-renders
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -120%)`;
    }
  };

  const handleMouseEnter = (desc: string) => {
    if (cursorRef.current && descRef.current) {
      descRef.current.innerText = desc;
      cursorRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeaveList = () => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '0';
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 z-10 relative bg-[#030303] overflow-hidden">
      
      {/* Elite Floating Cursor Toolkit - SHARP VERSION */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 z-[100] pointer-events-none transition-opacity duration-150 ease-in-out flex items-center justify-center p-6 bg-black border-[2px] border-[#00F0FF] rounded-none w-72 md:w-80 shadow-[10px_10px_0px_rgba(0,240,255,0.2)] opacity-0 hidden md:flex"
        style={{ willChange: 'transform, opacity' }}
      >
        <p ref={descRef} className="text-white font-bold uppercase tracking-tight text-center text-xs" />
      </div>

      <RevealOnScroll className="mb-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Elite Programs</h2>
        <div className="mono text-neutral-500 text-sm tracking-widest italic">PREMIUM TRAJECTORIES.</div>
      </RevealOnScroll>

      <div 
        className="border-t-[2px] border-white/20 max-w-7xl mx-auto relative cursor-none md:cursor-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeaveList}
      >
        {programs.map((prog, idx) => (
          <RevealOnScroll
            key={idx}
            className="program-row border-b-[1px] border-white/10 group relative"
          >
            <Link 
              href={`/contact?program=${encodeURIComponent(prog.title)}`} 
              onMouseEnter={() => handleMouseEnter(prog.desc)}
              className="py-12 md:py-20 flex flex-col md:flex-row md:items-center justify-between w-full h-full md:cursor-none outline-none block hover:bg-white/[0.02] transition-colors duration-100"
            >
              {/* Hover Image Reveal - Sharp High Contrast */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-0 group-hover:opacity-30 pointer-events-none transition-all duration-200 ease-out hidden md:block z-0 grayscale invert brightness-150">
                <img
                  src={`https://images.unsplash.com/photo-${prog.imgId}?auto=format&fit=crop&q=80&w=800`}
                  alt={prog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-start gap-8 md:gap-16 z-10">
                <span className="mono text-[#00F0FF] mt-2 md:mt-4 text-sm font-bold opacity-50 group-hover:opacity-100 transition-opacity">{prog.num}</span>
                <div>
                  <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-2 md:mb-0 group-hover:text-[#00F0FF] transition-all duration-150 italic">
                    {prog.title}
                  </h3>
                  {/* Mobile only desc */}
                  <p className="text-neutral-400 font-light max-w-sm block md:hidden mt-4">{prog.desc}</p>
                </div>
              </div>

              <div className="mt-8 md:mt-0 flex items-center gap-8 z-10 transition-transform duration-200 group-hover:-translate-x-6">
                <span className="border-[2px] border-white/20 px-6 py-2 text-xs uppercase tracking-widest text-white font-black group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-all">
                  {prog.tag}
                </span>
                <div className="w-20 h-20 bg-white text-black flex items-center justify-center arrow-icon group-hover:bg-[#00F0FF] transition-all">
                  <ArrowUpRight size={32} className="text-black stroke-[3px]" />
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
