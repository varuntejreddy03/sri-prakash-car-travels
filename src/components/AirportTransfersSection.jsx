import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Clock, CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { airportTransfersData, createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function AirportTransfersSection({ onOpenBooking }) {
  const airports = airportTransfersData;

  return (
    <section id="airport-transfers" className="py-20 bg-gradient-to-br from-[#0B0F17] via-[#0F172A] to-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Airport Title, Intro & Compact Airport Item Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#FF5B00]/20 text-[#FF5B00] border border-[#FF5B00]/30 mb-3">
                24/7 Airport Cab Service
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white leading-tight">
                Punctual <span className="text-[#FF5B00]">Airport Pickup & Drop</span> Kakinada
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-jakarta mt-3 leading-relaxed">
                Never miss a flight again! Sri Prakash Car Travels provides round-the-clock{' '}
                <strong className="text-white">Airport Taxi Kakinada</strong> services with guaranteed on-time door-step pickup, zero flight delay anxiety, and fixed transparent fares.
              </p>
            </div>

            {/* Airport Cards List matching competitor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {airports.map((airport) => (
                <Link
                  key={airport.code}
                  to={`/airport-taxi/${airport.id}`}
                  className="airport-item-card group cursor-pointer block"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="airport-icon-box shrink-0 group-hover:scale-110 group-hover:bg-[#FF5B00] group-hover:text-white transition-all">
                      <Plane className="w-5 h-5 text-[#FF5B00] group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold font-outfit text-white group-hover:text-[#FF5B00] transition-colors truncate">
                        {airport.name} ({airport.code})
                      </h4>
                      <p className="text-xs text-slate-400 font-jakarta mt-0.5">
                        Distance: {airport.distance} | {airport.time}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Action Link */}
            <div className="pt-2">
              <Link
                to="/airport-taxi"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5B00] hover:text-white transition-colors"
              >
                <span>View All Airport Taxi Routes & Fares</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Glass Card Dark matching competitor */}
          <div className="lg:col-span-5">
            <div className="glass-card-dark p-7 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-amber-400 font-outfit font-extrabold text-xl mb-6">
                <Clock className="w-5 h-5 text-[#FF5B00]" />
                <h3>Why Pre-Book Airport Cab?</h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300 font-jakarta">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Flight Tracking:</strong> We track live flight schedules to adjust pickup times in case of flight delays.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Doorstep Luggage Assistance:</strong> Driver assists with heavy bags at your home & terminal.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Fixed All-Inclusive Fares:</strong> No surge pricing or unexpected midnight extra charges.
                  </div>
                </li>
              </ul>

              {/* Call Helpline Button matching competitor */}
              <div className="mt-8 space-y-3">
                <a
                  href={`tel:+91${businessInfo.phone}`}
                  className="btn-call-now-pill w-full !py-3.5 text-center flex items-center justify-center gap-2 shadow-lg shadow-[#FF5B00]/30"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Airport Taxi Helpline</span>
                </a>

                <a
                  href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I need an Airport Taxi pickup/drop. Please share vehicle availability and fare details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-pill w-full !py-3 text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Fare Quote</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
