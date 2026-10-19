import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { faqData, businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function FAQSection() {
  // Start with first 3 FAQs expanded so users immediately see answers on desktop
  const [openIndices, setOpenIndices] = useState([0, 1, 2]);

  const toggle = (idx) => {
    setOpenIndices(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Full-Width Desktop-Friendly Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="ref-section-tag">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-[#0C2340] leading-tight mt-2">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-jakarta mt-3 max-w-2xl">
              Everything you need to know about booking our taxi service, outstation cabs, and airport transfers in Kakinada.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap shrink-0">
            <a
              href={`tel:+91${businessInfo.phone}`}
              className="btn-call-now-pill"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call 24/7: +91 {businessInfo.phone}</span>
            </a>

            <a
              href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I have a query regarding cab booking.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-pill"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Query</span>
            </a>
          </div>
        </div>

        {/* 3-Column FAQ Cards Grid (Minimum 3 in a row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {faqData.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isOpen
                    ? 'bg-white border-amber-400 shadow-xl shadow-amber-400/10'
                    : 'bg-[#FAF9F6] border-slate-200 hover:border-amber-300 hover:bg-white hover:shadow-md'
                }`}
              >
                <div>
                  {/* Card Header with Question & Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-start justify-between text-left gap-3 group"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-amber-400/15 text-amber-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="font-outfit font-extrabold text-base text-[#0C2340] group-hover:text-amber-600 transition-colors leading-snug">
                        {item.q}
                      </span>
                    </div>

                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-gold-gradient text-navy-950 shadow-gold-glow rotate-180'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-gold-gradient group-hover:text-navy-950'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Answer Content */}
                  {isOpen && (
                    <div className="pt-3.5 mt-3.5 border-t border-slate-100 text-slate-600 text-xs sm:text-sm font-jakarta leading-relaxed animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>

                <div className="pt-3 mt-3 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Verified Answer
                  </span>
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="text-amber-600 hover:underline cursor-pointer"
                  >
                    {isOpen ? 'Show less' : 'Read answer'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
