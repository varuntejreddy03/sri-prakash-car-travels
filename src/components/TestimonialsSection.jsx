import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { testimonialsData } from '../data/travelData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="ref-section-tag">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
            What our customers are <br />
            <span className="text-[#FF5B00]">saying about us</span>
          </h2>
          <p className="text-sm text-slate-600 font-jakarta mt-3">
            Real feedback from verified travelers who book our taxi and car travels services in Kakinada.
          </p>
        </div>

        {/* Testimonials Grid matching pinterest-bulk-7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 font-jakarta leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Profile matching reference */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <p className="font-outfit font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </p>
                  <p className="text-[11px] text-[#FF5B00] font-semibold truncate max-w-[170px]">
                    {review.city}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
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
