import RevealOnScroll from './RevealOnScroll';

export default function CTA() {
  return (
    <section
      className="py-40 px-6 md:px-12 z-10 relative text-center border-t border-white/10 bg-[#030303] overflow-hidden"
    >
      {/* Massive blurred cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#00F0FF] rounded-full filter blur-[150px] opacity-10 pointer-events-none" />

      <RevealOnScroll className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-none">
          Initiate <br />
          <span className="text-outline">Your Legacy.</span>
        </h2>
        <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light">
          Registration for our upcoming professional training programs is now open.
          Enter your email or contact us directly to secure your place.
        </p>

        <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border border-white/20 rounded-full overflow-hidden p-1 bg-white/5 backdrop-blur-md focus-within:border-[#00F0FF] transition-colors">
          <input
            type="email"
            placeholder="E-MAIL ADDRESS"
            className="flex-1 bg-transparent px-8 py-4 text-white placeholder-neutral-500 focus:outline-none mono text-sm"
          />
          <button
            type="submit"
            className="bg-white text-black px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#00F0FF] transition-colors"
          >
            Submit
          </button>
        </form>
      </RevealOnScroll>
    </section>
  );
}
