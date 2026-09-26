import React from 'react';
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function AboutSection({ onOpenBooking }) {
  const aboutFeatures = [
    "24/7 Instant Online Taxi Booking",
    "Clean, Sanitized & AC Vehicles",
    "Highly Experienced Local Drivers",
    "Zero Hidden Costs & Fixed Fares",
    "Airport Pickup & Drop Specialists",
    "Custom Temple & Holiday Packages"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Main Grid: Visual with 15+ Years Badge + Rich Keyword Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-900 relative group">
              <img
                src="/images/kia-carens.jpg"
                alt="Sri Prakash Car Travels Fleet and Chauffeurs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* 15+ Years Excellence Badge */}
              <div className="absolute bottom-6 left-6 bg-[#FF5B00] text-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="text-3xl sm:text-4xl font-extrabold font-outfit leading-none">
                  15+
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight">
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

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight">
              The Most Trusted <span className="text-[#FF5B00]">Car Travels & Best Taxi Service</span> in Kakinada
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed">
              <p>
                At <strong>Sri Prakash Car Travels</strong>, we take pride in being recognized as the <strong>Best Car Travels in Kakinada</strong> and <strong>Best Taxi Service in Kakinada</strong>. Whether you need an <strong>Affordable Taxi Service</strong>, <strong>Local Taxi Kakinada</strong>, <strong>Outstation Taxi Kakinada</strong>, <strong>Airport Taxi Kakinada</strong> (or <strong>Airport Cab Service Kakinada</strong>), <strong>Railway Station Taxi</strong> transfers, or a reliable <strong>Taxi Near Me</strong>, our <strong>Kakinada Cab Service</strong> is available 24/7.
              </p>
              <p>
                We specialize in <strong>Cab Booking Kakinada</strong> for <strong>Family Trip Taxi</strong> rides, <strong>Temple Tour Packages Kakinada</strong>, <strong>Corporate Cab Service</strong>, and <strong>Car Rental Kakinada</strong> with professional chauffeurs ensuring a safe, punctual, and smooth journey.
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
                className="ref-btn-primary group !bg-[#FF5B00] hover:!bg-[#e04f00]"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Book Call Now</span>
                <span className="ref-circle-arrow">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-md"
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
