import React from 'react';
import { MapPin, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { kakinadaLocalitiesData, createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function LocalCoverageSection({ onOpenBooking }) {
  return (
    <section id="local-coverage" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="ref-section-tag">Hyper-Local 24/7 Coverage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight">
            Doorstep Taxi Pickup Across <br />
            <span className="text-[#FF5B00]">All Kakinada Localities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed">
            Need a cab at Bhanugudi Junction, JNTU, the Railway Station, or the Port? We have vehicles stationed across Kakinada for swift 10–15 minute doorstep arrivals.
          </p>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {kakinadaLocalitiesData.map((loc, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 hover:border-orange-300 hover:bg-orange-50/20 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-[#FF5B00]">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider font-jakarta">
                      {loc.tag}
                    </span>
                  </div>
                </div>
                <h3 className="font-outfit font-bold text-slate-900 text-base group-hover:text-[#FF5B00] transition-colors">
                  {loc.name}
                </h3>
                <p className="text-xs text-slate-600 font-jakarta mt-1.5 leading-relaxed">
                  {loc.desc}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#FF5B00]">
                <span>Doorstep Cab Ready</span>
                <a
                  href={createWhatsAppUrl(`Hi Sri Prakash Travels, I need a taxi pickup at ${loc.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 text-slate-700 hover:text-[#FF5B00]"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Local Area Callout Banner */}
        <div className="bg-[#0B0F17] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider block">
              Anywhere in East Godavari
            </span>
            <h3 className="font-outfit font-extrabold text-2xl text-white">
              Traveling From a Village or Town Near Kakinada?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-jakarta max-w-2xl">
              We also service Samarlakota, Peddapuram, Pithapuram, Gollaprolu, Annavaram, Draksharamam, Ramachandrapuram, Yanam, and Tuni with punctual round-the-clock cabs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:+91${businessInfo.phone}`}
              className="ref-btn-primary group"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call +91 {businessInfo.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
