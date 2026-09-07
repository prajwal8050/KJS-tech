import React from 'react';
import { ASSETS } from '../assets/imagesMap';
import { Code, CheckCircle2, Award, Users, MonitorCheck, Sparkles, BookOpen } from 'lucide-react';

interface WhyChooseUsProps {
  onBookDemo: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookDemo }) => {
  const pillars = [
    {
      title: 'Real-Time Industry Capstone Projects',
      description: 'You will build live microservices, async FastAPI services, and BI dashboards that you deploy to real cloud servers (AWS, Docker).',
      icon: Code,
      badge: 'Portfolio Ready'
    },
    {
      title: 'Dedicated 1-on-1 Mentor Code Reviews',
      description: 'Get your code reviewed line-by-line by senior developers from KJS Technologies software wing. Learn clean code, SOLID principles, and design patterns.',
      icon: MonitorCheck,
      badge: 'Code Quality'
    },
    {
      title: 'High-Tech Offline Lab & Online Classrooms',
      description: 'Fully equipped development workstations with gigabit internet, dual screens, and in-person instructors ready to untangle bugs in real time.',
      icon: Users,
      badge: 'Lab Access'
    },
    {
      title: '100% Placement Cell & Mock Interviews',
      description: 'ATS-optimized resume building, LinkedIn profile overhaul, behavioral HR training, and recurring technical mock rounds until you land an offer.',
      icon: Award,
      badge: 'Career Support'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#0A0C10] text-[#F3F4F6] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The KJS Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
            Why Students & Working Professionals Choose KJS Technologies
          </h2>
          <p className="text-base text-slate-400">
            We don't teach rote theory. Our training is structured like an actual software engineering internship from day one.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Learning Lab Image Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 group">
              <img
                src={ASSETS.learningLab}
                alt="KJS Technologies High-Tech Classroom & Coding Lab"
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A0C10]/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  KJS Technologies Interactive Campus & Lab
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  Individual Workstations • Unlimited Wi-Fi • Dedicated Mentor Desk
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-gradient-to-br from-slate-900 to-black p-3.5 rounded-2xl border border-white/10">
                <div className="text-xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">98%</div>
                <div className="text-[11px] text-slate-400 font-medium">Placement Rate</div>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-black p-3.5 rounded-2xl border border-white/10">
                <div className="text-xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">200+</div>
                <div className="text-[11px] text-slate-400 font-medium">Hiring Drives</div>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-black p-3.5 rounded-2xl border border-white/10">
                <div className="text-xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">15+ LPA</div>
                <div className="text-[11px] text-slate-400 font-medium">Highest Package</div>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars List */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-900 to-black rounded-2xl p-5 border border-white/10 hover:border-amber-500/40 hover:shadow-xl transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">
                        {pillar.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/5 text-amber-400 border border-white/10">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={onBookDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-black" />
                <span>Experience Our Lab - Book Free Trial Class</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
