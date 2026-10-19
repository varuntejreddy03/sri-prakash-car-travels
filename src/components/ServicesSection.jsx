import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  MapPin, 
  Compass, 
  Route, 
  Landmark, 
  Palmtree, 
  Briefcase, 
  Heart, 
  CalendarCheck, 
  Users, 
  ArrowRight, 
  MessageCircle 
} from 'lucide-react';
import { servicesData, createWhatsAppUrl } from '../data/travelData';

// Map icon string to Lucide component
const iconMap = {
  MapPin,
  Plane,
  Compass,
  Route,
  Landmark,
  Palmtree,
  Briefcase,
  Heart,
  CalendarCheck,
  Users
};

export default function ServicesSection({ onOpenBooking }) {
  return (
    <section id="services" className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="ref-section-tag">Our Premium Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-[#0C2340] leading-tight mt-2">
              Complete <span className="text-gradient-gold">Taxi & Cab Services</span> in Kakinada
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-jakarta mt-3 max-w-2xl">
              Tailored transportation solutions for individuals, families, tourists, and corporate organizations.
            </p>
          </div>

          <Link
            to="/services"
            className="ref-btn-primary group self-start md:self-auto shrink-0"
          >
            <span>View All Services</span>
            <span className="ref-circle-arrow">
              <ArrowRight className="w-3 h-3 text-navy-950" />
            </span>
          </Link>
        </div>

        {/* 10 Services Grid with 4 in a row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((item) => {
            const Icon = iconMap[item.icon] || MapPin;
            const isHighlighted = item.id === 'airport-taxi';

            if (isHighlighted) {
              return (
                <div
                  key={item.id}
                  className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#040B17] via-[#08172C] to-[#0C2340] text-white border border-amber-400/40 shadow-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 group relative"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={`${item.title} in Kakinada`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08172C] via-[#08172C]/50 to-transparent"></div>
                    <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-2xl bg-gold-gradient text-navy-950 flex items-center justify-center shadow-gold-glow">
                      <Icon className="w-5 h-5 text-navy-950" />
                    </div>
                    <span className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-gold-gradient text-navy-950 uppercase shadow-gold-glow tracking-wider">
                      24/7 Flight Pickup
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 pt-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-outfit font-extrabold text-lg sm:text-xl text-white leading-snug mb-2 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-jakarta leading-relaxed line-clamp-3">
                        {item.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/15 mt-4">
                      <Link
                        to={`/services/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-white transition-colors"
                      >
                        <span>Explore Rates</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${item.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-amber-400/20 hover:bg-gold-gradient text-amber-400 hover:text-navy-950 flex items-center justify-center transition-all shadow-sm"
                        title="WhatsApp Quote"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="bg-[#FAF9F6] rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Card Image Banner */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={`${item.title} Kakinada`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0C2340] border border-white/50 shadow-md group-hover:bg-gold-gradient group-hover:text-navy-950 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-2.5 left-3.5 text-[10px] font-bold text-white bg-[#040B17]/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                    Kakinada Travel
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-outfit font-extrabold text-lg sm:text-xl text-[#0C2340] group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-jakarta leading-relaxed line-clamp-3">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-200 mt-4">
                    <Link
                      to={`/services/${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C2340] group-hover:text-amber-500 transition-colors"
                    >
                      <span>View Rates</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                    </Link>
                    <a
                      href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${item.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-emerald-500 text-slate-500 hover:text-white flex items-center justify-center transition-all shadow-sm"
                      title="WhatsApp Quote"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
