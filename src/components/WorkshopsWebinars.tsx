import RevealOnScroll from './RevealOnScroll';
import { PlayCircle } from 'lucide-react';

const webinars = [
  { date: '30/03/2023', title: 'Different Pathways an ESL Teacher Can Choose', speaker: 'Sondes Gharbi' },
  { date: '06/04/2023', title: 'Students’ Motivations and Learning Styles', speaker: 'Maissa Hammouce' },
  { date: '13/04/2023', title: 'The Impact of Volunteering on English Language Teaching', speaker: 'Aya Bendaas' },
  { date: '04/05/2023', title: 'Intercultural Competence in English Language Teaching', speaker: 'Dr. Djamilla Ait Aissa' },
  { date: '18/05/2023', title: 'How AI Can Facilitate Intercultural Learning', speaker: 'Dr. Amina Douidi' },
  { date: '27/08/2023', title: 'The Importance of CPD to English Language Teachers', speaker: 'Mr. Hamza Nani' },
];

export default function WorkshopsWebinars() {
  return (
    <section className="py-32 px-6 md:px-12 z-10 relative bg-[#000000]">
      <RevealOnScroll className="mb-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Professional Growth</h2>
        <div className="mono text-neutral-500 text-sm tracking-widest">Beyond the certification.</div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Workshops Column */}
        <RevealOnScroll className="flex flex-col">
          <h3 className="text-3xl font-bold uppercase tracking-tight mb-8 text-[#00F0FF]">
            Live Workshops
          </h3>
          <p className="text-xl text-neutral-400 font-light mb-8 leading-relaxed">
            Continuing professional development for English language teachers. Engage in hands-on activities, dynamic discussions, and role-plays.
          </p>
          <ul className="space-y-6 border-t border-white/10 pt-8">
            <li className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-lg text-white">Methodologies & Skills Development</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-lg text-white">Classroom Management</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-lg text-white">Assessment Strategies</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-lg text-white">Technology Integration</span>
            </li>
          </ul>
          
          <div className="mt-8 flex gap-4 text-xs mono text-neutral-500 uppercase tracking-widest">
            <span className="border border-white/20 px-3 py-1 rounded-full">Province-based / Online</span>
            <span className="border border-white/20 px-3 py-1 rounded-full">2-4 Days</span>
            <span className="border border-white/20 px-3 py-1 rounded-full text-[#00F0FF] border-[#00F0FF]/30">Certificate Provided</span>
          </div>
        </RevealOnScroll>

        {/* Webinars Column */}
        <RevealOnScroll className="flex flex-col lg:pl-16 lg:border-l border-white/10">
          <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">
            Webinar Archive
          </h3>
          <p className="text-neutral-400 font-light mb-8">
            Access our thought-leadership series covering modern pedagogy, psychology, and structural linguistics.
          </p>
          
          <div className="space-y-6">
            {webinars.map((webinar, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="flex items-start gap-4">
                  <PlayCircle className="text-neutral-600 group-hover:text-[#00F0FF] transition-colors mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white text-lg font-medium group-hover:text-[#00F0FF] transition-colors">
                      {webinar.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-2 mono text-xs uppercase tracking-widest text-neutral-500">
                      <span>{webinar.date}</span>
                      <span className="text-neutral-700">•</span>
                      <span>{webinar.speaker}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
