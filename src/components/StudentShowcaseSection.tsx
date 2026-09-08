import React, { useState } from 'react';
import { ASSETS } from '../assets/imagesMap';
import { 
  Sparkles, 
  Users, 
  Laptop, 
  Terminal, 
  Award, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ArrowRight,
  Code2,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface StudentShowcaseSectionProps {
  onBookVisit: () => void;
}

export const StudentShowcaseSection: React.FC<StudentShowcaseSectionProps> = ({ onBookVisit }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'labs' | 'lectures' | 'placements'>('all');

  const galleryItems = [
    {
      id: 'collab',
      category: 'labs',
      image: ASSETS.studentsCollaborating,
      title: 'Peer Sprints & Full-Stack Collaboration',
      description: 'Students collaborate on end-to-end distributed applications, mimicking real Silicon Valley and Bangalore sprint standups.',
      tag: 'Team Projects',
      stat: '5+ Capstones Built'
    },
    {
      id: 'lectures',
      category: 'lectures',
      image: ASSETS.classroomTech,
      title: 'Architectural System Design Masterclasses',
      description: 'Senior engineering leads break down distributed systems, microservices, and database indexing on interactive displays.',
      tag: 'M.Tech Led Guidance',
      stat: 'Daily 2-Hr Live Classes'
    },
    {
      id: 'workstation',
      category: 'labs',
      image: ASSETS.studentWorkstation,
      title: 'High-Tech Personal Developer Workstations',
      description: 'Ultra-fast workstations with dual monitors, gigabit ethernet, and dedicated mentor desks for instant doubt clearance.',
      tag: 'Deep Focus Lab',
      stat: 'Unlimited Lab Hours'
    },
    {
      id: 'placement',
      category: 'placements',
      image: ASSETS.studentPlaced,
      title: 'The Ultimate Milestone: Offer Letter Day',
      description: 'Celebrating career transformations as graduates accept lucrative software engineering offers from top tech companies.',
      tag: '100% Career Success',
      stat: '₹6.5 - ₹18.5 LPA'
    }
  ];

  const filteredGallery = galleryItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const dailySchedule = [
    {
      time: '09:30 AM - 11:30 AM',
      title: 'Deep Architectural Concept Session',
      desc: 'Deconstructing core Java/Python internals, Spring Boot REST layers, or Advanced SQL queries with real-world scenarios.',
      icon: Laptop
    },
    {
      time: '11:30 AM - 01:30 PM',
      title: 'Hands-on Production Code Sprint',
      desc: 'Writing live code, implementing test-driven modules, building Docker containers, and connecting database schemas.',
      icon: Terminal
    },
    {
      time: '02:30 PM - 04:00 PM',
      title: '1-on-1 Mentor Code Review & Debugging',
      desc: 'Senior tech leads review your pull requests, correct bad patterns, and guide you on clean architecture principles.',
      icon: Cpu
    },
    {
      time: '04:00 PM - 05:30 PM',
      title: 'Mock Technical Interview & DSA Challenge',
      desc: 'Live whiteboard algorithm problems, system design drills, and behavioral interview simulations.',
      icon: Award
    }
  ];

  return (
    <section id="student-life" className="py-20 sm:py-28 bg-[#0A0D14] text-[#F3F4F6] border-b border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Campus Culture & Student Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
            Step Inside the KJS Innovation Campus
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Our campus is designed like an active software engineering floor. No boring classrooms — only real workstations, high-energy collaboration, and passionate mentors.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              All Experiences
            </button>
            <button
              onClick={() => setActiveTab('labs')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'labs'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              Coding Labs & Sprints
            </button>
            <button
              onClick={() => setActiveTab('lectures')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'lectures'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              Architectural Masterclasses
            </button>
            <button
              onClick={() => setActiveTab('placements')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'placements'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              Placement Celebrations
            </button>
          </div>
        </div>

        {/* Dynamic Multi-Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#101420] to-[#07090E] border border-white/10 hover:border-amber-500/50 shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Photo Viewport */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-bold text-amber-400">
                    {item.tag}
                  </span>
                </div>

                {/* Stat Pill */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-extrabold shadow-lg">
                    {item.stat}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Campus Environment
                  </span>
                  <button
                    onClick={onBookVisit}
                    className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tour this space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Schedule Walkthrough: "A Day in the Life of a KJS Student" */}
        <div className="mt-20 bg-gradient-to-br from-[#101524] via-[#0B0F19] to-[#06080E] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Structured Routine For Maximum Output</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk',sans-serif]">
              A Day in the Life of a KJS Technologies Student
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              How we transform beginners into confident enterprise engineers in 4 to 6 months of disciplined, hands-on immersion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailySchedule.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-black/40 rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between relative group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-bold text-amber-400/90 tracking-wide font-mono">
                        STEP 0{idx + 1}
                      </span>
                    </div>
                    
                    <div className="text-xs font-semibold text-slate-400 font-mono">
                      {item.time}
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Card */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-base font-bold text-white">
                Want to spend a day at our campus before taking admission?
              </div>
              <div className="text-xs text-slate-400">
                Attend a 100% free live masterclass session and inspect our lab facilities first-hand.
              </div>
            </div>

            <button
              onClick={onBookVisit}
              className="px-6 py-3.5 rounded-full font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap text-sm"
            >
              Book Free 1-Day Pass & Lab Demo
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
