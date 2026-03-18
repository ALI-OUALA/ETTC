import PageHero from '@/components/PageHero';
import Programs from '@/components/Programs';
import CTA from '@/components/CTA';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#030303] flex flex-col">
      <PageHero 
        title={<>Master Your <span className="text-outline">Craft.</span></>} 
        subtitle="Explore our internationally accredited English teaching certifications designed to elevate your professional trajectory."
      />
      <div className="flex-1">
        <Programs />
      </div>
      <CTA />
    </main>
  );
}
