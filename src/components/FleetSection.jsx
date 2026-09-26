import React, { useState } from 'react';
import { Users, Car, Snowflake, ArrowRight, MessageCircle } from 'lucide-react';
import { fleetData, createWhatsAppUrl } from '../data/travelData';

export default function FleetSection({ onSelectVehicle, onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Vehicles' },
    { id: 'sedan', label: 'Sedans (4+1)' },
    { id: 'suv', label: 'SUV & MPV (6+1 / 7+1)' },
    { id: 'group', label: 'Tempo Traveller & Bus' },
  ];

  const filteredFleet = activeFilter === 'all'
    ? fleetData
    : fleetData.filter(car => car.category === activeFilter);

  return (
    <section id="fleet" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching competitor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="ref-section-tag">Our Premium Vehicles</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
              Well-Maintained <span className="text-[#FF5B00]">Car Travels Fleet</span> in Kakinada
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-jakarta mt-3 max-w-2xl">
              Choose from modern sedans, spacious MPVs, luxury SUVs, and tempo travellers for all group sizes.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-[#FF5B00] text-white shadow-md shadow-[#FF5B00]/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="ref-btn-primary group !py-2 !px-4 text-xs"
            >
              <span>View Fleet</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </button>
          </div>
        </div>

        {/* Fleet Cards Grid matching pinterest-bulk-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredFleet.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={car.image}
                    alt={`${car.name} Sri Prakash Car Travels`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top Right Category Pill Badge matching reference */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#FF5B00] border border-orange-200 shadow-sm">
                      {car.tag}
                    </span>
                  </div>

                  {/* Top Left Registration Plate */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-900 shadow-sm">
                      {car.registration}
                    </span>
                  </div>
                </div>

                {/* Car Title */}
                <h3 className="font-outfit font-extrabold text-xl text-slate-900 group-hover:text-[#FF5B00] transition-colors leading-snug">
                  {car.name}
                </h3>
                <p className="text-xs text-slate-500 font-jakarta mt-0.5 line-clamp-1">
                  {car.idealFor}
                </p>

                {/* Specs List matching reference format (Cars, Types, Transmission/AC) */}
                <div className="space-y-2 py-3.5 my-3 border-y border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#FF5B00]" />
                    <span><strong>Capacity:</strong> {car.seats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-slate-500" />
                    <span><strong>Type:</strong> {car.categoryLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Snowflake className="w-3.5 h-3.5 text-cyan-500" />
                    <span><strong>Comfort:</strong> {car.ac}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Price & Book Now Pill Button matching reference */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Pricing
                  </span>
                  <span className="text-sm font-extrabold font-outfit text-slate-900">
                    {car.startingRate}
                  </span>
                </div>

                <a
                  href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${car.name} (${car.registration}). Please share rates.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full font-bold text-xs bg-[#FF5B00] text-white hover:bg-[#E04F00] shadow-md shadow-[#FF5B00]/30 transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Book Now</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
