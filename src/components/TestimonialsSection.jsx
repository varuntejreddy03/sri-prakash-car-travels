import React from 'react';
import { Star, CheckCircle, Award, MessageSquare } from 'lucide-react';
import { testimonialsData, businessInfo } from '../data/travelData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Desktop-Friendly Full-Width Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="ref-section-tag">Verified Customer Reviews</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-[#0C2340] leading-tight mt-2">
              What Our Customers Are <br className="hidden sm:block" />
              <span className="text-gradient-gold">Saying About Us</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-jakarta mt-3">
              Real feedback from verified travelers who book our taxi and car travels services in Kakinada.
            </p>
          </div>

          {/* Right: Desktop Social Proof & Rating Badge filling the empty space */}
          <div className="bg-[#FAF9F6] border border-amber-300/40 rounded-3xl p-4 sm:p-5 flex items-center gap-4 shrink-0 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-gold-gradient text-navy-950 flex flex-col items-center justify-center font-extrabold font-outfit shadow-gold-glow shrink-0">
              <span className="text-xl leading-none">4.9</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-extrabold font-outfit text-[#0C2340] mt-1">
                1,450+ Verified Reviews
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle className="w-3 h-3" /> 100% Genuine
                </span>
                <span>•</span>
                <span>Google & Direct</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials 4-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] rounded-3xl p-6 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
                    ))}
                  </div>
                  <span className="text-amber-500/30 group-hover:text-amber-500/60 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 font-jakarta leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <p className="font-outfit font-bold text-[#0C2340] text-sm flex items-center gap-1.5 truncate">
                    <span className="truncate">{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </p>
                  <p className="text-[11px] text-amber-600 font-semibold truncate">
                    {review.city}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200 shrink-0 shadow-2xs">
                  {review.vehicle}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
