import RevealOnScroll from './RevealOnScroll';
import { Users, Award, Star } from 'lucide-react';

export default function Community() {
  return (
    <section className="py-32 px-6 md:px-12 z-10 relative bg-[#030303] border-t border-white/10">
      <RevealOnScroll className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">The ETTC Ecosystem</h2>
        <div className="mono text-neutral-500 text-sm tracking-widest uppercase">
          More than a course. A community of excellence.
        </div>
      </RevealOnScroll>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* meETTC */}
        <RevealOnScroll className="bg-black/50 border border-white/10 p-10 rounded-2xl hover:border-[#00F0FF]/50 transition-colors group">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-[#00F0FF]/10 group-hover:text-[#00F0FF] transition-colors">
            <Users size={32} />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#00F0FF] transition-colors">
            meETTC
          </h3>
          <p className="text-neutral-400 font-light mb-8 leading-relaxed">
            Our weekly in-person community gathering at ETTC. Designed for networking, inspiration, and professional growth. Engage with guest speakers, workshops, and teaching demonstrations.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="mono text-xs text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
              3 Hours
            </span>
            <span className="mono text-xs text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
              Weekly
            </span>
            <span className="mono text-xs text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
              Pre-registration
            </span>
          </div>
        </RevealOnScroll>

        {/* English Creator Award */}
        <RevealOnScroll className="bg-black/50 border border-white/10 p-10 rounded-2xl hover:border-[#00F0FF]/50 transition-colors group">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-[#00F0FF]/10 group-hover:text-[#00F0FF] transition-colors">
            <Award size={32} />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#00F0FF] transition-colors">
            English Creator Award
          </h3>
          <p className="text-neutral-400 font-light mb-8 leading-relaxed">
            A recognition initiative celebrating creativity and excellence in English-language educational content creation, including lesson plans, videos, and podcasts.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="mono text-xs text-[#00F0FF] uppercase tracking-widest border border-[#00F0FF]/30 px-3 py-1 rounded-full">
              Nomination
            </span>
            <span className="mono text-xs text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
              Audience Voting
            </span>
          </div>
        </RevealOnScroll>

        {/* Yearly Ceremony */}
        <RevealOnScroll className="bg-black/50 border border-white/10 p-10 rounded-2xl hover:border-[#00F0FF]/50 transition-colors group">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-[#00F0FF]/10 group-hover:text-[#00F0FF] transition-colors">
            <Star size={32} />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#00F0FF] transition-colors">
            Yearly Ceremony
          </h3>
          <p className="text-neutral-400 font-light mb-8 leading-relaxed">
            Our annual ETTC community celebration. A prestigious recognition moment bringing together our alumni, trainers, and educational partners to celebrate the year's achievements.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="mono text-xs text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
              Annual Event
            </span>
            <span className="mono text-xs text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
              Community
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
