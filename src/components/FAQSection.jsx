import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/travelData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Layout matching pinterest-bulk-6: Left Title, Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="ref-section-tag">FAQs</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight">
              Frequently asked <br />
              <span className="text-[#FF5B00]">questions</span>
            </h2>
            <p className="text-sm text-slate-600 font-jakarta leading-relaxed max-w-sm">
              Everything you need to know about booking our taxi service, outstation cabs, and airport transfers in Kakinada.
            </p>
          </div>

          {/* Right Column: Clean Accordion with + and - matching reference */}
          <div className="lg:col-span-8 divide-y divide-slate-200">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="font-outfit font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#FF5B00] transition-colors">
                      {item.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FF5B00] group-hover:text-white transition-colors flex items-center justify-center shrink-0 text-slate-700">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-slate-600 text-xs sm:text-sm font-jakarta leading-relaxed pr-8">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
