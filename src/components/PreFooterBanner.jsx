import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function PreFooterBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Banner matching pinterest-bulk-6 middle */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#040B17] via-[#08172C] to-[#0C2340] p-10 sm:p-16 text-center text-white border border-amber-400/20">
          {/* Subtle Car/Atmosphere Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight">
              Ready to book your ride?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-jakarta leading-relaxed">
              Browse our fleet, choose your pickup location and travel dates, and complete your cab booking quickly with clear fixed pricing and zero hidden steps.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#fleet"
                className="ref-btn-primary group"
              >
                <span>Browse Cars</span>
                <span className="ref-circle-arrow">
                  <ArrowRight className="w-3 h-3 text-navy-950" />
                </span>
              </a>

              <a
                href={`tel:+91${businessInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-amber-400/30 hover:border-amber-400 transition-all group"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call +91 {businessInfo.phone}</span>
                <span className="ref-circle-arrow bg-white/20">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
