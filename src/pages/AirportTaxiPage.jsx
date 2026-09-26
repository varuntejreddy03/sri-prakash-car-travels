import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Plane, Clock, ShieldCheck, CheckCircle2, MessageCircle, Phone, ArrowRight, MapPin, Luggage } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function AirportTaxiPage({ onOpenBooking }) {
  const [selectedAirport, setSelectedAirport] = useState('RJA');

  const airportOptions = [
    {
      id: "rajahmundry",
      code: "RJA",
      name: "Rajahmundry Airport Taxi (RJA)",
      distance: "~65 km",
      time: "~1.5 Hours",
      image: "/images/airport-rajahmundry.jpg",
      route: "Kakinada → Samarlakota → Rajanagaram → Madhurapudi Airport",
      description: "Fastest express route for daily domestic flights (IndiGo, Air India) connecting Hyderabad, Bengaluru, Chennai, and Tirupati.",
      cars: ["Swift Dzire (4+1)", "Toyota Etios (4+1)", "Toyota Innova Crysta (7+1)", "Kia Carens (6+1)"],
      features: ["Doorstep pickup from any street in Kakinada", "Toll charges coordination included", "Driver reaches 15 mins prior", "Flight status monitoring"]
    },
    {
      id: "vizag",
      code: "VTZ",
      name: "Visakhapatnam (Vizag) Airport Taxi (VTZ)",
      distance: "~155 km",
      time: "~3.5 Hours",
      image: "/images/airport-vizag.jpg",
      route: "Kakinada → Annavaram → Tuni → Anakapalle → Vizag Airport (NH16)",
      description: "Direct 4-lane highway transfer to Visakhapatnam International Airport for international and major metro flights.",
      cars: ["Toyota Innova Crysta (7+1 VIP)", "Kia Carens (6+1)", "Maruti Ertiga (6+1)", "Swift Dzire (4+1)"],
      features: ["Spacious trunk for international luggage", "Smooth highway cruising with experienced chauffeurs", "Midway refreshment stops at food plazas", "Return airport pickup coordination"]
    },
    {
      id: "vijayawada",
      code: "VGA",
      name: "Vijayawada Airport Taxi (Gannavaram - VGA)",
      distance: "~210 km",
      time: "~4.5 Hours",
      image: "/images/airport-vijayawada.jpg",
      route: "Kakinada → Ravulapalem → Tanuku → Tadepalligudem → Eluru → Gannavaram",
      description: "Comfortable inter-city airport transfer connecting state capital flights and Gulf/international journeys.",
      cars: ["Toyota Innova Crysta (7+1)", "Kia Carens (6+1)", "Toyota Etios (4+1)"],
      features: ["AC climate controlled comfort", "Zero midnight surcharge", "Flexible pickup timing 24/7"]
    },
    {
      id: "hyderabad",
      code: "HYD",
      name: "Hyderabad Airport Taxi (Shamshabad - HYD)",
      distance: "~490 km",
      time: "9 to 10 Hours",
      image: "/images/airport-hyderabad.jpg",
      route: "Kakinada → Vijayawada Expressway → Suryapet → Hyderabad RGIA",
      description: "Full overnight sleeper-style outstation taxi for international travelers with extensive luggage.",
      cars: ["Toyota Innova Crysta (7+1)", "Force Urbania Luxury Van"],
      features: ["Two experienced highway drivers for night travel", "Massive luggage space", "Direct drop at international departures terminal"]
    }
  ];

  return (
    <div>
      <PageBanner
        title="Airport Taxi Service Kakinada"
        subtitle="24/7 guaranteed on-time doorstep pickup and airport transfers to Rajahmundry (RJA) & Vizag (VTZ) airports with live flight tracking."
        breadcrumb="Airport Taxi"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          {/* Top Trust Features Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-slate-900 text-lg">Flight Delay Protection</h3>
                <p className="text-xs text-slate-600 font-jakarta mt-1">We track flight numbers live. If your flight is delayed, our chauffeur waits at no penalty.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF5B00] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-slate-900 text-lg">24/7 Midnight Sprints</h3>
                <p className="text-xs text-slate-600 font-jakarta mt-1">Catching a 5 AM morning departure? Our driver arrives at your home at 2:30 AM sharp.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Luggage className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-slate-900 text-lg">Doorstep Luggage Help</h3>
                <p className="text-xs text-slate-600 font-jakarta mt-1">Our courteous drivers assist with loading & unloading heavy suitcases directly at your doorstep.</p>
              </div>
            </div>
          </div>

          {/* Detailed Airport Cards Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="ref-section-tag">Direct Transfers</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 mt-2">
                Choose Your <span className="text-[#FF5B00]">Airport Destination</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {airportOptions.map((apt) => (
                <div
                  key={apt.code}
                  className="bg-[#F8FAFC] rounded-3xl p-5 sm:p-7 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Airport Terminal Photo */}
                    <div className="relative h-52 w-full rounded-2xl overflow-hidden mb-5 bg-slate-900">
                      <img
                        src={apt.image}
                        alt={apt.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#FF5B00] text-white shadow-md">
                          {apt.code}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/95 font-medium">
                        <span className="flex items-center gap-1.5 font-bold text-amber-300">
                          <Clock className="w-3.5 h-3.5 text-amber-300" />
                          {apt.time}
                        </span>
                        <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[11px]">
                          {apt.distance}
                        </span>
                      </div>
                    </div>

                    <Link to={`/airport-taxi/${apt.id}`}>
                      <h3 className="font-outfit font-extrabold text-2xl text-slate-900 group-hover:text-[#FF5B00] transition-colors leading-snug mb-2">
                        {apt.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-600 font-jakarta leading-relaxed mb-4">
                      {apt.description}
                    </p>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium mb-4 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5B00] shrink-0" />
                      <span className="truncate">{apt.route}</span>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6">
                      {apt.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-2.5">
                    <Link
                      to={`/airport-taxi/${apt.id}`}
                      className="w-full py-2.5 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Explore Dedicated Route Subpage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <a
                        href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I need Airport Taxi for ${apt.name}. Distance: ${apt.distance}. Please share fixed fare.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-full font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-md shadow-[#FF5B00]/30 transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Book on WhatsApp</span>
                      </a>

                      <button
                        onClick={onOpenBooking}
                        className="ref-btn-outline !py-2.5 !px-4 text-xs"
                      >
                        Instant Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Call Strip */}
          <div className="bg-[#0B0F17] rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="font-outfit font-extrabold text-2xl text-white">
                Urgent Airport Pickup Needed Right Now?
              </h3>
              <p className="text-xs text-slate-400 font-jakarta mt-1">
                Call our airport dispatch helpline 24 hours a day for immediate car assignment in Kakinada.
              </p>
            </div>

            <a
              href={`tel:+91${businessInfo.phone}`}
              className="ref-btn-primary group whitespace-nowrap !py-3 !px-7 text-xs"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call +91 {businessInfo.phone}</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
