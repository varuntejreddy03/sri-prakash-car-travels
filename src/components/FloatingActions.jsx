import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons for Desktop / Tablet */}
      <div className="fixed right-5 bottom-6 z-40 hidden md:flex flex-col items-center gap-3">
        {/* Back to top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full bg-[#111827] border border-white/15 text-white hover:bg-[#FF5B00] hover:border-[#FF5B00] shadow-xl flex items-center justify-center transition-all duration-200"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct Call Button */}
        <a
          href={`tel:+91${businessInfo.phone}`}
          aria-label="Call Sri Prakash Car Travels"
          className="w-13 h-13 p-3.5 rounded-full bg-[#162238] border border-white/20 text-[#FF5B00] hover:bg-[#FF5B00] hover:text-white shadow-xl shadow-black/50 flex items-center justify-center transition-all duration-200 hover:scale-105"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* WhatsApp Floating Button with Pulsing Glow */}
        <a
          href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a taxi.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center hover:scale-105 transition-all duration-200 group"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-[#0B0F17] animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-[#0B0F17]" />
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Dual CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0C111C]/95 backdrop-blur-md border-t border-white/10 p-3 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:+91${businessInfo.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#FF5B00] to-[#FF7824] shadow-md shadow-[#FF5B00]/30 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        <a
          href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a cab right now.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-white bg-[#25D366] shadow-md shadow-emerald-600/30 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
