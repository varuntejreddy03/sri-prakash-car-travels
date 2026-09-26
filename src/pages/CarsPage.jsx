import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Users, Briefcase, Snowflake, Fuel, Check, MessageCircle, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { fleetData, createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function CarsPage({ onSelectVehicle, onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Fleet' },
    { id: 'sedan', label: 'Sedans (4+1)' },
    { id: 'suv', label: 'Luxury MPV & SUVs' },
    { id: 'group', label: 'Group Vans & Luxury Buses' },
  ];

  const filteredFleet = activeFilter === 'all'
    ? fleetData
    : fleetData.filter(car => car.category === activeFilter);

  return (
    <div>
      <PageBanner
        title="Our Verified Fleet"
        subtitle="Explore our sanitized, chauffeur-driven cars, luxury MPVs, and tourist buses available 24/7 in Kakinada."
        breadcrumb="Cars"
      />

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="ref-section-tag">Explore Fleet</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-slate-900 mt-1">
                Choose The Ideal Vehicle For Your Journey
              </h2>
            </div>

            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm overflow-x-auto max-w-full">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    activeFilter === tab.id
                      ? 'bg-[#FF5B00] text-white shadow-md shadow-[#FF5B00]/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-5">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#FF5B00] border border-orange-200 shadow-sm">
                        {car.tag}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-900 shadow-sm">
                        {car.registration}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-outfit font-extrabold text-2xl text-slate-900 group-hover:text-[#FF5B00] transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-jakarta mt-1">
                    {car.idealFor}
                  </p>

                  {/* 4-Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2.5 py-4 my-4 border-y border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#FF5B00]" />
                      <span>{car.seats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#FF5B00]" />
                      <span>{car.luggage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Snowflake className="w-4 h-4 text-cyan-500" />
                      <span>{car.ac}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="w-4 h-4 text-emerald-600" />
                      <span>{car.fuel}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {car.features.map((feat, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200"
                      >
                        <Check className="w-3 h-3 text-[#FF5B00]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${car.name} (${car.registration}). Please share fare.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-full font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-md shadow-[#FF5B00]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectVehicle(car)}
                    className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="View Specs"
                  >
                    <Sparkles className="w-4 h-4 text-[#FF5B00]" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Help Strip */}
          <div className="mt-16 bg-[#0B0F17] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider block">
                Custom Fleet Inquiries
              </span>
              <h3 className="font-outfit font-extrabold text-2xl text-white mt-1">
                Need a Fleet of 2 or More Cars for Marriages or Events?
              </h3>
              <p className="text-xs text-slate-400 font-jakarta mt-1">
                We coordinate entire multi-vehicle convoys with backup drivers and dedicated coordinators.
              </p>
            </div>

            <a
              href={`tel:+91${businessInfo.phone}`}
              className="ref-btn-primary group whitespace-nowrap"
            >
              <span>Call +91 {businessInfo.phone}</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
