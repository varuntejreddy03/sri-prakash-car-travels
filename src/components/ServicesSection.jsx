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
          {servicesData.map((item, index) => {
            const Icon = iconMap[item.icon] || MapPin;
            const isHighlighted = item.id === 'airport-taxi';

            if (isHighlighted) {
              return (
                <div
                  key={item.id}
                  className="rounded-3xl p-7 bg-[#FF5B00] text-white shadow-xl shadow-[#FF5B00]/25 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-outfit font-extrabold text-xl text-white leading-snug">
                        {item.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-[#FF5B00] uppercase">
                        24/7 Flight
                      </span>
                    </div>
                    <p className="text-xs text-white/90 font-jakarta leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center justify-between border-t border-white/20 mt-4">
                    <Link
                      to={`/services/${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${item.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/90 hover:text-white"
                      title="WhatsApp Quote"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-[#FF5B00]/10 flex items-center justify-center text-slate-800 group-hover:text-[#FF5B00] transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit font-extrabold text-xl text-slate-900 group-hover:text-[#FF5B00] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-slate-100 mt-4">
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
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
