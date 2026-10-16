import React from 'react';
import { Link } from 'react-router-dom';
import { Palmtree, MapPin, Clock, Car, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { holidayPackagesData, createWhatsAppUrl } from '../data/travelData';

export default function HolidayPackagesSection() {
  return (
    <section id="tour-packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching competitor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="ref-section-tag">Exotic Escapes</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-[#0C2340] leading-tight mt-2">
              Popular <span className="text-gradient-gold">Holiday Tour Packages</span>
            </h2>
            <p className="text-sm text-slate-600 font-jakarta mt-2 max-w-xl">
              Explore nature, waterfalls, beaches, and hill stations with our comfortable tourist taxis.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/holiday-packages"
              className="ref-btn-primary group self-start md:self-auto"
            >
              <span>All Holiday Packages</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-navy-950" />
              </span>
            </Link>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {holidayPackagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="comp-package-card flex flex-col justify-between group"
            >
              <div>
                {/* Tour Image Box */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Package Duration Badge - Karthikeya Gold Gradient */}
                  <span className="absolute bottom-3 right-3 bg-gold-gradient text-navy-950 font-extrabold text-xs px-3.5 py-1 rounded-full shadow-md">
                    {pkg.duration}
                  </span>
                </div>

                <div className="p-6">
                  <Link to={`/holiday-packages/${pkg.id}`}>
                    <h3 className="font-outfit font-extrabold text-xl text-[#0C2340] group-hover:text-amber-600 transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 font-jakarta mt-2 line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Package Meta Details */}
                  <ul className="mt-4 py-3 border-y border-slate-100 space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-500 font-bold">📍</span>
                      <span className="truncate">Covering: {pkg.location}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#0C2340] font-bold">🚗</span>
                      <span className="truncate">Fleet: {pkg.car}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Package Actions */}
              <div className="p-6 pt-0 flex gap-2">
                <a
                  href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${pkg.title} (${pkg.duration}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-pill flex-1 text-center text-xs !py-2.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Book Tour</span>
                </a>

                <Link
                  to={`/holiday-packages/${pkg.id}`}
                  className="px-4 py-2.5 rounded-full font-bold text-xs bg-[#0C2340] hover:bg-gold-gradient hover:text-navy-950 text-white transition-all flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
