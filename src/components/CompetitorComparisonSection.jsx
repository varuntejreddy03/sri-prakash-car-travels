import React from 'react';
import { Check, X, ShieldAlert, Award, Star, ArrowRight } from 'lucide-react';
import { competitorComparisonData, businessInfo } from '../data/travelData';

export default function CompetitorComparisonSection({ onOpenBooking }) {
  return (
    <section id="why-sri-prakash" className="py-20 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-700">
            <Award className="w-3.5 h-3.5" />
            <span>Kakinada's #1 Most Trusted Travel Operator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-[#0C2340] leading-tight">
            Why Sri Prakash Car Travels <br />
            <span className="text-gradient-gold">Beats Other Cabs in Kakinada</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed">
            There are over 40 travel operators in Kakinada, but here is why 10,000+ local families, doctors, port executives, and pilgrims trust us for every single journey.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-jakarta">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-outfit text-xs sm:text-sm">
                <th className="py-5 px-4 sm:px-6 w-1/4">Key Travel Factor</th>
                <th className="py-5 px-4 sm:px-6 w-2/5 bg-amber-50/80 border-x border-amber-300/60 text-[#0C2340] font-bold">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>Sri Prakash Car Travels</span>
                  </div>
                </th>
                <th className="py-5 px-4 sm:px-6 text-slate-500 font-medium">
                  Online App Aggregators
                </th>
                <th className="py-5 px-4 sm:px-6 text-slate-500 font-medium">
                  Other Local Cabs
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {competitorComparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-outfit font-bold text-[#0C2340]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 sm:px-6 bg-amber-50/30 border-x border-amber-200/50 text-slate-900 font-semibold">
                    <div className="flex items-start gap-2 text-emerald-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-900 font-medium">{row.sriPrakash}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.appAggregators}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500">
                    <div className="flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.otherLocalCabs}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenBooking}
            className="ref-btn-primary group inline-flex"
          >
            <span>Book with Kakinada's #1 Car Travels</span>
            <span className="ref-circle-arrow">
              <ArrowRight className="w-3 h-3 text-navy-950" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
