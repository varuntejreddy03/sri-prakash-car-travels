import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Mountain, Clock, Car, Check, ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react';
import { holidayPackagesData, createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function HolidayPackagesPage({ onOpenBooking }) {
  return (
    <div>
      <PageBanner
        title="Holiday & Tourist Packages"
        subtitle="Explore scenic hill stations, lush green backwaters, and breathtaking waterfalls with Sri Prakash Car Travels."
        breadcrumb="Packages"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="ref-section-tag">Nature & Escapes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 mt-2">
              Unforgettable Roadtrips from <span className="text-[#FF5B00]">Kakinada</span>
            </h2>
            <p className="text-sm text-slate-600 font-jakarta mt-2">
              All packages include experienced hill-station drivers, clean sanitized AC vehicles, and flexible sightseeing stops.
            </p>
          </div>

          {/* Holiday Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {holidayPackagesData.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-200">
                      {pkg.location}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FF5B00]" />
                      {pkg.duration}
                    </span>
                  </div>

                  <Link to={`/holiday-packages/${pkg.id}`}>
                    <h3 className="font-outfit font-extrabold text-2xl text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 font-jakarta mt-3 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-200 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Package Attractions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-xs text-slate-700">
                    <Car className="w-3.5 h-3.5 text-[#FF5B00] shrink-0" />
                    <span>Recommended Car: <strong>{pkg.car}</strong></span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 space-y-2.5">
                  <Link
                    to={`/holiday-packages/${pkg.id}`}
                    className="w-full py-2.5 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>View Package & Sightseeing Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${pkg.title} (${pkg.duration}). Please send itinerary and pricing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-md shadow-[#FF5B00]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Custom Holiday Trip Planner */}
          <div className="bg-[#0B0F17] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider block">
                Customized Sightseeing
              </span>
              <h3 className="font-outfit font-extrabold text-2xl text-white mt-1">
                Have a Custom Vacation or Weekend Plan?
              </h3>
              <p className="text-xs text-slate-400 font-jakarta mt-1">
                Tell us your destination, days, and group size. We'll craft the perfect vehicle and chauffeur package.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="ref-btn-primary group whitespace-nowrap !py-3 !px-7 text-xs"
            >
              <span>Custom Itinerary</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
