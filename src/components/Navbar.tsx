import React, { useState, useEffect } from 'react';
import { ASSETS } from '../assets/imagesMap';
import { Menu, X, Phone, Mail, Sparkles, BookOpen, Laptop, Award, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (courseId?: string) => void;
  onOpenNetlifyGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenNetlifyGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Courses', href: '#courses', icon: BookOpen },
    { label: 'Services', href: '#services', icon: Laptop },
    { label: 'Leadership', href: '#leadership', icon: Award },
    { label: 'Why KJS', href: '#why-us', icon: Sparkles },
    { label: 'Placements', href: '#placements', icon: Award },
    { label: 'FAQ', href: '#faq', icon: HelpCircle },
    { label: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification Strip */}
      <div className="bg-[#07080A] text-slate-400 text-xs sm:text-sm py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse">
              Admissions Open
            </span>
            <span className="text-slate-300">Upcoming Batches Starting Monday: Java Full Stack • Python • Data Analyst</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+918050070508" className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Helpline: +91 80500 70508</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              onClick={onOpenNetlifyGuide}
              className="hidden sm:inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
              title="Netlify Deployment Guide"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Netlify Ready Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0C10]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
            : 'bg-[#0A0C10] border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-amber-500/10 border border-white/15 bg-slate-900 group-hover:scale-105 transition-transform">
              <img
                src={ASSETS.logo}
                alt="KJS Technologies Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-['Space_Grotesk',sans-serif] group-hover:text-amber-400 transition-colors">
                KJS <span className="text-amber-500 font-bold">Technologies</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500/90 font-semibold mt-0.5">
                Software & Elite Academy
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              Course Brochure
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer hover:shadow-amber-500/30"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenInquiry()}
              className="sm:hidden px-3 py-1.5 rounded-full text-xs font-bold text-black bg-amber-500"
            >
              Demo Class
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0A0C10] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-amber-400 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-amber-500" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-2.5 rounded-full text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 text-center"
              >
                Book Free Demo Session
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNetlifyGuide();
                }}
                className="w-full py-2 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 text-center flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Netlify Deployment Steps</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
