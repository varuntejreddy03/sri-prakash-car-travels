import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Clock, Car, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { templePackagesData, createWhatsAppUrl } from '../data/travelData';

export default function TempleToursSection({ onOpenBooking }) {
  return (
    <section id="temple-tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="ref-section-tag">Spiritual Pilgrimages</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
              Famous <span className="text-[#FF5B00]">Temple Tour Packages</span> <br className="hidden sm:block" />
              from Kakinada
            </h2>
            <p className="text-sm text-slate-600 font-jakarta mt-2 max-w-xl">
              Embark on divine journeys to Annavaram, Pancharamalu, and Tirupati with dedicated family-friendly drivers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/temple-tours"
              className="ref-btn-primary group self-start md:self-auto"
            >
              <span>All Temple Packages</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </Link>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {templePackagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-50 text-[#FF5B00] border border-orange-200">
                    {pkg.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF5B00]" />
                    {pkg.duration}
                  </span>
                </div>

                <Link to={`/temple-tours/${pkg.id}`}>
                  <h3 className="font-outfit font-extrabold text-xl text-slate-900 group-hover:text-[#FF5B00] transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                </Link>
                <p className="text-xs font-semibold text-amber-700 mt-1">
                  {pkg.subtitle}
                </p>

                <p className="text-xs text-slate-600 font-jakarta mt-3 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5">
                  {pkg.itinerary.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5B00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-xs text-slate-700">
                  <Car className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Fleet: <strong>{pkg.recommendedCar}</strong></span>
                </div>
              </div>

              <div className="pt-5 space-y-2">
                <Link
                  to={`/temple-tours/${pkg.id}`}
                  className="w-full py-2.5 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Explore Pilgrimage & Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I am planning for ${pkg.title} (${pkg.duration}). Please share fare options.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-full font-bold text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Book Package on WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
