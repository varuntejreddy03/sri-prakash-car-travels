import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  Sparkles, 
  Users, 
  Headphones, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Award 
} from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function WhyChooseUsSection({ onOpenBooking }) {
  const reasons = [
    {
      icon: Clock,
      title: "Guaranteed On-Time Doorstep Pickup",
      desc: "Our chauffeurs arrive 15 minutes ahead of schedule. Whether it's a 4:00 AM airport drop to Rajahmundry or an emergency city trip, punctuality is our sacred promise.",
      highlight: "15-Min Advance Arrival"
    },
    {
      icon: BadgePercent,
      title: "100% Transparent Fixed Billing",
      desc: "No peak-hour surge, no rainy-day hikes, and no surprise extra charges. Exact GPS-verified km calculation with clear upfront driver allowances and tolls.",
      highlight: "Zero Hidden Charges"
    },
    {
      icon: ShieldCheck,
      title: "Pristine Sanitized & AC Vehicles",
      desc: "Every sedan, SUV, and luxury bus undergoes rigorous mechanical checks and deep interior sanitization before departure. Chilled, dual-zone AC in every ride.",
      highlight: "Showroom Clean Fleet"
    },
    {
      icon: Users,
      title: "Verified Professional Chauffeurs",
      desc: "Experienced, uniformed, and background-verified local drivers. Highly trained on Araku-Lambasingi Ghat routes, temple timings, and defensive highway driving.",
      highlight: "Polite & Local Experts"
    },
    {
      icon: Award,
      title: "15+ Years of Trusted Regional Legacy",
      desc: "Proudly founded in Kakinada. Trusted by more than 10,000 local families, industrial port executives, doctors, and pilgrims across Andhra Pradesh.",
      highlight: "15+ Years Excellence"
    },
    {
      icon: Headphones,
      title: "24/7 Direct Human Assistance",
      desc: "No frustrating bots or long hold times. Speak directly to our local Kakinada operations desk at +91 9848903025 anytime, day or night.",
      highlight: "24/7 Instant Dispatch"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="ref-section-tag">Why Sri Prakash Travels</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-[#0C2340] leading-tight mt-2">
              Why Choose <br className="hidden sm:block" />
              <span className="text-gradient-gold">Sri Prakash Car Travels</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-jakarta mt-3">
              Experience the difference of traveling with Kakinada's most dependable, family-first car travels service.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              onClick={onOpenBooking}
              className="ref-btn-primary group"
            >
              <span>Book Your Ride</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-navy-950" />
              </span>
            </button>

            <a
              href={`tel:+91${businessInfo.phone}`}
              className="btn-call-now-pill"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 {businessInfo.phone}</span>
            </a>
          </div>
        </div>

        {/* 6 Benefits Cards Grid (3 in a row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-amber-400/10 text-amber-500 group-hover:bg-gold-gradient group-hover:text-navy-950 flex items-center justify-center transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold font-outfit uppercase tracking-wider bg-slate-100 text-[#0C2340] group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-outfit font-extrabold text-xl text-[#0C2340] group-hover:text-amber-600 transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-jakarta leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Guaranteed Service Quality</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Highlights Strip */}
        <div className="rounded-3xl bg-gradient-to-r from-[#040B17] via-[#08172C] to-[#0C2340] border border-amber-400/25 p-6 sm:p-8 text-white grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xl">
          <div className="space-y-1">
            <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-gradient-gold">15+ Years</div>
            <div className="text-xs text-slate-300 font-medium font-jakarta">Legacy in Kakinada</div>
          </div>
          <div className="space-y-1">
            <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-white">10,000+</div>
            <div className="text-xs text-slate-300 font-medium font-jakarta">Happy Travelers</div>
          </div>
          <div className="space-y-1">
            <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-white">50,000+</div>
            <div className="text-xs text-slate-300 font-medium font-jakarta">Safe Trips Done</div>
          </div>
          <div className="space-y-1">
            <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-amber-400">24 / 7</div>
            <div className="text-xs text-slate-300 font-medium font-jakarta">Rapid Ride Dispatch</div>
          </div>
        </div>

      </div>
    </section>
  );
}
