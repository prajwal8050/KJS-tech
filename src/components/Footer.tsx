import React from 'react';
import { ASSETS } from '../assets/imagesMap';
import { useMedia } from '../context/MediaContext';
import { Phone, Mail, MapPin, Heart, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: (courseId?: string) => void;
  onOpenNetlifyGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenNetlifyGuide }) => {
  const { ceo } = useMedia();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] text-slate-400 text-xs border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/15 bg-[#0E1217] flex items-center justify-center">
                <img
                  src={ASSETS.logo}
                  alt="KJS Technologies Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white font-['Space_Grotesk',sans-serif]">
                  KJS <span className="text-amber-500">Technologies</span>
                </span>
                <span className="text-[10px] block font-semibold text-slate-400 uppercase tracking-widest">
                  Software Solutions & Coaching Centre
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering the next generation of engineers with job-ready training in Java Full Stack, Python Development, and Data Analytics, while delivering enterprise software solutions to global businesses.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenNetlifyGuide}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer text-[11px] font-semibold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Netlify Deploy Ready</span>
              </button>
              <button
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors cursor-pointer text-[11px] font-semibold"
              >
                <span>Free Demo Session</span>
              </button>
            </div>
          </div>

          {/* Col 2: Coaching Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Flagship Programs
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenInquiry('java-full-stack')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Java Full Stack (Spring Boot + React)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry('python-full-stack')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Python Full Stack (Django + FastAPI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry('data-analyst')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Data Analyst & BI (SQL + Power BI)
                </button>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Weekend Professional Batches
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Classroom vs Online Options
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Enterprise Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Company Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Custom Enterprise Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Cloud & Full-Stack Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Data Engineering & Pipelines
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Hire Trained Developers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Corporate Team Upskilling
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Contacts & Leadership */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Direct Contact
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1 mb-2">
                <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider">Leadership Desk</span>
                <span className="text-white font-bold block text-xs">{ceo.name}, <span className="text-amber-400 font-normal">{ceo.qualification}</span></span>
                <span className="text-[11px] text-slate-400 block">{ceo.role}, {ceo.organization}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+918050070508" className="hover:text-amber-400 text-slate-200 transition-colors font-medium">
                  +91 80500 70508
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:prajwalgowd88@gmail.com" className="hover:text-amber-400 text-slate-200 transition-colors break-all">
                  prajwalgowd88@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Tech Corridor, Outer Ring Road, Bangalore - 560103</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} KJS Technologies. All Rights Reserved. Built for high performance & Netlify deployment.
          </div>

          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 Certified Coaching Center</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
