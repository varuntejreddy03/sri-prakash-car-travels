import React from 'react';
import { MapPin, Clock, Car, MessageCircle, ArrowRight } from 'lucide-react';
import { popularRoutes, createWhatsAppUrl } from '../data/travelData';

export default function PopularRoutesSection() {
  return (
    <section id="routes" className="py-20 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="ref-section-tag">Popular Routes</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
            Top "Kakinada To" <br />
            <span className="text-[#FF5B00]">Outstation Cab Routes</span>
          </h2>
          <p className="text-sm text-slate-600 font-jakarta mt-3">
            One-way drop and round-trip outstation cabs with transparent distance billing and highway-experienced chauffeurs.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.map((route, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Route Thumbnail Image */}
                <div className="relative h-36 w-full rounded-2xl overflow-hidden mb-3.5 bg-slate-900">
                  <img
                    src={route.image}
                    alt={route.to}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FF5B00] text-white shadow-sm">
                      {route.from} → {route.to.split(' ')[0]}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                    <span className="font-bold text-amber-300">{route.dist}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-300" />
                      {route.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="font-semibold text-slate-600">{route.from}</span>
                  <span>→</span>
                  <span className="font-bold text-[#FF5B00]">{route.dist}</span>
                </div>

                <h3 className="font-outfit font-extrabold text-lg text-slate-900 leading-snug mb-2 group-hover:text-[#FF5B00] transition-colors">
                  {route.to}
                </h3>

                <div className="space-y-1 py-2 border-y border-slate-100 text-xs text-slate-600 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate text-[11px]">{route.car}</span>
                  </div>
                </div>
              </div>

              <a
                href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book a taxi from ${route.from} to ${route.to} (${route.dist}). Please share fixed fare.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Check Fixed Fare</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
