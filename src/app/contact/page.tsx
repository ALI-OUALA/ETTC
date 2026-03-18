import PageHero from '@/components/PageHero';
import RegistrationForm from '@/components/RegistrationForm';
import { Suspense } from 'react';

export const metadata = {
  title: 'Apply | ETTC',
  description: 'Join the English Teacher Training Center. Secure your spot in our premium programs today.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-24">
      <PageHero 
        title={
          <>
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00F0FF]">Journey</span>
          </>
        }
        subtitle="Fill out the application below to secure your spot in our upcoming cohorts. A member of our admissions team will be in touch within 24 hours."
      />
      <div className="container mx-auto px-6 mt-16 md:mt-24">
        {/* We use Suspense around RegistrationForm because it uses useSearchParams under the hood. */}
        <Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-[#00F0FF] animate-pulse">Loading Application...</div>}>
          <RegistrationForm />
        </Suspense>
      </div>
    </main>
  );
}
