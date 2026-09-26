import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function Footer() {
  const [quickInput, setQuickInput] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!quickInput) return;
    const msg = `Hi Sri Prakash Car Travels, I am sharing my phone/email: ${quickInput}. Please send your latest cab fare rates.`;
    window.open(createWhatsAppUrl(msg), '_blank');
    setQuickInput('');
  };

  return (
    <footer className="bg-[#090D14] text-slate-400 font-jakarta pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Logo & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group" aria-label="Sri Prakash Car Travels Home">
              <img
                src="/images/logo-transparent-cv.png"
                alt="Sri Prakash Car Travels Logo"
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Reliable car rental and taxi services in Kakinada for local city rides, 24/7 airport transfers, corporate travel, and sacred temple pilgrimages across South India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5B00] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5B00] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a cab.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-outfit font-bold text-white text-sm">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-[#FF5B00] transition-colors">Home</Link></li>
              <li><Link to="/cars" className="hover:text-[#FF5B00] transition-colors">Our Fleet</Link></li>
              <li><Link to="/about" className="hover:text-[#FF5B00] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#FF5B00] transition-colors">All Services</Link></li>
              <li><Link to="/airport-taxi" className="hover:text-[#FF5B00] transition-colors">Airport Taxi</Link></li>
              <li><Link to="/temple-tours" className="hover:text-[#FF5B00] transition-colors">Temple Tours</Link></li>
              <li><Link to="/holiday-packages" className="hover:text-[#FF5B00] transition-colors">Holiday Packages</Link></li>
              <li><Link to="/routes" className="hover:text-[#FF5B00] transition-colors">Popular Routes</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF5B00] transition-colors">Contact Office</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Subpages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-outfit font-bold text-white text-sm">Featured Subpages</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/temple-tours/annavaram" className="hover:text-[#FF5B00] transition-colors">Annavaram Temple Tour</Link></li>
              <li><Link to="/temple-tours/pancharamalu" className="hover:text-[#FF5B00] transition-colors">Pancharamalu Darshan</Link></li>
              <li><Link to="/airport-taxi/rajahmundry" className="hover:text-[#FF5B00] transition-colors">Rajahmundry Airport Taxi (RJA)</Link></li>
              <li><Link to="/airport-taxi/vizag" className="hover:text-[#FF5B00] transition-colors">Vizag Airport Taxi (VTZ)</Link></li>
              <li><Link to="/holiday-packages/lambasingi" className="hover:text-[#FF5B00] transition-colors">Lambasingi Hill Station</Link></li>
              <li><Link to="/holiday-packages/maredumilli" className="hover:text-[#FF5B00] transition-colors">Maredumilli Eco Tour</Link></li>
              <li><Link to="/services/car-rental-with-driver" className="hover:text-[#FF5B00] transition-colors">Car Rental with Driver</Link></li>
              <li><Link to="/services/outstation-cabs" className="hover:text-[#FF5B00] transition-colors">Outstation Cab Booking</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-outfit font-bold text-white text-sm">Contact Sri Prakash</h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span>+91 {businessInfo.phone}</span>
              </a>

              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span className="truncate">{businessInfo.email}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF5B00] shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-400">{businessInfo.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-2">
                Get fare quotes & discount coupons on WhatsApp:
              </p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="text"
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  placeholder="Your mobile number"
                  className="w-full bg-white/5 border border-slate-700 rounded-full px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3.5 rounded-full bg-[#FF5B00] hover:bg-[#E04F00] text-white text-xs font-bold transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {currentYear} <strong>Sri Prakash Car Travels Kakinada</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/about" className="hover:text-white">Safety Standards</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white">Office Location</Link>
            <span>•</span>
            <Link to="/routes" className="hover:text-white">Tariff & Routes</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
