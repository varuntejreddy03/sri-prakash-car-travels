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
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-slate-700">{route.from}</span>
                  <span>→</span>
                  <span className="font-bold text-[#FF5B00]">{route.dist}</span>
                </div>

                <h3 className="font-outfit font-extrabold text-lg text-slate-900 leading-snug mb-3">
                  {route.to}
                </h3>

                <div className="space-y-1.5 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF5B00]" />
                    <span>Est. Time: <strong>{route.time}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{route.car}</span>
                  </div>
                </div>
              </div>

              <a
                href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book a taxi from ${route.from} to ${route.to} (${route.dist}). Please share fixed fare.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-colors flex items-center justify-center gap-1.5"
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
