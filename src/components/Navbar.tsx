import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 mix-blend-difference px-6 py-8 flex justify-between items-center pointer-events-none">
      <Link href="/" className="text-white font-bold text-xl tracking-tight pointer-events-auto hover:text-[#00F0FF] transition-colors">
        ETTC<span className="text-[#00F0FF]">.</span>
      </Link>
      <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium text-white pointer-events-auto">
        <Link href="/programs" className="hover:text-[#00F0FF] transition-colors">
          Programs
        </Link>
        <Link href="/ecosystem" className="hover:text-[#00F0FF] transition-colors">
          Ecosystem
        </Link>
        <Link href="/contact" className="hover:text-[#00F0FF] transition-colors">
          Contact
        </Link>
      </div>
      <Link href="/contact" className="pointer-events-auto bg-white text-black px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#00F0FF] transition-colors">
        Enroll Now
      </Link>
    </nav>
  );
}
