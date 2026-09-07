import React from 'react';
import { ASSETS } from '../assets/imagesMap';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, Code2, Sparkles, PlayCircle, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (courseId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative overflow-hidden bg-[#0A0C10] text-[#F3F4F6] pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-white/10">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-amber-500/10 via-orange-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>India's Leading Tech Hub • KJS Technologies</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-['Space_Grotesk',sans-serif]">
              Launch Your Career in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500">
                Java, Python & Data Analytics
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Transform into a production-ready software engineer or business intelligence expert. 
              Learn from real tech architects at <strong className="text-white">KJS Technologies</strong> with live coding labs, 
              enterprise capstone projects, and dedicated 100% placement assistance.
            </p>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Industry-aligned Java & Python Full Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Advanced SQL, Power BI & Data Dashboards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Daily 1-on-1 Mentor Doubt Clearance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Direct Referrals to 200+ Hiring Partners</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer hover:shadow-amber-500/30 text-sm sm:text-base"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 shadow-xs hover:border-white/20 transition-all text-sm sm:text-base"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>Explore Curriculums</span>
              </a>
            </div>

            {/* Social Proof / Stats Ticker */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-slate-400 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9/5</span>
                <span className="text-slate-400">(1,100+ Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-slate-300">ISO 9001:2015 Certified Training</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Banner with Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black group">
                <img
                  src={ASSETS.heroBanner}
                  alt="KJS Technologies Engineering & Learning Center"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/40 to-transparent pointer-events-none" />

                {/* Overlay Badge at Bottom of Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A0C10]/95 backdrop-blur-md border border-white/10 text-white space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      Live Batches Ongoing
                    </span>
                    <span className="text-slate-400">Bangalore & Online</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    Java Full Stack • Python Django • Power BI Data Analytics
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Hands-on Coding Labs, Live Projects & Real-time Mentoring
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Left) */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-[#0E1217]/95 backdrop-blur-md rounded-xl p-3.5 shadow-2xl border border-white/10 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-black">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">1,200+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Alumni in Top Tech MNCs</div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Bottom Right) */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#0E1217]/95 backdrop-blur-md rounded-xl p-3.5 shadow-2xl border border-white/10 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-black">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Placement Assistance</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Program Pills Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-slate-900/80 to-black border border-white/10 rounded-2xl p-4 shadow-lg flex items-center gap-3 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              Java
            </div>
            <div>
              <div className="text-sm font-bold text-white">Java Full Stack</div>
              <div className="text-xs text-slate-400">Spring Boot • React • Microservices • AWS</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-black border border-white/10 rounded-2xl p-4 shadow-lg flex items-center gap-3 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              Py
            </div>
            <div>
              <div className="text-sm font-bold text-white">Python Full Stack</div>
              <div className="text-xs text-slate-400">Django • FastAPI • Celery • PostgreSQL</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-black border border-white/10 rounded-2xl p-4 shadow-lg flex items-center gap-3 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              DA
            </div>
            <div>
              <div className="text-sm font-bold text-white">Data Analytics & BI</div>
              <div className="text-xs text-slate-400">Advanced SQL • Power BI • Pandas • Tableau</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
