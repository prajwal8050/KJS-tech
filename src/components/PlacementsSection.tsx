import React, { useState } from 'react';
import { TESTIMONIALS, HIRING_PARTNERS } from '../data/coursesData';
import { ASSETS } from '../assets/imagesMap';
import { 
  Star, 
  Quote, 
  Award, 
  CheckCircle, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  Briefcase,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const PlacementsSection: React.FC = () => {
  const [activeCourseFilter, setActiveCourseFilter] = useState<'all' | 'java' | 'python' | 'data'>('all');

  const filteredTestimonials = TESTIMONIALS.filter(t => {
    if (activeCourseFilter === 'java') return t.course.toLowerCase().includes('java');
    if (activeCourseFilter === 'python') return t.course.toLowerCase().includes('python');
    if (activeCourseFilter === 'data') return t.course.toLowerCase().includes('data') || t.course.toLowerCase().includes('bi');
    return true;
  });

  return (
    <section id="placements" className="py-20 sm:py-28 bg-[#07090E] text-[#F3F4F6] border-b border-white/10 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            <span>Placement Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
            Real Students. Real Career Breakthroughs.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            From tier-3 engineering colleges and non-tech backgrounds to high-paying software developer and business analyst roles.
          </p>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">₹18.5 LPA</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Highest Package</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-['Space_Grotesk',sans-serif]">₹6.8 LPA</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Average Freshers CTC</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-blue-400 font-['Space_Grotesk',sans-serif]">200+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Hiring Tech Companies</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-purple-400 font-['Space_Grotesk',sans-serif]">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Placement Assistance</div>
            </div>
          </div>
        </div>

        {/* Featured Student Spotlight Banner */}
        <div className="mb-16 bg-gradient-to-br from-[#101626] via-[#0A0D14] to-black rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Student Photo with Offer Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-4/3 sm:aspect-auto sm:h-80 group">
                <img
                  src={ASSETS.studentPlaced}
                  alt="KJS Technologies placed student holding official employment offer letter"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Offer Letter Verified
                  </span>
                  <span className="text-white font-mono font-bold">Bangalore IT Park</span>
                </div>
              </div>
            </div>

            {/* Spotlight Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Featured Placement Story</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk',sans-serif]">
                "From Zero Coding Confidence to a Full Stack Engineer at an Enterprise Product Firm"
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                "Before joining KJS Technologies, I was intimidated by complex microservices and system design interviews. The mentor code reviews, hands-on Spring Boot & React capstones, and daily technical mock rounds gave me the exact confidence I needed. I cracked 3 interviews in a single month!"
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <div className="font-extrabold text-white text-base">Pooja N.</div>
                  <div className="text-xs text-slate-400">Software Development Engineer (SDE-1)</div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">Java Full Stack Batch Alumni</div>
                </div>

                <div className="text-right bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">CTC Package</div>
                  <div className="text-xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">
                    ₹9.50 LPA
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Category Tabs for Testimonials */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCourseFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCourseFilter === 'all'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            All Graduate Reviews
          </button>
          <button
            onClick={() => setActiveCourseFilter('java')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCourseFilter === 'java'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Java Full Stack
          </button>
          <button
            onClick={() => setActiveCourseFilter('python')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCourseFilter === 'python'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Python & Automation
          </button>
          <button
            onClick={() => setActiveCourseFilter('data')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCourseFilter === 'data'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Data Analytics & BI
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gradient-to-br from-[#101422] to-[#07090E] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/40 shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-white/5 absolute top-6 right-6 pointer-events-none group-hover:text-amber-500/10 transition-colors" />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {t.badge}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed relative z-10">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-base">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role} • <span className="text-slate-200 font-semibold">{t.company}</span></div>
                  <div className="text-[11px] text-amber-400 font-semibold mt-0.5">{t.course}</div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-slate-400 font-medium uppercase">Offered CTC</div>
                  <div className="text-lg font-black text-amber-400 font-['Space_Grotesk',sans-serif]">
                    {t.package}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Ticker Banner */}
        <div className="mt-16 bg-gradient-to-br from-[#101524] via-[#0B0E18] to-black rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <Building2 className="w-4 h-4 text-amber-500" />
              <span>Where KJS Technologies Alumni Work</span>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Over 200+ partner companies conduct campus and direct referral hiring drives for our certified students every month.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {HIRING_PARTNERS.map((partner) => (
              <div
                key={partner}
                className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold text-xs sm:text-sm tracking-tight transition-all flex items-center gap-2 shadow-xs hover:border-amber-500/30"
              >
                <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
