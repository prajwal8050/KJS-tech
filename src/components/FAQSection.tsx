import React, { useState } from 'react';
import { FAQS } from '../data/coursesData';
import { ChevronDown, ChevronUp, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  onAskQuestion: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAskQuestion }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#07080A] text-[#F3F4F6] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
            Have Questions About Batches & Placements?
          </h2>
          <p className="text-base text-slate-400">
            Everything you need to know about our Java Full Stack, Python, and Data Analyst programs.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 bg-gradient-to-br from-slate-900/80 to-black"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 pt-3 bg-black/40 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-10 p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-sm font-bold text-white">
              Still have questions or need custom batch timings?
            </h4>
            <p className="text-xs text-slate-400">
              Speak directly with an instructor or academic counselor today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hello%20KJS%20Technologies,%20I%20want%20to%20know%20about%20your%20courses"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <button
              onClick={onAskQuestion}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-black" />
              <span>Call Us</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
