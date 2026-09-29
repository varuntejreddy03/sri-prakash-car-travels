import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle, ShieldCheck, Phone, Zap } from 'lucide-react';
import { tariffRatesData, createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function TariffSection({ onOpenBooking }) {
  return (
    <section id="tariff" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#FF5B00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5B00]/20 border border-[#FF5B00]/40 text-xs font-bold text-[#FF5B00]">
            <Zap className="w-3.5 h-3.5" />
            <span>100% Fixed & Transparent Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Kakinada Car Travels <br />
            <span className="text-[#FF5B00]">Tariff & Fare Card</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-jakarta leading-relaxed">
            Zero hidden charges. No midnight surge fees. What we quote is exactly what you pay. Toll and parking at actuals.
          </p>
        </div>

        {/* Responsive Tariff Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-[#0F141E]/90 shadow-2xl backdrop-blur-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-jakarta">
            <thead>
              <tr className="border-b border-slate-800 bg-white/5 text-slate-300 font-outfit text-xs sm:text-sm uppercase tracking-wider">
                <th className="py-4 px-4 sm:px-6">Vehicle Class</th>
                <th className="py-4 px-4 sm:px-6">Capacity</th>
                <th className="py-4 px-4 sm:px-6">Outstation Per KM</th>
                <th className="py-4 px-4 sm:px-6">Driver Batta</th>
                <th className="py-4 px-4 sm:px-6">Airport Transfer</th>
                <th className="py-4 px-4 sm:px-6 text-center">Instant Quote</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {tariffRatesData.map((item, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-white/[0.04] transition-colors"
                >
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-10 rounded-xl overflow-hidden bg-slate-800 shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.vehicle} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <strong className="font-outfit text-white text-sm sm:text-base block">
                          {item.vehicle}
                        </strong>
                        <span className="text-[11px] text-slate-400">
                          {item.idealFor}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-300 font-semibold whitespace-nowrap">
                    {item.type}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-bold text-[#FF5B00] text-sm sm:text-base whitespace-nowrap">
                    {item.perKm}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-300 whitespace-nowrap">
                    {item.driverBatta}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-emerald-400 font-medium whitespace-nowrap">
                    {item.airportRJA}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-center whitespace-nowrap">
                    <a
                      href={createWhatsAppUrl(`Hi Sri Prakash Travels, what is the best fare for ${item.vehicle} (${item.type})?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FF5B00] hover:bg-[#e04f00] text-white font-bold text-xs shadow-md transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Book</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Guarantees Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Zero Surge Pricing:</strong> No unexpected nighttime or festival multipliers.</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#FF5B00] shrink-0" />
            <span><strong>Own Verified Fleet:</strong> Genuine AP commercial yellow-board vehicles.</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
            <Phone className="w-5 h-5 text-amber-400 shrink-0" />
            <span><strong>24/7 Dispatch Hotline:</strong> Call +91 9848903025 anytime, 365 days.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
