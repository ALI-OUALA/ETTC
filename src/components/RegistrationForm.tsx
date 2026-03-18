'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    // Extract query parameter safely on client side
    const params = new URLSearchParams(window.location.search);
    const p = params.get('program');
    if (p) {
      setFormData(prev => ({ ...prev, program: p }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate generic API call delay for premium feel
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <RevealOnScroll className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-[#00F0FF]/30 p-12 rounded-3xl text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00F0FF]/10 filter blur-[80px] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <CheckCircle size={64} className="text-[#00F0FF] mb-8" />
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Application Received</h3>
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Thank you, <span className="text-white font-medium">{formData.name}</span>.<br />
            Our admissions team is reviewing your profile and will contact you via {formData.email} shortly to discuss your onboarding.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-12 text-sm uppercase tracking-widest text-[#00F0FF] hover:text-white transition-colors underline underline-offset-4"
          >
            Submit Another Application
          </button>
        </div>
      </RevealOnScroll>
    );
  }

  return (
    <RevealOnScroll className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl flex flex-col gap-6 relative group">
        
        {/* Subtle ambient border glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Full Name *</label>
            <input 
              required
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-black/50 border border-white/10 px-6 py-4 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Phone Number *</label>
            <input 
              required
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="bg-black/50 border border-white/10 px-6 py-4 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Email Address *</label>
          <input 
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="bg-black/50 border border-white/10 px-6 py-4 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Program of Interest *</label>
            <select 
              required
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="bg-black/50 border border-white/10 px-6 py-4 rounded-xl text-white focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all text-sm appearance-none"
            >
              <option value="" disabled>Select a Program...</option>
              <option value="TEFL">TEFL (Teaching English as a Foreign Language)</option>
              <option value="TESOL">TESOL (Teaching English to Speakers of Other Languages)</option>
              <option value="CELTA">CELTA (Certificate in English Language Teaching to Adults)</option>
              <option value="TOTY">TOTY (Training of Teaching Youngsters)</option>
              <option value="TOTO">TOTO (Training of Teaching Online)</option>
              <option value="TOELT">TOELT (Training of English Language Trainers)</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Teaching Experience</label>
            <select 
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="bg-black/50 border border-white/10 px-6 py-4 rounded-xl text-white focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all text-sm appearance-none"
            >
              <option value="" disabled>Select Level...</option>
              <option value="none">No Experience (Novice)</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5+">5+ Years (Advanced)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Additional Message (Optional)</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your goals..."
            rows={4}
            className="bg-black/50 border border-white/10 px-6 py-4 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all text-sm resize-none"
          />
        </div>

        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="relative z-10 mt-6 bg-[#00F0FF] text-black px-10 py-5 rounded-xl text-sm uppercase tracking-widest font-black hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Processing...
            </>
          ) : 'Submit Application'}
        </button>

      </form>
    </RevealOnScroll>
  );
}
