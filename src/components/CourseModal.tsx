import React, { useState } from 'react';
import { Course } from '../types';
import { X, Check, Clock, Calendar, Download, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!course) return null;

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-gradient-to-br from-slate-900 via-[#0A0C10] to-black text-[#F3F4F6] rounded-2xl shadow-2xl border border-white/10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 bg-gradient-to-r ${course.gradient} text-white relative shrink-0 border-b border-white/10`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md mb-2">
              Detailed Curriculum & Syllabus
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk',sans-serif]">
              {course.title}
            </h3>
            <p className="text-white/90 text-sm mt-1">
              {course.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-white/20 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{course.duration} ({course.hours})</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{course.nextBatch}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Quick Overview */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white font-['Space_Grotesk',sans-serif]">
              Course Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white font-['Space_Grotesk',sans-serif]">
              Tools & Technologies Mastered
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-white/5 text-slate-200 text-xs font-semibold rounded-lg border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Module-by-Module Accordion */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white font-['Space_Grotesk',sans-serif]">
                Detailed Module Breakdown ({course.syllabus.length} Core Modules)
              </h4>
              <span className="text-xs text-slate-400">Click a module to view topics</span>
            </div>

            <div className="space-y-3">
              {course.syllabus.map((mod) => {
                const isOpen = expandedModule === mod.moduleNumber;
                return (
                  <div
                    key={mod.moduleNumber}
                    className="border border-white/10 rounded-xl overflow-hidden transition-all bg-slate-900/60"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedModule(isOpen ? null : mod.moduleNumber)}
                      className="w-full flex items-center justify-between p-4 text-left font-semibold text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0">
                          {mod.moduleNumber}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-white">{mod.title}</div>
                          <div className="text-xs text-slate-400 font-normal">Duration: {mod.duration}</div>
                        </div>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-amber-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-3 bg-black/40 border-t border-white/10 space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {mod.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Learning Outcomes */}
          <div className="space-y-3 bg-amber-500/5 p-5 rounded-2xl border border-amber-500/20">
            <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>What You Will Be Able to Build</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              {course.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Placement & Certification Guarantee */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-black/40 border border-white/10 rounded-2xl gap-4 text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <div className="font-bold text-white text-sm">Industry Certificate of Completion</div>
                <div className="text-slate-400">Verifiable credential with project portfolio link for your LinkedIn profile.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-white/10 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <button
              onClick={handleDownloadBrochure}
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer py-1"
            >
              <Download className="w-4 h-4" />
              <span>Download Syllabus PDF (Curriculum Guide)</span>
            </button>
            {downloadSuccess && (
              <span className="block text-[11px] text-emerald-400 font-medium animate-in fade-in">
                ✓ Syllabus PDF generated! Contact counselor for batch slot confirmation.
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course.id);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Enroll / Book Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
