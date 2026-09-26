import React from 'react';
import PageBanner from '../components/PageBanner';
import { ShieldCheck, Award, Users, HeartHandshake, ArrowRight, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div>
      <PageBanner
        title="About Sri Prakash Car Travels"
        subtitle="15+ Years of trusted taxi and car travels service in Kakinada, Andhra Pradesh."
        breadcrumb="About"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
          
          {/* Main Story Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="ref-section-tag">Our Legacy</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight">
                Setting The Standard for <br />
                <span className="text-[#FF5B00]">Travels in Kakinada</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed">
                Founded with a mission to make outstation and local travel safe, transparent, and completely comfortable, <strong>Sri Prakash Car Travels</strong> has grown into Kakinada's most respected car travels operator.
              </p>

              <p className="text-sm text-slate-600 font-jakarta leading-relaxed">
                Unlike app aggregators who outsource drivers and hike prices with unpredictable surges, we operate our own authentic fleet of sedans, luxury MPVs, and AC buses driven by verified, experienced chauffeurs who treat passengers like family.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="ref-btn-primary group"
                >
                  <span>Book Your Ride</span>
                  <span className="ref-circle-arrow">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                </button>

                <a
                  href={`tel:+91${businessInfo.phone}`}
                  className="ref-btn-outline text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
                  <span>Call +91 {businessInfo.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/11] bg-slate-900">
                <img
                  src="/images/tempo-traveller.jpg"
                  alt="Sri Prakash Car Travels Branded Vehicle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4 Pillars of Excellence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-100">
            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF5B00] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-bold text-slate-900 text-lg mb-1">Safety First</h3>
              <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                All vehicles undergo strict mechanical inspections, deep interior sanitization, and are equipped with GPS tracking.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-bold text-slate-900 text-lg mb-1">Verified Chauffeurs</h3>
              <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                Courteous, background-verified chauffeurs with deep knowledge of Ghat routes, temple timings, and smooth driving manners.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-bold text-slate-900 text-lg mb-1">100% Fixed Rates</h3>
              <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                Zero hidden charges, transparent toll and driver allowance billing, and no cancellation surprise fees.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-bold text-slate-900 text-lg mb-1">Customer Priority</h3>
              <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                Over 50,000 completed trips and 10,000+ satisfied repeat customers who rely on us for every travel occasion.
              </p>
            </div>
          </div>

          {/* Office Address & Location Card */}
          <div className="bg-[#0B0F17] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider">
                Visit Our Office
              </span>
              <h3 className="font-outfit font-extrabold text-2xl text-white">
                Located in the Heart of Kakinada
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-jakarta max-w-xl">
                {businessInfo.address}
              </p>
            </div>

            <a
              href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I would like to visit or book a cab.")}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-btn-primary group whitespace-nowrap !py-3.5 !px-8 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
