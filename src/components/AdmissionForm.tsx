import React, { useState, useEffect } from 'react';
import { InquiryFormData } from '../types';
import { X, CheckCircle2, Send, Calendar, Clock, Phone, Mail, Sparkles, BookOpen } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourseId?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  preselectedCourseId,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    course: preselectedCourseId || 'java-full-stack',
    mode: 'classroom',
    experienceLevel: 'fresher',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (preselectedCourseId) {
      setFormData((prev) => ({ ...prev, course: preselectedCourseId }));
    }
  }, [preselectedCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      return;
    }

    const newBookingId = 'KJS-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(newBookingId);

    // Persist locally
    const existing = JSON.parse(localStorage.getItem('kjs_inquiries') || '[]');
    existing.push({
      ...formData,
      bookingId: newBookingId,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('kjs_inquiries', JSON.stringify(existing));

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'java-full-stack',
      mode: 'classroom',
      experienceLevel: 'fresher',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-gradient-to-br from-slate-900 via-[#0E1217] to-black text-[#F3F4F6] rounded-2xl shadow-2xl border border-white/10 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-white/10 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" />
            <span>KJS Technologies Admissions</span>
          </div>
          <h3 className="text-2xl font-bold font-['Space_Grotesk',sans-serif]">
            Book Free Demo & Consultation
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            Connect directly with our senior instructors for Java, Python & Data Analytics.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Demo Session Requested!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your confirmation token is{' '}
                <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {bookingId}
                </span>.
              </p>
              <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-left text-xs text-slate-300 space-y-1.5">
                <div><strong className="text-white">Selected Course:</strong> {formData.course}</div>
                <div><strong className="text-white">Learning Mode:</strong> {formData.mode.toUpperCase()}</div>
                <div><strong className="text-white">Phone / WhatsApp:</strong> {formData.phone}</div>
                <div className="text-amber-400 font-semibold pt-1">
                  Our academic counselor will contact you via WhatsApp/call within 2 hours with the demo link and syllabus PDF.
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full text-xs transition-colors cursor-pointer shadow-lg shadow-amber-500/20"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Prajwal Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Select Program / Service *
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0F1318] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="java-full-stack" className="bg-slate-900 text-white">Java Full Stack Development (Spring Boot + React + AWS)</option>
                  <option value="python-full-stack" className="bg-slate-900 text-white">Python Full Stack & Automation (Django + FastAPI)</option>
                  <option value="data-analyst" className="bg-slate-900 text-white">Data Analyst & Business Intelligence (SQL + Power BI + Python)</option>
                  <option value="enterprise-software" className="bg-slate-900 text-white">Enterprise Software Services / Hiring Inquiries</option>
                </select>
              </div>

              {/* Learning Mode */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Preferred Training Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'classroom' })}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      formData.mode === 'classroom'
                        ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    Offline Lab
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'online' })}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      formData.mode === 'online'
                        ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    Live Online
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'weekend' })}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      formData.mode === 'weekend'
                        ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    Weekend Only
                  </button>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Your Current Background
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0F1318] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="fresher" className="bg-slate-900 text-white">Fresh Graduate / College Final Year (Any Stream)</option>
                  <option value="student" className="bg-slate-900 text-white">Currently Pursuing Degree (B.Tech, BCA, MCA, B.Sc)</option>
                  <option value="career_switch" className="bg-slate-900 text-white">Non-IT Professional looking to switch to IT</option>
                  <option value="working_pro" className="bg-slate-900 text-white">Working Software Professional (Upskilling)</option>
                </select>
              </div>

              {/* Optional message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Special Query / Comments (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about batch timings, fees, EMI options or syllabus details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Submit & Reserve Demo Seat</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Your details are 100% confidential. No spam calls.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
