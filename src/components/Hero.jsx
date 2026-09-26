import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Phone, CheckCircle, ShieldCheck, Star, Calendar, MapPin, User, Car } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function Hero({ onOpenBooking }) {
  const [serviceType, setServiceType] = useState('Airport Taxi Kakinada');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicle, setVehicle] = useState('Toyota Innova Crysta (7+1)');
  const [travelDate, setTravelDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const msg = `*INSTANT CAB BOOKING - SRI PRAKASH CAR TRAVELS*
━━━━━━━━━━━━━━━━━━━━
📌 *Service:* ${serviceType}
📍 *Pickup Point:* ${pickup || 'Kakinada'}
🏁 *Drop/Destination:* ${destination || 'Destination'}
🚘 *Preferred Vehicle:* ${vehicle}
📅 *Travel Date:* ${travelDate || 'Earliest available'}
👤 *Name:* ${customerName || 'Customer'}
📞 *Phone:* ${customerPhone || businessInfo.phone}
━━━━━━━━━━━━━━━━━━━━
Please share immediate fare quote and confirm cab availability.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="home" className="relative bg-[#0F141E] text-white pt-10 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090D14] via-[#0F141E] to-[#141B28] opacity-95" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#FF5B00]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Subtext, Buttons, and Counter Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Pill #1 Rated */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>#1 Rated Taxi Service in Kakinada</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-outfit text-white tracking-tight leading-[1.12]">
              Best <span className="text-[#FF5B00]">Car Travels</span> & <br />
              Taxi Service in Kakinada
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 font-jakarta max-w-xl leading-relaxed">
              Enjoy premium, comfortable, and affordable travel with <strong>Sri Prakash Car Travels</strong>. We offer 24/7 Airport Taxi Service, Local Cab Bookings, One Way & Round Trip Outstation Cabs, Temple Packages, and Corporate Travel in Kakinada & across India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="ref-btn-primary group !bg-[#FF5B00] hover:!bg-[#e04f00]"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Now: +91 {businessInfo.phone}</span>
                <span className="ref-circle-arrow">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </a>

              <a
                href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a taxi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Quick WhatsApp Booking</span>
              </a>
            </div>

            {/* 4 Stats Cards */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center sm:text-left">
                <div className="text-2xl font-extrabold font-outfit text-white">10,000+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Happy Customers</div>
              </div>

              <div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center sm:text-left">
                <div className="text-2xl font-extrabold font-outfit text-white">50,000+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Completed Trips</div>
              </div>

              <div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center sm:text-left">
                <div className="text-2xl font-extrabold font-outfit text-white">24 / 7</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">On-Time Support</div>
              </div>

              <div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center sm:text-left">
                <div className="text-2xl font-extrabold font-outfit text-[#FF5B00]">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Safe & Sanitized</div>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Cab Booking Kakinada Widget */}
          <div className="lg:col-span-5 relative" id="booking-form">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#141B28] p-6 sm:p-7">
              
              <div className="mb-5 pb-4 border-b border-white/10">
                <span className="text-[11px] font-bold tracking-widest text-[#FF5B00] uppercase block">
                  Quick Fare Quote
                </span>
                <h3 className="font-outfit font-extrabold text-xl sm:text-2xl text-white mt-1">
                  Instant Cab Booking Kakinada
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Get best fixed fare quotes directly within 60 seconds
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-3.5 font-jakarta">
                {/* Service Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Select Service Type
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5B00]"
                  >
                    <option value="Airport Taxi Kakinada">Airport Taxi Service</option>
                    <option value="Local Cab Service Kakinada">Local City Taxi</option>
                    <option value="Outstation Taxi Kakinada">Outstation Cab (One Way / Round Trip)</option>
                    <option value="Temple Tour Packages">Temple Pilgrimage Package</option>
                    <option value="Corporate / Event Booking">Corporate & Wedding Car Booking</option>
                  </select>
                </div>

                {/* Pickup & Drop Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Pickup Point
                    </label>
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Kakinada Main Town"
                      required
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
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
                      placeholder="e.g. Rajahmundry Airport"
                      required
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>
                </div>

                {/* Vehicle & Date Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Vehicle
                    </label>
                    <select
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5B00]"
                    >
                      <option value="Swift Dzire / Amaze (4+1)">Swift Dzire / Amaze (4+1)</option>
                      <option value="Maruti Ertiga (6+1)">Maruti Ertiga (6+1)</option>
                      <option value="Kia Carens (6+1)">Kia Carens (6+1)</option>
                      <option value="Toyota Innova Crysta (7+1)">Toyota Innova Crysta (7+1)</option>
                      <option value="Tempo Traveller (12-26 Seater)">Tempo Traveller (12-26 Seater)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      required
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Full Name"
                      required
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Mobile Number"
                      required
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm bg-[#FF5B00] hover:bg-[#E04F00] text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF5B00]/30 mt-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Get Fare Quote on WhatsApp</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
