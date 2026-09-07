import React, { useState } from 'react';
import { COURSES } from '../data/coursesData';
import { Course } from '../types';
import { 
  Coffee, 
  Terminal, 
  BarChart3, 
  Clock, 
  Laptop, 
  Sparkles, 
  ChevronRight, 
  Check, 
  Calendar, 
  Star,
  FileText,
  Briefcase
} from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourseForSyllabus: (course: Course) => void;
  onOpenInquiry: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourseForSyllabus,
  onOpenInquiry,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'java' | 'python' | 'data'>('all');

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-amber-600" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-blue-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-600" />;
    }
  };

  const filteredCourses = COURSES.filter((c) => {
    if (selectedFilter === 'java') return c.id.includes('java');
    if (selectedFilter === 'python') return c.id.includes('python');
    if (selectedFilter === 'data') return c.id.includes('data');
    return true;
  });

  return (
    <section id="courses" className="py-16 sm:py-24 bg-[#07080A] text-[#F3F4F6] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <span>Career-Focused Coaching Centre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
            Industry-Approved Tech Curriculums
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Crafted and mentored by senior software architects at KJS Technologies. Built to take you from foundational syntax to cracking senior engineering and analytics interviews.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              All Programs ({COURSES.length})
            </button>
            <button
              onClick={() => setSelectedFilter('java')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'java'
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              Java Full Stack
            </button>
            <button
              onClick={() => setSelectedFilter('python')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'python'
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              Python Full Stack
            </button>
            <button
              onClick={() => setSelectedFilter('data')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'data'
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              Data Analyst & BI
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            return (
              <div
                key={course.id}
                className="flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-2xl border border-white/10 hover:border-amber-500/40 shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Top Banner / Accent */}
                <div className={`p-6 border-b border-white/10 bg-gradient-to-r ${course.gradient} text-white relative`}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 rounded-xl bg-black/30 backdrop-blur-md flex items-center justify-center p-2.5 border border-white/15 shadow-inner">
                      {getCourseIcon(course.iconName)}
                    </div>
                    {course.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-black shadow-lg shadow-amber-500/20">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-4 font-['Space_Grotesk',sans-serif] tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-white/90 text-xs mt-1 leading-relaxed line-clamp-2">
                    {course.tagline}
                  </p>

                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/20 text-xs text-white/90">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>{course.duration}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Laptop className="w-3.5 h-3.5 text-amber-300" />
                      <span>Classroom & Online</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Rating & Batch Timing */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                      <div className="flex items-center gap-1 text-white font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-slate-400 font-normal">({course.reviewCount} reviews)</span>
                      </div>
                      <span className="text-amber-400 font-medium bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                        {course.hours}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-xs font-semibold text-amber-400 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                      <Calendar className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{course.nextBatch}</span>
                    </div>

                    {/* Tools / Tech Stack Pills */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Technologies & Tools Covered
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.tools.slice(0, 7).map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 bg-white/5 text-slate-300 text-[11px] font-semibold rounded-lg border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                        {course.tools.length > 7 && (
                          <span className="px-2.5 py-1 bg-white/5 text-slate-400 text-[11px] font-semibold rounded-lg border border-white/10">
                            +{course.tools.length - 7} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Course Highlights
                      </span>
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Target Roles */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Career Roles
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300">
                        <Briefcase className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                        <span className="truncate">{course.careerRoles.slice(0, 2).join(' • ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <button
                      onClick={() => onSelectCourseForSyllabus(course)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span>View Full Syllabus ({course.syllabus.length} Modules)</span>
                    </button>

                    <button
                      onClick={() => onOpenInquiry(course.id)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                    >
                      <span>Enroll / Get Syllabus PDF</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Coaching Perks Bar */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-black text-white rounded-2xl p-8 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="text-center md:text-left space-y-1">
              <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">
                100% Practical
              </div>
              <p className="text-xs text-slate-400">
                Daily live coding assignments with code reviews on GitHub
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 text-center md:text-left space-y-1">
              <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">
                1:1 Mentorship
              </div>
              <p className="text-xs text-slate-400">
                Personalized doubt clearance by working tech leads
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 text-center md:text-left space-y-1">
              <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">
                Mock Interviews
              </div>
              <p className="text-xs text-slate-400">
                Weekly technical & HR rounds until final offer letter
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 text-center md:text-left space-y-1">
              <div className="text-2xl font-black text-amber-400 font-['Space_Grotesk',sans-serif]">
                Hybrid Flexibility
              </div>
              <p className="text-xs text-slate-400">
                Switch between offline classroom lab and live online sessions anytime
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
