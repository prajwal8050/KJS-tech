import React from 'react';
import { useMedia } from '../context/MediaContext';
import { Phone, Mail, MessageCircle, Award, CheckCircle2, Sparkles, GraduationCap, ShieldCheck, Briefcase, Camera } from 'lucide-react';

export const CEOSection: React.FC = () => {
  const { ceo, navigateTo } = useMedia();

  return (
    <section id="leadership" className="py-16 sm:py-20 bg-[#07080A] text-[#F3F4F6] border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
            Founder & CEO's Desk
          </h2>
          <p className="text-base text-slate-400">
            Committed to engineering excellence and building the next generation of tech leaders.
          </p>
        </div>

        {/* CEO Feature Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#101422] via-[#0D1117] to-black rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: CEO Profile Photo */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                {/* Executive Avatar Frame */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-amber-500/30 via-slate-800 to-black border-2 border-amber-500/50 p-1.5 shadow-2xl overflow-hidden relative">
                  <img
                    src={ceo.photoUrl}
                    alt={`${ceo.name}, ${ceo.qualification} - Founder & CEO of KJS Technologies`}
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
                  
                  {/* Quick Change Overlay button */}
                  <button
                    onClick={() => navigateTo('admin')}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-amber-400 text-xs font-bold gap-1 cursor-pointer"
                    title="Change CEO Photo in Admin"
                  >
                    <Camera className="w-5 h-5" />
                    <span>Change Photo</span>
                  </button>
                </div>

                {/* Verified Leadership Pill */}
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-black shadow-xl flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span>{ceo.role}</span>
                </div>
              </div>

              {/* Name & Academic Credentials */}
              <div className="mt-7 space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk',sans-serif]">
                  {ceo.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Qualification: {ceo.qualification}</span>
                </div>
                <p className="text-xs text-slate-400 pt-0.5">
                  {ceo.role}, {ceo.organization}
                </p>
              </div>

              {/* Direct Quick Badges */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/5 border border-white/10 text-slate-300">
                  Tech Architect
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/5 border border-white/10 text-slate-300">
                  Senior Mentor
                </span>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/5 border border-white/10 text-slate-300">
                  Full Stack Expert
                </span>
              </div>
            </div>

            {/* Right Column: Mission, Direct Contact & Values */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Direct Message from the Founder</span>
                </div>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                  "At <strong className="text-white">KJS Technologies</strong>, we founded both our Software Division and Coaching Academy with a single standard: uncompromising technical rigor. Whether we are building enterprise systems for clients or training graduates in Java Full Stack, Python, and Data Analytics, every line of code matters."
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  "As an M.Tech graduate and active engineering mentor, my personal commitment is to ensure every student walks away with real architecture knowledge, production project experience, and complete confidence to crack top-tier technical interviews."
                </p>
              </div>

              {/* Pillars of Leadership */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direct CEO Guidance & Final Mock Interviews</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Real Enterprise Software Lab Standards</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>M.Tech Led Curriculum Architecture</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Open Door Policy for Career Guidance</span>
                </div>
              </div>

              {/* Direct CEO Connect Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+918050070508"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-black" />
                  <span>Call: +91 8050070508</span>
                </a>

                <a
                  href="https://wa.me/918050070508?text=Hello%20Prajwal%20sir,%20I%20visited%20KJS%20Technologies%20website%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>

                <a
                  href="mailto:prajwalgowd88@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>prajwalgowd88@gmail.com</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
