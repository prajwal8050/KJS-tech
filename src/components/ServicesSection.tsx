import React from 'react';
import { TECH_SERVICES } from '../data/coursesData';
import { Layers, Cloud, PieChart, Users, ArrowUpRight, CheckCircle } from 'lucide-react';

interface ServicesSectionProps {
  onContactServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactServices }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-amber-400" />;
      case 'PieChart':
        return <PieChart className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      default:
        return <Layers className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#07080A] text-[#F3F4F6] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <span>KJS Enterprise Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
              Software Development & Corporate Tech Services
            </h2>
            <p className="text-base text-slate-400">
              Beyond coaching, <strong className="text-white">KJS Technologies</strong> builds high-performance software systems, 
              cloud native platforms, and data pipelines for startups and growing enterprises worldwide.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onContactServices}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Consult Our Engineering Team</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-slate-900 to-black rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-base font-bold text-white">
              Need Dedicated Java, Python, or Data Analytics Developers?
            </h4>
            <p className="text-xs text-slate-400">
              Hire pre-screened developers trained directly in our incubation labs, ready for immediate project deployment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onContactServices}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              Hire From KJS
            </button>
            <button
              onClick={onContactServices}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              Request Tech Proposal
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
