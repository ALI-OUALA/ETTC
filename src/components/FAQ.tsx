'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10 cursor-pointer group" onClick={onClick}>
      <div className="py-8 flex justify-between items-center pr-4">
        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[#00F0FF] transition-colors">
          {question}
        </h3>
        <div className="text-neutral-500 group-hover:text-white transition-colors flex-shrink-0 ml-4">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">{answer}</p>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: 'Do I require a university degree to enroll?',
    a: 'ETTC certification is open to all. While specific global markets (e.g., Japan, South Korea) require degrees for visa processing, online platforms and European markets frequently do not.',
  },
  {
    q: 'What is the architectural timeline of the Master TEFL?',
    a: 'Self-paced execution. Standard completion metrics average 4–8 weeks at 10 hours per week. Maximum completion window is 6 months.',
  },
  {
    q: 'Is the certification globally accredited?',
    a: 'Yes. Fully accredited by the International TEFL Accreditation Council, ensuring your credentials hold weight across all borders.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="py-32 px-6 md:px-12 z-10 relative bg-[#030303]">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll className="mb-16">
          <div className="mono text-[#00F0FF] text-sm tracking-widest mb-4">
            FAQ // INTELLIGENCE
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase">Clarity.</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
