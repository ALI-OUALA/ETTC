export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] pt-24 pb-8 px-6 md:px-12 z-10 relative border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-24 mb-8">
        <div>
          <h2 className="text-8xl md:text-[15vw] font-black uppercase leading-none tracking-tighter text-white">
            ETTC<span className="text-[#00F0FF]">.</span>
          </h2>
        </div>
        <div className="mt-12 md:mt-0 flex border-l border-white/20 pl-8 flex-col gap-4 mono text-sm text-neutral-400 tracking-widest leading-loose">
          <p className="text-white max-w-xs">
            Bous'haki “A”, villa 81, next to SONITEX bus stop, Bab Ezzouar, Algiers 16025
          </p>
          <p>
            <a href="tel:+213560988699" className="hover:text-white transition-colors">
              +213 (0) 560 98 86 99
            </a>
          </p>
          <p>
            <a href="mailto:englishteachertrainingcenter@gmail.com" className="hover:text-white transition-colors lowercase">
              englishteachertrainingcenter@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs mono text-neutral-600 uppercase tracking-widest">
        <div>&copy; {year} ETTC GLOBAL. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
