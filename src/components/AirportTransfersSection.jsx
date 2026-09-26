import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Clock, ShieldCheck, MapPin, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/travelData';

export default function AirportTransfersSection({ onOpenBooking }) {
  const airports = [
    {
      id: "rajahmundry",
      code: "RJA",
      name: "Rajahmundry Airport Taxi",
      distance: "~65 km",
      time: "~1.5 Hours",
      route: "Via Samarlakota & Rajanagaram NH16",
      desc: "Guaranteed on-time drop & arrival pickup for all Indigo & domestic flights.",
      recommended: "Swift Dzire / Maruti Ertiga",
      popular: true
    },
    {
      id: "vizag",
      code: "VTZ",
      name: "Visakhapatnam (Vizag) Airport Taxi",
      distance: "~155 km",
      time: "~3.5 Hours",
      route: "Via NH16 Express Highway",
      desc: "Direct express highway drive with zero delays and comfortable cruising.",
      recommended: "Toyota Innova Crysta / Kia Carens",
      popular: true
    },
    {
      id: "vijayawada",
      code: "VGA",
      name: "Vijayawada Airport Taxi (Gannavaram)",
      distance: "~210 km",
      time: "~4.5 Hours",
      route: "Via Ravulapalem, Tanuku & Eluru",
      desc: "Smooth journey to Gannavaram airport for international & metro flight connections.",
      recommended: "Innova Crysta / Toyota Etios",
      popular: false
    },
    {
      id: "hyderabad",
      code: "HYD",
      name: "Hyderabad Airport Taxi (Shamshabad)",
      distance: "~490 km",
      time: "Overnight / 9-10 Hours",
      route: "Via Vijayawada - Hyderabad Highway",
      desc: "Comfortable sleeper-style family trip for early morning international flights.",
      recommended: "Toyota Innova Crysta / Force Urbania",
      popular: false
    }
  ];

  return (
    <section id="airport-transfers" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="ref-section-tag">24/7 Airport Transfers</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
              Punctual <span className="text-[#FF5B00]">Airport Taxi</span> Service
            </h2>
            <p className="text-sm text-slate-600 font-jakarta mt-2 max-w-xl">
              Doorstep pickup in Kakinada and dedicated drops for Rajahmundry & Vizag airports with live flight tracking.
            </p>
          </div>

          <Link
            to="/airport-taxi"
            className="ref-btn-primary group self-start md:self-auto"
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
              className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                airport.popular 
                  ? 'border-[#FF5B00]/40 ring-1 ring-[#FF5B00]/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-50 text-[#FF5B00] border border-orange-200">
                    {airport.code}
                  </span>
                  {airport.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Popular
                    </span>
                  )}
                </div>

                <Link to={`/airport-taxi/${airport.id}`}>
                  <h3 className="font-outfit font-extrabold text-lg text-slate-900 hover:text-[#FF5B00] transition-colors mb-2 leading-snug">
                    {airport.name}
                  </h3>
                </Link>
                <p className="text-xs text-slate-500 font-jakarta leading-relaxed mb-4">
                  {airport.desc}
                </p>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Distance:</span>
                    <strong className="text-slate-900">{airport.distance}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Travel Time:</span>
                    <strong className="text-[#FF5B00]">{airport.time}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <Link
                  to={`/airport-taxi/${airport.id}`}
                  className="w-full py-2.5 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Route & Fares</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I need an Airport Taxi for ${airport.name} (${airport.code}). Please share fare.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-full font-bold text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
