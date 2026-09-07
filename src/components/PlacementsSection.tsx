import React from 'react';
import { TESTIMONIALS, HIRING_PARTNERS } from '../data/coursesData';
import { Star, Quote, Award, CheckCircle, TrendingUp, Building2 } from 'lucide-react';

export const PlacementsSection: React.FC = () => {
  return (
    <section id="placements" className="py-16 sm:py-24 bg-[#0A0C10] text-[#F3F4F6] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
            <span>Proven Career Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
            Student Success Stories & Placements
          </h2>
          <p className="text-base text-slate-400">
            Hear directly from graduates of our Java Full Stack, Python, and Data Analyst programs who transformed their careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-gradient-to-br from-slate-900 to-black rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-amber-500/40 shadow-xl transition-all flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-white/5 absolute top-6 right-6 pointer-events-none" />

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

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role} • <span className="text-slate-300 font-medium">{t.company}</span></div>
                  <div className="text-[11px] text-amber-400 font-semibold mt-0.5">{t.course}</div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-medium">Package</div>
                  <div className="text-base font-extrabold text-amber-400 font-['Space_Grotesk',sans-serif]">
                    {t.package}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Ticker Banner */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-2xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center space-y-2 mb-6">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <Building2 className="w-4 h-4 text-amber-500" />
              <span>Where KJS Technologies Alumni Work</span>
            </div>
            <p className="text-sm text-slate-400">
              Our students are hired across top tier-1 IT corporations, consulting leaders, and funded product startups.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {HIRING_PARTNERS.map((partner) => (
              <div
                key={partner}
                className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold text-xs sm:text-sm tracking-tight transition-all flex items-center gap-2 shadow-xs"
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
