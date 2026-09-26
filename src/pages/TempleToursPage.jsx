import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Landmark, Clock, Car, CheckCircle2, ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react';
import { templePackagesData, createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function TempleToursPage({ onOpenBooking }) {
  return (
    <div>
      <PageBanner
        title="Temple Tour Packages Kakinada"
        subtitle="Spiritual pilgrimages to Annavaram, Pancharamalu, Draksharamam, Pithapuram, Bhadrachalam & Tirupati with experienced family-safe chauffeurs."
        breadcrumb="Temple Tours"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="ref-section-tag">Devotional Journeys</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 mt-2">
              Sacred Pilgrimages Across <span className="text-[#FF5B00]">Godavari & Andhra</span>
            </h2>
            <p className="text-sm text-slate-600 font-jakarta mt-2">
              Our chauffeurs understand temple pooja timings, Vratham schedules, dress codes, and senior-citizen convenience routes.
            </p>
          </div>

          {/* Pilgrimage Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templePackagesData.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#F8FAFC] rounded-3xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Temple Package Image */}
                  <div className="relative h-52 w-full rounded-2xl overflow-hidden mb-4 bg-slate-900">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FF5B00] text-white shadow-md">
                        {pkg.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white/95 font-medium">
                      <span className="flex items-center gap-1 font-bold text-amber-300">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        {pkg.duration}
                      </span>
                      <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[11px]">
                        {pkg.distance}
                      </span>
                    </div>
                  </div>

                  <Link to={`/temple-tours/${pkg.id}`}>
                    <h3 className="font-outfit font-extrabold text-2xl text-slate-900 group-hover:text-[#FF5B00] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                  </Link>
                  <p className="text-xs font-bold text-amber-700 mt-1">
                    {pkg.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 font-jakarta mt-3 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-200 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Pilgrimage Circuit Highlights:
                    </span>
                    {pkg.itinerary.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5B00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-xs text-slate-700">
                    <Car className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Recommended Fleet: <strong>{pkg.recommendedCar}</strong></span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 space-y-2.5">
                  <Link
                    to={`/temple-tours/${pkg.id}`}
                    className="w-full py-2.5 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>View Full Package & Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I am planning for ${pkg.title} (${pkg.duration}). Please share fare options and timings.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-md shadow-[#FF5B00]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book Package on WhatsApp</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Group Pilgrim Bus Strip */}
          <div className="bg-[#0B0F17] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider block">
                Group Pilgrimages
              </span>
              <h3 className="font-outfit font-extrabold text-2xl text-white mt-1">
                Planning a Group Temple Tour for 12 to 45 Persons?
              </h3>
              <p className="text-xs text-slate-400 font-jakarta mt-1">
                Book our branded 12-26 Seater Tempo Travellers or 45-Seater Luxury AC Coach buses with dual experienced drivers.
              </p>
            </div>

            <a
              href={`tel:+91${businessInfo.phone}`}
              className="ref-btn-primary group whitespace-nowrap !py-3 !px-7 text-xs"
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
