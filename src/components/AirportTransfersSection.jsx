import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Clock, ShieldCheck, MapPin, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { airportTransfersData, createWhatsAppUrl } from '../data/travelData';

export default function AirportTransfersSection({ onOpenBooking }) {
  const airports = airportTransfersData;

  return (
    <section id="airport-transfers" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="ref-section-tag">24/7 Airport Cab Service</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
              Punctual <span className="text-[#FF5B00]">Airport Pickup & Drop</span> Kakinada
            </h2>
            <p className="text-sm text-slate-600 font-jakarta mt-2 max-w-2xl">
              Never miss a flight again! Sri Prakash Car Travels provides round-the-clock Airport Taxi Kakinada services with guaranteed on-time door-step pickup, zero flight delay anxiety, and fixed transparent fares.
            </p>
          </div>

          <Link
            to="/airport-taxi"
            className="ref-btn-primary group self-start md:self-auto shrink-0"
          >
            <span>View All Airports</span>
            <span className="ref-circle-arrow">
              <ArrowRight className="w-3 h-3 text-white" />
            </span>
          </Link>
        </div>

        {/* Airport Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {airports.map((airport) => (
            <div
              key={airport.code}
              className="comp-package-card flex flex-col justify-between group"
            >
              <div>
                {/* Airport Real Image Box */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={airport.image}
                    alt={airport.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF5B00] text-white shadow-md">
                      {airport.code}
                    </span>
                  </div>

                  {airport.popular && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/85 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF5B00]" />
                      {airport.distance}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-amber-300">
                      <Clock className="w-3 h-3 text-amber-300" />
                      {airport.time}
                    </span>
                  </div>
                </div>

                <div className="p-6 pb-2">
                  <Link to={`/airport-taxi/${airport.id}`}>
                    <h3 className="font-outfit font-extrabold text-lg text-slate-900 group-hover:text-[#FF5B00] transition-colors mb-2 leading-snug">
                      {airport.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 font-jakarta leading-relaxed mb-4 line-clamp-2">
                    {airport.desc}
                  </p>

                  <div className="space-y-1.5 py-2.5 border-y border-slate-100 text-xs text-slate-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Route:</span>
                      <strong className="text-slate-800 text-[11px] truncate max-w-[170px]">{airport.route}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Fleet:</span>
                      <strong className="text-[#FF5B00] text-[11px] truncate max-w-[170px]">{airport.recommended}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <a
                  href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I need an Airport Taxi for ${airport.name} (${airport.code}). Please share fare.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-pill w-full text-center text-xs !py-2.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Fare Quote</span>
                </a>

                <Link
                  to={`/airport-taxi/${airport.id}`}
                  className="w-full py-2 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Route Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Why Pre-Book Airport Cab Box matching competitor */}
        <div className="mt-12 bg-gradient-to-r from-[#0F141E] to-[#1E293B] text-white rounded-3xl p-8 border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5B00] uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Punctuality Guaranteed</span>
              </div>
              <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-white">
                Why Pre-Book Your Airport Cab With Sri Prakash Travels?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-outfit mb-0.5">Live Flight Tracking</strong>
                    Pickup times automatically adjusted for delayed arrivals.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-outfit mb-0.5">Luggage Assistance</strong>
                    Chauffeur assists with heavy bags at your doorstep and terminal.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-outfit mb-0.5">Fixed All-Inclusive Fares</strong>
                    Zero surge pricing, zero hidden costs, transparent tolls.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href="tel:+919848903025"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-sm bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-lg shadow-[#FF5B00]/30 transition-all"
              >
                <span>Call Airport Taxi Helpline</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-slate-400 mt-2">Available 24 Hours / 7 Days</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
