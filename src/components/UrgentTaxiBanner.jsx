import React from 'react';
import { Phone, MessageCircle, Car, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function UrgentTaxiBanner({ onOpenBooking }) {
  return (
    <section className="py-14 bg-gradient-to-r from-[#0B0F17] via-[#111827] to-[#1E293B] text-white relative overflow-hidden border-y border-white/10">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#FF5B00]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5B00]/15 border border-[#FF5B00]/30 text-xs font-bold text-[#FF5B00] uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>24/7 Immediate Cab Dispatch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Need a <span className="text-[#FF5B00]">Taxi Urgently</span> in Kakinada or Outstation Cab?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 font-jakarta max-w-2xl mx-auto leading-relaxed">
          Enjoy 24/7 instant cab pickup with 0% surge pricing, clean AC cars, and polite local drivers. Book your ride in less than 60 seconds!
        </p>

        {/* 3 Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:+91${businessInfo.phone}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-extrabold text-sm sm:text-base bg-[#FF5B00] hover:bg-[#E04F00] text-white transition-all shadow-lg shadow-[#FF5B00]/30 group"
          >
            <Phone className="w-4 h-4 text-white animate-bounce" />
            <span>Call Now: +91 {businessInfo.phone}</span>
          </a>

          <a
            href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I urgently need to book a cab in Kakinada.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-600/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Instant WhatsApp Booking</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all backdrop-blur-md"
          >
            <Car className="w-4 h-4 text-[#FF5B00]" />
            <span>Book Taxi Online</span>
          </button>
        </div>

      </div>
    </section>
  );
}
