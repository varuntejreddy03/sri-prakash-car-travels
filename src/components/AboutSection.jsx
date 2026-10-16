import React from 'react';
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function AboutSection({ onOpenBooking }) {
  const aboutFeatures = [
    "Guaranteed 15-Min Early Doorstep Arrival",
    "Spotless Sanitized Fleet with Powerful AC",
    "Verified Chauffeurs with Polite Etiquette",
    "100% Transparent Fixed Billing (No Hidden Surge)",
    "Live Flight Radar Tracking for Airport Cabs",
    "Custom Spiritual & Leisure Tour Itineraries"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Main Grid: Visual with 15+ Years Badge + Rich Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-[#040B17] relative group">
              <img
                src="/images/kia-carens.jpg"
                alt="Sri Prakash Car Travels Fleet and Chauffeurs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* 15+ Years Excellence Badge - Karthikeya Gold Gradient */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gold-gradient text-navy-950 p-3.5 sm:p-5 rounded-2xl shadow-gold-glow flex items-center gap-2.5 sm:gap-3">
                <div className="text-2xl sm:text-4xl font-extrabold font-outfit leading-none text-navy-950">
                  15+
                </div>
                <div className="text-[11px] sm:text-sm font-bold uppercase tracking-wider leading-tight text-navy-950">
                  Years <br />Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 6 Key Features */}
          <div className="lg:col-span-7 space-y-6">
            <span className="ref-section-tag">
              Welcome to Sri Prakash Car Travels
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-[#0C2340] leading-tight">
              15+ Years of Trust & <span className="text-gradient-gold">Excellence on Every Highway</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed">
              <p>
                Founded in the heart of Kakinada, <strong>Sri Prakash Car Travels</strong> was built on a simple conviction: every passenger deserves a journey marked by safety, punctuality, and complete peace of mind. Over the past fifteen years, we have grown into one of Kakinada's most dependable and highly rated travel services.
              </p>
              <p>
                Unlike app aggregators that outsource rides to unvetted gig drivers, we manage our own fleet of pristine sedans, premium MPVs, and group coaches. Whether you require an early-morning airport drop to Rajahmundry or Vizag, an all-day city rental, or a multi-day family pilgrimage, our experienced chauffeurs guarantee exceptional comfort and transparent fixed pricing with zero surge.
              </p>
            </div>

            {/* 6 Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {aboutFeatures.map((feat, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="btn-call-now-pill"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Book Call Now</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="btn-primary-brand"
              >
                <span>Book Cab Online</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
