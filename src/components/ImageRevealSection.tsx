import RevealOnScroll from './RevealOnScroll';
import { Globe } from 'lucide-react';

export default function ImageRevealSection() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 z-10 relative bg-[#030303]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="aspect-[4/5] relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
              alt="Teacher Training"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute bottom-6 left-6 z-20 mono text-xs tracking-widest text-white mix-blend-difference">
              [ PROFESSIONAL GROWTH // ALGIERS, DZ ]
            </div>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col justify-center">
          <RevealOnScroll>
            <div className="w-12 h-12 mb-8 bg-[#00F0FF] rounded-full flex items-center justify-center text-black">
              <Globe size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              More than theory. <br />
              <span className="text-outline">Practical Competence.</span>
            </h2>
            <p className="text-xl text-neutral-400 font-light mb-12 leading-relaxed">
              ETTC offers theory-and-practice training, workshops, and professional development experiences 
              that help English teachers build practical classroom competence, strengthen methodology, 
              and grow professionally with up-to-date approaches.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-sm font-bold text-white mb-2 uppercase tracking-widest">
                  Aspiring & Novice
                </div>
                <div className="text-xs text-neutral-500 leading-relaxed">
                  Teachers looking to build a strong foundation and practical classroom competence.
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-2 uppercase tracking-widest">
                  Practicing Educators
                </div>
                <div className="text-xs text-neutral-500 leading-relaxed">
                  Teachers seeking professional growth, stronger methodology, and an ambitious community.
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
