import React from 'react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Row 1: Statement + Image + Fleet Button matching reference pinterest-bulk-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="ref-section-tag">About Sri Prakash</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight">
              We are committed to providing fast, reliable, and professional <span className="text-[#FF5B00]">car travels</span> services.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed max-w-xl">
              Based in Kakinada, Sri Prakash Car Travels is trusted for on-time airport pickups, outstation journeys, and sacred temple pilgrimages across South India.
            </p>
            <div className="pt-2">
              <a href="#fleet" className="ref-btn-primary group">
                <span>See Our Fleet</span>
                <span className="ref-circle-arrow">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10] bg-slate-100">
              <img
                src="/images/kia-carens.jpg"
                alt="Kia Carens Sri Prakash Car Travels"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Split Card with Phone Badge + Features Checklist matching reference pinterest-bulk-3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-slate-100">
          
          {/* Left: Sunset Car Card with Phone Badge */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/11] bg-slate-900">
              <img
                src="/images/dzire.jpg"
                alt="Sri Prakash Car Travels Dzire on road"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-200 font-medium max-w-xs leading-snug">
                    No matter the situation, Sri Prakash is always just a call away.
                  </p>
                </div>
                <a
                  href={`tel:+91${businessInfo.phone}`}
                  className="px-4 py-2 rounded-full font-bold text-xs bg-white text-slate-900 hover:bg-[#FF5B00] hover:text-white transition-colors shadow-lg flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
                  <span>+91 {businessInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Partner statement & 2 Checkpoints */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit text-slate-900 leading-snug">
              Your trusted partner in <br />
              <span className="text-[#FF5B00]">reliable car travels</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed">
              We take pride in our fleet and customer experience. Rent with confidence, knowing we're here to support every step of your trip.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF5B00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-outfit font-bold text-slate-900 text-base">
                    Easy Booking Experience
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-jakarta mt-0.5">
                    We've simplified the booking steps so you can choose a car, set your dates, and confirm your ride on WhatsApp in just moments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF5B00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-outfit font-bold text-slate-900 text-base">
                    Convenient Pick-Up & Return
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-jakarta mt-0.5">
                    Doorstep pickup anywhere in Kakinada with flexible one-way drops to Rajahmundry, Vizag, Vijayawada, and Hyderabad.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="ref-btn-primary group"
              >
                <span>Book Now</span>
                <span className="ref-circle-arrow">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
