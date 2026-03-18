export default function StatsMarquee() {
  return (
    <div className="relative py-12 border-y border-white/10 overflow-hidden bg-black/50 backdrop-blur-md z-10 mt-24">
      <div className="marquee-track items-center gap-16 md:gap-32 text-4xl md:text-6xl font-black uppercase whitespace-nowrap">
        {[1, 2].map((i) => (
          <span key={i} className="contents">
            <span className="text-outline">Practical Competence</span>
            <span className="text-[#00F0FF] mx-8 md:mx-16">•</span>
            <span className="text-outline">Updated Strategies</span>
            <span className="text-[#00F0FF] mx-8 md:mx-16">•</span>
            <span className="text-outline">International Standard</span>
            <span className="text-[#00F0FF] mx-8 md:mx-16">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
