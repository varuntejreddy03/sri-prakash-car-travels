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

        {/* 9+ Services Grid matching competitor cartravelsinkakinada.in */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item) => {
            const Icon = iconMap[item.icon] || MapPin;

            return (
              <div
                key={item.id}
                className="comp-service-card group"
              >
                {/* Service Header matching competitor: icon box + title */}
                <div className="p-7 pb-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5B00]/15 to-blue-600/15 text-[#FF5B00] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#FF5B00] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-extrabold text-xl text-slate-900 group-hover:text-[#FF5B00] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Service Body matching competitor */}
                <div className="px-7 py-2 flex-1">
                  <p className="text-sm text-slate-600 font-jakarta leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Service Footer matching competitor: dashed border with link and icon */}
                <div className="p-7 pt-4 mt-4 border-t border-dashed border-slate-200 flex items-center justify-between">
                  <Link
                    to={`/services/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-[#FF5B00] transition-colors"
                  >
                    <span>Book {item.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${item.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#25D366] text-slate-500 hover:text-white flex items-center justify-center transition-all shadow-sm"
                    title="WhatsApp Quote"
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
