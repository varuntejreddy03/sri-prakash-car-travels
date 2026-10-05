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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="ref-section-tag">Our Premium Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
              Complete <span className="text-[#FF5B00]">Taxi & Cab Services</span> in Kakinada
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
              <ArrowRight className="w-3 h-3 text-white" />
            </span>
          </Link>
        </div>

        {/* 9+ Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item) => {
            const Icon = iconMap[item.icon] || MapPin;
            const isHighlighted = item.id === 'airport-taxi';

            if (isHighlighted) {
              return (
                <div
                  key={item.id}
                  className="rounded-3xl overflow-hidden bg-[#FF5B00] text-white shadow-xl shadow-[#FF5B00]/25 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 group"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={`${item.title} in Kakinada`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF5B00] via-[#FF5B00]/40 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-extrabold bg-white text-[#FF5B00] uppercase shadow-md tracking-wider">
                      24/7 Flight Pickup
                    </span>
                  </div>

                  <div className="p-7 pt-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-outfit font-extrabold text-2xl text-white leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/95 font-jakarta leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>

                    <div className="pt-6 flex items-center justify-between border-t border-white/25 mt-5">
                      <Link
                        to={`/services/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline"
                      >
                        <span>Explore Rates & Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${item.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF5B00] flex items-center justify-center transition-colors shadow-sm"
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
                className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Card Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={`${item.title} Kakinada`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#FF5B00] border border-white/50 shadow-md group-hover:bg-[#FF5B00] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-3 left-4 text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                    Kakinada Travel
                  </span>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-outfit font-extrabold text-xl text-slate-900 group-hover:text-[#FF5B00] transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center justify-between border-t border-slate-100 mt-5">
                    <Link
                      to={`/services/${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#FF5B00] transition-colors"
                    >
                      <span>View Rates & Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${item.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-emerald-500 text-slate-500 hover:text-white flex items-center justify-center transition-colors"
                      title="WhatsApp"
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
