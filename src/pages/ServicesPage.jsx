import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { servicesData, createWhatsAppUrl, businessInfo } from '../data/travelData';
import { Plane, Compass, Landmark, MapPin, Palmtree, Briefcase, Heart, Users, Route, CalendarCheck, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const iconMap = {
  Plane: Plane,
  Compass: Compass,
  Landmark: Landmark,
  MapPin: MapPin,
  Palmtree: Palmtree,
  Briefcase: Briefcase,
  Heart: Heart,
  Users: Users,
  Route: Route,
  CalendarCheck: CalendarCheck
};

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div>
      <SEOHead
        title="Taxi & Cab Services in Kakinada – Local, Outstation, Airport & Temple Tours"
        description="Complete taxi services by Sri Prakash Car Travels Kakinada: local city cabs, airport transfers, outstation one-way & round trips, temple pilgrimages, wedding cars, and corporate travel."
        canonical="/services"
        keywords="taxi services Kakinada, outstation cabs Kakinada, airport taxi Kakinada, wedding car booking Kakinada"
      />
      <PageBanner
        title="Our Services"
        subtitle="Explore our comprehensive transportation services: Airport taxis, outstation cabs, temple packages, and luxury group coaches."
        breadcrumb="Services"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="ref-section-tag">Decisive & Specific</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 mt-2">
              Tailored Travel Solutions in <span className="text-[#FF5B00]">Kakinada</span>
            </h2>
            <p className="text-sm text-slate-600 font-jakarta mt-2">
              Every service is delivered with professional chauffeurs, sanitized AC vehicles, and transparent fixed billing.
            </p>
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.icon] || Compass;
              return (
                <div
                  key={svc.id}
                  className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Service Image Banner */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={svc.image}
                      alt={`${svc.title} Kakinada`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent"></div>
                    
                    {/* Badge & Icon on Image */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md text-[#FF5B00] shadow-md border border-white/50 flex items-center justify-center shrink-0 group-hover:bg-[#FF5B00] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-semibold bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 24/7 Available in Kakinada
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <Link to={`/services/${svc.id}`}>
                          <h3 className="font-outfit font-extrabold text-2xl text-slate-900 group-hover:text-[#FF5B00] transition-colors leading-snug">
                            {svc.title}
                          </h3>
                        </Link>
                      </div>

                      <p className="text-sm text-slate-600 font-jakarta leading-relaxed mb-6">
                        {svc.shortDesc}
                      </p>

                      {/* Inclusions */}
                      <div className="space-y-2 mb-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Service Features & Inclusions:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {svc.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00]"></span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Popular Routes / Destinations */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Frequently Requested:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {svc.popularDestinations.map((dest, i) => (
                            <span
                              key={i}
                              className="text-xs text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs"
                            >
                              {dest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 mt-6 border-t border-slate-200 flex flex-wrap sm:flex-nowrap items-center gap-3">
                      <Link
                        to={`/services/${svc.id}`}
                        className="py-2.5 px-4 rounded-full font-bold text-xs bg-slate-900 hover:bg-[#FF5B00] text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>Explore Subpage</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${svc.title}. Please provide rates and details.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-full font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-md shadow-[#FF5B00]/30 transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>WhatsApp Book</span>
                      </a>

                      <button
                        onClick={onOpenBooking}
                        className="ref-btn-outline !py-2.5 !px-4 text-xs"
                      >
                        Fast Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emergency Booking Strip */}
          <div className="bg-[#0B0F17] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider">
                Custom Requirements?
              </span>
              <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-white">
                Need an Immediate Taxi or Early Morning Airport Ride?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-jakarta max-w-xl">
                We confirm airport transfers and emergency city rides within 2 minutes. Call our 24/7 hotline directly.
              </p>
            </div>

            <a
              href={`tel:+91${businessInfo.phone}`}
              className="ref-btn-primary group whitespace-nowrap !py-3.5 !px-8 text-sm"
            >
              <span>Call +91 {businessInfo.phone}</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
