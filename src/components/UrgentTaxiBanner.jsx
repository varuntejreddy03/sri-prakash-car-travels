import React from 'react';
import { Phone, MessageCircle, Car, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function UrgentTaxiBanner({ onOpenBooking }) {
  return (
    <section className="py-14 bg-gradient-to-r from-[#040B17] via-[#08172C] to-[#0C2340] text-white relative overflow-hidden border-y border-amber-400/20">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-amber-400/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>24/7 Immediate Cab Dispatch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Require an <span className="text-gradient-gold">Immediate Ride</span> or Outstation Cab in Kakinada?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 font-jakarta max-w-2xl mx-auto leading-relaxed">
          From emergency medical runs to last-minute airport departures, our dedicated fleet is positioned across Kakinada for instant dispatch with 100% upfront pricing.
        </p>

        {/* 3 Call to Action Buttons - Karthikeya Colors */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:+91${businessInfo.phone}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-extrabold text-sm sm:text-base bg-gold-gradient text-navy-950 transition-all shadow-gold-glow hover:brightness-105 group hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 text-navy-950 animate-bounce" />
            <span>Call Now: +91 {businessInfo.phone}</span>
          </a>

          <a
            href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I urgently need to book a cab in Kakinada.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-pill !py-3.5 !px-6 !text-sm sm:!text-base"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Instant WhatsApp Booking</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base bg-[#0C2340] hover:bg-[#14335E] text-white border border-amber-400/40 hover:border-amber-400 transition-all backdrop-blur-md shadow-md"
          >
            <Car className="w-4 h-4 text-amber-400" />
            <span>Book Taxi Online</span>
          </button>
        </div>

      </div>
    </section>
  );
}
