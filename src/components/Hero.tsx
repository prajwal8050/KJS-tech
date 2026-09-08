import React, { useState, useEffect } from 'react';
import { ASSETS } from '../assets/imagesMap';
import { useMedia } from '../context/MediaContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Users, 
  Briefcase, 
  Code2, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  TrendingUp, 
  Laptop, 
  Flame, 
  Award,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Building2,
  MapPin
} from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (courseId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const { heroSlides } = useMedia();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const coachingCentreSlides = heroSlides && heroSlides.length > 0 ? heroSlides : [
    {
      id: 'seminar-lab',
      image: ASSETS.campusSeminarLab,
      title: 'High-Tech Coding Lab & Seminar Hall',
      subtitle: 'Air-conditioned development arena with multi-screen setups for live code architecture',
      tag: 'Main Coaching Floor',
      stat: '100+ Workstations',
      location: 'KJS Bangalore Campus',
    }
  ];

  const activeIndex = currentSlide >= coachingCentreSlides.length ? 0 : currentSlide;

  // Auto-sliding effect
  useEffect(() => {
    if (!isPlaying || isHovered || coachingCentreSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coachingCentreSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, coachingCentreSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coachingCentreSlides.length) % coachingCentreSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coachingCentreSlides.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#07090E] text-[#F3F4F6] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/10">
      {/* Background Ambient Glowing Accents */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-amber-500/15 via-orange-600/10 to-emerald-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Cohort Announcement Banner */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 p-3 sm:px-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-white/5 to-transparent border border-amber-500/20 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
              Admissions Open for New Cohort:
            </span>
            <span className="text-xs sm:text-sm text-amber-400 font-semibold hidden md:inline">
              Java Full Stack • Python Automation • Power BI Analytics
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              Only 7 Seats Remaining
            </span>
            <button
              onClick={() => onOpenInquiry()}
              className="text-white hover:text-amber-400 font-bold underline underline-offset-4 cursor-pointer"
            >
              Reserve Seat &rarr;
            </button>
          </div>
        </div>

        {/* Main 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Impact Statement */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Software Engineering & Coaching Center</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] font-['Space_Grotesk',sans-serif]">
              Where Ambitious Students Turn Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400">
                Top-Tier Software Engineers.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Skip generic video tutorials. At <strong className="text-white font-semibold">KJS Technologies</strong>, learn directly from experienced software architects in state-of-the-art offline labs and interactive live cohorts with 100% placement execution.
            </p>

            {/* Bullet Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Spring Boot & Python Microservices</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Advanced SQL & Enterprise Power BI</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>M.Tech Mentorship & Daily Code Review</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>200+ Tier-1 & Startup Hiring Drives</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-extrabold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-all cursor-pointer text-sm sm:text-base"
              >
                <span>Book Free Demo & Campus Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 transition-all text-sm sm:text-base cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>View Full Curriculums</span>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-slate-400 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9/5 Rating</span>
                <span className="text-slate-400">(1,200+ Placed Students)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-slate-300">ISO 9001:2015 Certified Center</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sliding Photos of the Coaching Centre */}
          <div className="lg:col-span-6 relative">
            <div 
              className="relative mx-auto max-w-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              
              {/* Slider Header Control Bar */}
              <div className="flex items-center justify-between gap-3 p-2 px-3 rounded-2xl bg-white/5 border border-white/10 mb-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    KJS Coaching Center Tour
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    ({activeIndex + 1} of {coachingCentreSlides.length})
                  </span>
                </div>

                {/* Play/Pause & Arrow Navigation Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer text-xs flex items-center gap-1"
                    title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                    <span className="text-[10px] font-semibold hidden sm:inline">
                      {isPlaying ? 'Auto' : 'Paused'}
                    </span>
                  </button>

                  <button
                    onClick={handlePrevSlide}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-amber-500 hover:text-black text-slate-300 border border-white/10 transition-all cursor-pointer"
                    title="Previous coaching center photo"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-amber-500 hover:text-black text-slate-300 border border-white/10 transition-all cursor-pointer"
                    title="Next coaching center photo"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Sliding Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group">
                
                {/* Photo Viewer with cross-fade */}
                <div className="relative h-80 sm:h-[430px] w-full overflow-hidden">
                  {coachingCentreSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={`${slide.title} at KJS Technologies Coaching Centre`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/35 to-transparent pointer-events-none z-10" />
                </div>

                {/* Top Floating Badge on Image */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-[#07090E]/85 backdrop-blur-md border border-white/15 text-xs font-bold text-amber-400 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {coachingCentreSlides[activeIndex]?.tag || 'Coaching Facility'}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-slate-300 hidden sm:flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {coachingCentreSlides[activeIndex]?.location || 'Bangalore Campus'}
                  </span>
                </div>

                {/* Top Right Stat Pill */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black shadow-lg">
                    {coachingCentreSlides[activeIndex]?.stat || 'Modern Lab'}
                  </span>
                </div>

                {/* Slide Left & Right Clickable Click Zones */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-lg"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-lg"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Informative Card with Slide Caption */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-4 rounded-2xl bg-[#07090E]/95 backdrop-blur-md border border-white/15 text-white space-y-1.5 z-20 shadow-2xl">
                  
                  {/* Progress Line Bar */}
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mb-2">
                    <div 
                      key={activeIndex}
                      className={`h-full bg-gradient-to-r from-amber-400 to-amber-500 ${isPlaying && !isHovered ? 'animate-[progress_4.5s_linear]' : 'w-full'}`}
                      style={{
                        animationDuration: '4.5s',
                        animationTimingFunction: 'linear'
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {coachingCentreSlides[activeIndex]?.title || 'KJS Coaching Facility'}
                    </h2>
                    <span className="text-[11px] font-bold text-amber-400 whitespace-nowrap">
                      Slide 0{activeIndex + 1} / 0{coachingCentreSlides.length}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2">
                    {coachingCentreSlides[activeIndex]?.subtitle}
                  </p>

                  <div className="pt-1.5 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Free 1-Day In-Person Pass Available
                    </span>
                    <button
                      onClick={() => onOpenInquiry()}
                      className="text-amber-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      Visit Campus &rarr;
                    </button>
                  </div>
                </div>

              </div>

              {/* Coaching Centre Photo Thumbnail Strip */}
              <div className="mt-3 grid grid-cols-5 gap-2">
                {coachingCentreSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-video border transition-all cursor-pointer group ${
                      idx === activeIndex
                        ? 'border-amber-400 ring-2 ring-amber-400/30 scale-102'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                    title={slide.title}
                    aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-white drop-shadow-md">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Floating Stat Widget 1: Alumni Placements */}
              <div className="hidden sm:flex absolute -bottom-7 -left-5 bg-[#0C0F17]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 items-center gap-3.5 z-30">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-black text-white font-['Space_Grotesk',sans-serif]">₹18.5 LPA</div>
                  <div className="text-xs text-slate-400 font-medium">Highest Alumni Package</div>
                </div>
              </div>

              {/* Floating Stat Widget 2: Placement Rate */}
              <div className="hidden sm:flex absolute -top-5 -right-4 bg-[#0C0F17]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 items-center gap-3.5 z-30">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-black text-white font-['Space_Grotesk',sans-serif]">100%</div>
                  <div className="text-xs text-slate-400 font-medium">Job Placement Support</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlighted 3-Program Quick Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            onClick={() => onOpenInquiry('java-full-stack')}
            className="group cursor-pointer bg-gradient-to-br from-[#0F1420] to-[#07090E] border border-white/10 hover:border-amber-500/50 rounded-2xl p-5 shadow-lg transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Most In-Demand
              </span>
              <span className="text-xs font-semibold text-slate-400">4-6 Months</span>
            </div>
            <h2 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
              Java Full Stack Development
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Spring Boot • Microservices • React.js • AWS Cloud • Docker
            </p>
          </div>

          <div 
            onClick={() => onOpenInquiry('python-full-stack')}
            className="group cursor-pointer bg-gradient-to-br from-[#0F1420] to-[#07090E] border border-white/10 hover:border-amber-500/50 rounded-2xl p-5 shadow-lg transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                High Growth
              </span>
              <span className="text-xs font-semibold text-slate-400">4-5 Months</span>
            </div>
            <h2 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
              Python Full Stack & Automation
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Django • FastAPI • PostgreSQL • Automated Testing • Celery
            </p>
          </div>

          <div 
            onClick={() => onOpenInquiry('data-analytics')}
            className="group cursor-pointer bg-gradient-to-br from-[#0F1420] to-[#07090E] border border-white/10 hover:border-amber-500/50 rounded-2xl p-5 shadow-lg transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Fast-Track Career
              </span>
              <span className="text-xs font-semibold text-slate-400">3-4 Months</span>
            </div>
            <h2 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
              Data Analyst & Business Intelligence
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Advanced SQL • Power BI Dashboards • Python (Pandas) • Tableau
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
