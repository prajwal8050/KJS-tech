import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [quickMsg, setQuickMsg] = useState({ name: '', phone: '', note: '' });
  const [sent, setSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMsg.name || !quickMsg.phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setQuickMsg({ name: '', phone: '', note: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0A0C10] text-[#F3F4F6] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <span>Get in Touch with KJS Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
            Visit Our Coaching Campus & Software Studio
          </h2>
          <p className="text-base text-slate-400">
            Walk in for a live classroom tour, meet the mentors, and get a personalized career assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-2xl p-6 flex items-start gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Campus & Corporate Headquarters</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  KJS Technologies & Learning Academy<br />
                  #42, 2nd Floor, Outer Ring Road, Tech Corridor,<br />
                  Near Innovation Tech Park, Bangalore, Karnataka - 560103
                </p>
                <div className="text-xs text-amber-400 pt-1 font-semibold">
                  Landmark: 200m from Central Metro Station
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-2xl p-5 flex items-start gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Admissions Helpline</h5>
                  <a href="tel:+919876543210" className="text-sm font-bold text-white hover:text-amber-400 transition-colors block mt-0.5">
                    +91 98765 43210
                  </a>
                  <a href="tel:+918765432109" className="text-xs text-slate-400 hover:text-amber-400 transition-colors block">
                    +91 87654 32109
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-2xl p-5 flex items-start gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Inquiries</h5>
                  <a href="mailto:info@kjstechnologies.com" className="text-sm font-bold text-white hover:text-amber-400 transition-colors block mt-0.5">
                    info@kjstechnologies.com
                  </a>
                  <a href="mailto:careers@kjstechnologies.com" className="text-xs text-slate-400 hover:text-amber-400 transition-colors block">
                    careers@kjstechnologies.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-2xl p-5 flex items-start gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Lab & Center Hours</h5>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Monday to Sunday: 7:00 AM – 9:30 PM (IST)
                </div>
                <div className="text-xs text-slate-400">
                  Weekend batch labs and live online support open on all Saturdays & Sundays.
                </div>
              </div>
            </div>

          </div>

          {/* Quick Callback Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h4 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <span>Request Instant Call Back</span>
            </h4>
            <p className="text-xs text-slate-400 mb-6">
              Drop your number and our academic mentor will call you back within 15 minutes to share syllabus PDFs and batch slots.
            </p>

            {sent ? (
              <div className="p-6 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl text-center space-y-2 animate-in zoom-in-95">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h5 className="text-sm font-bold text-emerald-200">Callback Request Received!</h5>
                <p className="text-xs text-emerald-300/80">
                  Our team is reviewing your inquiry and will reach out promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={quickMsg.name}
                    onChange={(e) => setQuickMsg({ ...quickMsg, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={quickMsg.phone}
                    onChange={(e) => setQuickMsg({ ...quickMsg, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Which course or service are you interested in?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Java Full Stack / Python / Data Analyst / Software Project"
                    value={quickMsg.note}
                    onChange={(e) => setQuickMsg({ ...quickMsg, note: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm mt-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Request Callback Now</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
