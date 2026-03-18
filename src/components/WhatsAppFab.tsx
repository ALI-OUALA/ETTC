import { MessageCircle } from 'lucide-react';

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/213560988699?text=Hi%20ETTC,%20I'm%20interested%20in%20the%20upcoming%20teacher%20training..."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 group mix-blend-difference"
      aria-label="Contact us on WhatsApp"
    >
      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300">
        <MessageCircle size={24} />
      </div>
    </a>
  );
}
