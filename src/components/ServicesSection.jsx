import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, UserCheck, Briefcase, CalendarClock, Crown, Building2, MapPin, Landmark, ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/travelData';

export default function ServicesSection({ onOpenBooking }) {
  const services = [
    {
      id: "car-rental-with-driver",
      icon: UserCheck,
      title: "Car Rental With Driver",
      desc: "Travel in comfort with a professional, verified chauffeur across Kakinada & Andhra Pradesh.",
      isHighlighted: true,
    },
    {
      id: "airport-taxi",
      icon: Plane,
      title: "Airport Transfer",
      desc: "Seamless 24/7 pickup and drop-off right at Rajahmundry (RJA) & Vizag (VTZ) airports.",
      isHighlighted: false,
    },
    {
      id: "chauffeur-service",
      icon: Crown,
      title: "Chauffeur Service",
      desc: "Arrive in style with our premium VIP chauffeur service in Innova Crysta & Kia Carens.",
      isHighlighted: false,
    },
    {
      id: "corporate-travel",
      icon: Briefcase,
      title: "Business Car Rental",
      desc: "Flexible and reliable transport solutions for your client meetings and industrial visits.",
      isHighlighted: false,
    },
    {
      id: "temple-tours",
      icon: Landmark,
      title: "Temple Tour Packages",
      desc: "Spiritual pilgrimage cabs to Annavaram, Pancharamalu, Draksharamam, Pithapuram & Tirupati.",
      isHighlighted: false,
    },
    {
      id: "corporate-travel",
      icon: Building2,
      title: "Corporate Solutions",
      desc: "Customizable employee transport and executive rental plans with GST billing.",
      isHighlighted: false,
    },
    {
      id: "outstation-cabs",
      icon: MapPin,
      title: "One-Way Rentals",
      desc: "Travel between cities (Kakinada to Vijayawada, Vizag, Hyderabad) without needing to return.",
      isHighlighted: false,
    },
    {
      id: "local-city-taxi",
      icon: CalendarClock,
      title: "Long-Term Rentals",
      desc: "Flexible rental options for a week, month, or customized duration with dedicated driver.",
      isHighlighted: false,
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching pinterest-bulk-5 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="ref-section-tag">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
              Flexible rental solutions <br />
              <span className="text-[#FF5B00]">for every journey</span>
            </h2>
          </div>

          <Link
            to="/services"
            className="ref-btn-primary group self-start md:self-auto"
          >
            <span>View All Services</span>
            <span className="ref-circle-arrow">
              <ArrowRight className="w-3 h-3 text-white" />
            </span>
          </Link>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            
            if (item.isHighlighted) {
              return (
                <div
                  key={index}
                  className="rounded-3xl p-7 bg-[#FF5B00] text-white shadow-xl shadow-[#FF5B00]/25 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-extrabold text-xl text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/90 font-jakarta leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <Link
                      to={`/services/${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline"
                    >
                      <span>Explore Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${item.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/80 hover:text-white"
                      title="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-200/60 flex items-center justify-center text-slate-800 group-hover:bg-[#FF5B00] group-hover:text-white transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit font-extrabold text-xl text-slate-900 group-hover:text-[#FF5B00] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <Link
                    to={`/services/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5B00] hover:underline"
                  >
                    <span>View Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${item.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-500 transition-colors"
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
