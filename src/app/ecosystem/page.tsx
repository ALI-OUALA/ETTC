import PageHero from '@/components/PageHero';
import WorkshopsWebinars from '@/components/WorkshopsWebinars';
import Community from '@/components/Community';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-[#030303] flex flex-col">
      <PageHero 
        title={<>The <span className="text-outline">Ecosystem.</span></>} 
        subtitle="Beyond certification. Immerse yourself in a community of excellence through continuous professional development and exclusive events."
      />
      <div className="flex-1">
        <WorkshopsWebinars />
        <Community />
        <FAQ />
      </div>
      <CTA />
    </main>
  );
}
