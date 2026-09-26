import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Airport Taxi');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*Contact Inquiry - Sri Prakash Car Travels*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📌 *Service:* ${service}
📝 *Notes:* ${notes || 'Looking for quick quote'}`;

    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="ref-section-tag">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
            Contact <span className="text-[#FF5B00]">Sri Prakash Car Travels</span>
          </h2>
          <p className="text-sm text-slate-600 font-jakarta mt-3">
            We are available 24 hours a day, 7 days a week to serve your travel needs in Kakinada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#FF5B00] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  24/7 Helpline
                </span>
                <a
                  href={`tel:+91${businessInfo.phone}`}
                  className="font-outfit font-black text-xl text-slate-900 hover:text-[#FF5B00] transition-colors block mt-0.5"
                >
                  +91 {businessInfo.phone}
                </a>
                <p className="text-xs text-emerald-600 mt-1 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Instant WhatsApp & Call Support
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Office Address
                </span>
                <p className="font-outfit font-bold text-slate-900 text-sm mt-0.5 leading-snug">
                  {businessInfo.address}
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Business Hours
                </span>
                <p className="font-outfit font-bold text-slate-900 text-sm mt-0.5">
                  Open 24 Hours / 7 Days a Week (365 Days)
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-[#FF5B00] rounded-3xl p-6 text-white shadow-xl shadow-[#FF5B00]/25 flex items-center justify-between">
              <div>
                <h4 className="font-outfit font-extrabold text-lg text-white">
                  Quick WhatsApp Chat
                </h4>
                <p className="text-xs text-white/90 mt-0.5">
                  Send your itinerary for instant quote
                </p>
              </div>
              <a
                href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a taxi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full font-bold text-xs bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-colors"
              >
                Chat Now
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps & Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 h-64 bg-slate-100 shadow-sm">
              <iframe
                title="Sri Prakash Car Travels Location Kakinada"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15263.363841121175!2d82.2350811!3d16.989065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38284687b328a1%3A0x6b8f36f1c4e9766!2sKakinada%2C%20Andhra%20Pradesh%20533003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-outfit font-extrabold text-xl text-slate-900">
                Send Fast Message on WhatsApp
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF5B00]"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF5B00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#FF5B00]"
                >
                  <option value="Airport Taxi Pickup/Drop">Airport Taxi Pickup / Drop</option>
                  <option value="Outstation Cab Booking">Outstation Cab Booking</option>
                  <option value="Temple Tour Pilgrimage">Temple Tour Pilgrimage</option>
                  <option value="Local City Cab">Local City Cab</option>
                  <option value="Group Bus / Traveller">Group Bus / Traveller</option>
                </select>

                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Travel destination / date"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF5B00]"
                />
              </div>

              <button
                type="submit"
                className="w-full ref-btn-primary group !py-3"
              >
                <span>Send WhatsApp Message (+91 9848903025)</span>
                <span className="ref-circle-arrow">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
