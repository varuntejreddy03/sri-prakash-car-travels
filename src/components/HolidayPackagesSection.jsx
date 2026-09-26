import React from 'react';
import { Link } from 'react-router-dom';
import { Palmtree, MapPin, Clock, Car, Sparkles, MessageCircle, ArrowRight, Mountain } from 'lucide-react';
import { holidayPackagesData, createWhatsAppUrl } from '../data/travelData';

export default function HolidayPackagesSection() {
  return (
    <section id="holiday-packages" className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Mountain className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-jakarta">
              Exotic Escapes & Scenic Roadtrips
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Popular <span className="text-gradient-orange">Holiday Tour Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 font-jakarta leading-relaxed">
            Escape the routine and explore Godavari backwaters, misty winter hills, pristine waterfalls, and coffee valley viewpoints with our experienced mountain drivers.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {holidayPackagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl bg-[#111827] border border-white/10 p-7 flex flex-col justify-between hover:border-emerald-400/40 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-black/60"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    {pkg.location}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF5B00]" />
                    {pkg.duration}
                  </span>
                </div>

                <Link to={`/holiday-packages/${pkg.id}`}>
                  <h3 className="font-outfit font-extrabold text-xl text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-slate-400 mt-3 font-jakarta leading-relaxed">
                  {pkg.description}
                </p>

                {/* Highlights tags */}
                <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Package Attractions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Car */}
                <div className="mt-5 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2 text-xs text-slate-300">
                  <Car className="w-4 h-4 text-[#FF5B00] shrink-0" />
                  <span className="truncate">Fleet: <strong>{pkg.car}</strong></span>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="mt-6 pt-2 space-y-2.5">
                <Link
                  to={`/holiday-packages/${pkg.id}`}
                  className="w-full py-2.5 rounded-2xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  <span>Explore Package & Sightseeing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${pkg.title} (${pkg.duration}). Please send pricing and custom itinerary.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-brand-primary !py-2.5 !rounded-2xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire Tour on WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
