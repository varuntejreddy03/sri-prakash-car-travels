import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function PreFooterBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Banner matching pinterest-bulk-6 middle */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0F141E] p-10 sm:p-16 text-center text-white">
          {/* Subtle Car/Atmosphere Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#0F141E]/95 to-black/80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#FF5B00]/15 rounded-full blur-[100px] pointer-events-none" />

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
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </a>

              <a
                href={`tel:+91${businessInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all group"
              >
                <Phone className="w-4 h-4 text-[#FF5B00]" />
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
