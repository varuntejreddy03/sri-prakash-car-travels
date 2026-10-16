import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Users, Briefcase, Snowflake, Fuel, Check, MessageCircle, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { fleetData, createWhatsAppUrl, businessInfo } from '../data/travelData';
import SEOHead from '../components/SEOHead';

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

  const fleetSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sri Prakash Car Travels Fleet - Kakinada",
    "description": "Available car rentals and taxi fleet in Kakinada including sedans, luxury MPVs, and group travel buses.",
    "itemListElement": fleetData.map((car, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Product",
        "name": car.name,
        "image": `https://sriprakashcartravelskakinada.com${car.image}`,
        "description": car.idealFor,
        "category": car.categoryLabel,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "1500",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <div>
      <SEOHead
        title="Our Fleet – Dzire, Innova Crysta, Tempo Traveller & Luxury Bus Hire"
        description="Explore Sri Prakash Car Travels' verified fleet in Kakinada: Maruti Dzire, Toyota Etios, Innova Crysta, Kia Carens, Force Urbania, Tempo Traveller & AC Luxury Coach. Book 24/7."
        canonical="/cars"
        keywords="Innova Crysta cab Kakinada, Dzire car hire Kakinada, Tempo Traveller Kakinada, luxury car rental Kakinada"
        schema={fleetSchema}
      />
      <PageBanner
        title="Our Verified Fleet"
        subtitle="Explore our sanitized, chauffeur-driven cars, luxury MPVs, and tourist buses available 24/7 in Kakinada."
        breadcrumb="Cars"
      />

      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="ref-section-tag">Explore Fleet</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-navy-950 mt-1">
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
                      ? 'bg-gold-gradient text-navy-950 shadow-gold-glow font-bold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-amber-50/50'
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
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-amber-600 border border-amber-300 shadow-sm">
                        {car.tag}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-900 shadow-sm">
                        {car.registration}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-outfit font-extrabold text-2xl text-navy-950 group-hover:text-amber-500 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-jakarta mt-1">
                    {car.idealFor}
                  </p>

                  {/* 4-Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2.5 py-4 my-4 border-y border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-500" />
                      <span>{car.seats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-amber-500" />
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
                        <Check className="w-3 h-3 text-amber-500" />
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
                    className="flex-1 py-3 rounded-full font-bold text-xs bg-gold-gradient hover:opacity-95 text-navy-950 shadow-gold-glow transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectVehicle(car)}
                    className="p-3 rounded-full bg-slate-100 hover:bg-amber-50 text-navy-900 transition-colors"
                    title="View Specs"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Help Strip */}
          <div className="mt-16 bg-gradient-to-r from-[#040B17] to-[#0C2340] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-amber-400/20">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
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
