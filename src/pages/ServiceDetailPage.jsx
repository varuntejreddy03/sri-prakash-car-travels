import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { servicesData, fleetData, createWhatsAppUrl, businessInfo } from '../data/travelData';
import { CheckCircle2, ShieldCheck, Clock, MapPin, Car, MessageCircle, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ServiceDetailPage({ onOpenBooking }) {
  const { serviceId } = useParams();

  // Find matching service or fallback to first
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [car, setCar] = useState('Toyota Innova Crysta (7+1)');
  const [date, setDate] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    const msg = `*NEW BOOKING ENQUIRY - ${service.title}*
━━━━━━━━━━━━━━━━━━━━
📌 *Service:* ${service.title}
📍 *Pickup:* ${pickup || 'Kakinada'}
🏁 *Drop/Dest:* ${destination || 'As per itinerary'}
🚘 *Preferred Car:* ${car}
📅 *Date:* ${date || 'Earliest available'}
━━━━━━━━━━━━━━━━━━━━
Please share driver details and best fixed rate.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <div>
      <PageBanner
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumb={service.title}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          <div className="flex items-center justify-between">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#FF5B00] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>
            <span className="badge-orange-pill text-xs">24/7 Available</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Comprehensive Service Details */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview */}
              <div>
                <span className="ref-section-tag">Service Overview</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-slate-900 mt-2">
                  Complete Details & Experience
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed mt-4">
                  {service.shortDesc}
                </p>
                <p className="text-sm text-slate-600 font-jakarta leading-relaxed mt-3">
                  At Sri Prakash Car Travels, we understand that every journey requires punctuality, immaculate car cleanliness, and polite driver etiquette. Our <strong>{service.title}</strong> is designed to offer maximum peace of mind with upfront, fixed fares and zero hidden charges.
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 space-y-4">
                <h3 className="font-outfit font-extrabold text-xl text-slate-900">
                  What's Included in This Service
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Clean, Sanitized & AC Vehicles</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Polite Local Chauffeur in Uniform</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Transparent Fixed Kilometer Billing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24/7 Roadside Assistance & Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Recommended Vehicles for This Service */}
              <div>
                <h3 className="font-outfit font-extrabold text-2xl text-slate-900 mb-6">
                  Recommended Vehicles for {service.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {fleetData.slice(0, 3).map((car) => (
                    <div key={car.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                        <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-outfit font-bold text-slate-900 text-sm">{car.name}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{car.seats}</p>
                        <a
                          href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${car.name} for ${service.title}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 block text-center py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-[#FF5B00] text-white transition-colors"
                        >
                          Book This Car
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Destinations / Routes */}
              <div>
                <h3 className="font-outfit font-extrabold text-xl text-slate-900 mb-4">
                  Popular Routes & Stops
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.popularDestinations.map((dest, i) => (
                    <span key={i} className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                      📍 {dest}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Direct WhatsApp Booking Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-[#0F141E] text-white rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl">
                <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider block mb-1">
                  Instant Reservation
                </span>
                <h3 className="font-outfit font-black text-xl text-white">
                  Book {service.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 mb-5">
                  Confirm price quote and driver details on WhatsApp in 60 seconds.
                </p>

                <form onSubmit={handleBooking} className="space-y-3.5 font-jakarta">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Pickup Point
                    </label>
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Kakinada City"
                      required
                      className="w-full bg-[#1A2234] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Destination / Drop
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Airport / City"
                      required
                      className="w-full bg-[#1A2234] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Vehicle Preference
                    </label>
                    <select
                      value={car}
                      onChange={(e) => setCar(e.target.value)}
                      className="w-full bg-[#1A2234] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5B00]"
                    >
                      <option value="Swift Dzire (Sedan 4+1)">Swift Dzire (4+1)</option>
                      <option value="Toyota Etios (Sedan 4+1)">Toyota Etios (4+1)</option>
                      <option value="Kia Carens (Luxury 6+1)">Kia Carens (6+1)</option>
                      <option value="Toyota Innova Crysta (7+1)">Toyota Innova Crysta (7+1)</option>
                      <option value="Force Urbania (10-17)">Force Urbania (10-17)</option>
                      <option value="Tempo Traveller (12-26)">Tempo Traveller (12-26)</option>
                      <option value="Luxury Bus (32-45)">Luxury AC Bus (32-45)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#1A2234] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-lg shadow-[#FF5B00]/30 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Get Fare Quote on WhatsApp</span>
                  </button>

                  <a
                    href={`tel:+91${businessInfo.phone}`}
                    className="w-full py-2.5 rounded-full font-bold text-xs bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
                    <span>Call Helpline: +91 {businessInfo.phone}</span>
                  </a>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
