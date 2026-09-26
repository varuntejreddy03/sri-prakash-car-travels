import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Phone, CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function Hero({ onOpenBooking }) {
  const [serviceType, setServiceType] = useState('Airport Taxi');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicle, setVehicle] = useState('Toyota Innova Crysta (7+1)');

  const handleQuickBook = (e) => {
    e.preventDefault();
    const msg = `*Quick Cab Enquiry - Sri Prakash Car Travels*
━━━━━━━━━━━━━━━━━━━━
📌 *Service:* ${serviceType}
📍 *Pickup Point:* ${pickup || 'Kakinada'}
🏁 *Destination:* ${destination || 'Airport / Outstation'}
🚘 *Preferred Car:* ${vehicle}
━━━━━━━━━━━━━━━━━━━━
Please share the best fixed fare quote.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="home" className="relative bg-[#0F141E] text-white pt-12 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090D14] via-[#0F141E] to-[#141B28] opacity-95" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#FF5B00]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Subtext, Buttons, and Counter Stats matching reference */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Pill with Red Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#FF5B00]"></span>
              <span>Trusted by 50,000+ customers</span>
            </div>

            {/* Main Headline matching reference */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-outfit text-white tracking-tight leading-[1.12]">
              Quick And Reliable <br />
              <span className="text-[#FF5B00]">Car Travels</span> Services
            </h1>

            {/* Subtext matching reference */}
            <p className="text-base sm:text-lg text-slate-300 font-jakarta max-w-xl leading-relaxed">
              Experience the freedom of the road with our reliable fleet. From Kakinada city trips to Rajahmundry & Vizag airport transfers and temple pilgrimages, we've got you covered.
            </p>

            {/* Action Buttons matching reference (Pill with circle arrow) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#fleet"
                className="ref-btn-primary group"
              >
                <span>Browse Cars</span>
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
                <span>Book on WhatsApp</span>
                <span className="ref-circle-arrow bg-white/20">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </a>
            </div>

            {/* Horizontal Stats Counter (500+ / 50K+ / 24/7) matching reference */}
            <div className="pt-8 border-t border-white/10 flex items-center gap-8 sm:gap-14">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-outfit text-white">
                  500+
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  Monthly Trips
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-outfit text-white">
                  50K+
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  Happy Customers
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-outfit text-white">
                  24/7
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  On-Time Support
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Car Visual matching reference */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#141B28]/90 p-2 sm:p-3 group">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-black/60">
                <img
                  src="/images/innova-crysta.jpg"
                  alt="Toyota Innova Crysta Sri Prakash Car Travels"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Overlay Vehicle Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#FF5B00] border border-[#FF5B00]/40">
                    Flagship Fleet
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-outfit font-extrabold text-lg text-white">
                      Toyota Innova Crysta
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      AP 39 UZ 3223 • Executive 7+1 Seater
                    </p>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FF5B00] text-white hover:bg-[#E04F00] shadow-md transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Quick Instant Route Bar below Hero Image */}
              <form onSubmit={handleQuickBook} className="p-3 pt-4 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup (e.g. Kakinada)"
                    className="bg-[#0B0F17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                  />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destination (e.g. RJA Airport)"
                    className="bg-[#0B0F17] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#FF5B00]/30"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Get Instant Fare Quote on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
