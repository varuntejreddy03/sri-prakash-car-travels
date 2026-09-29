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
        
        {/* Main 4-Column Grid matching competitor footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group" aria-label="Sri Prakash Car Travels Home">
              <img
                src="/images/logo-transparent-cv.png"
                alt="Sri Prakash Car Travels Logo"
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform"
              />
            </Link>

            <h4 className="text-white font-outfit font-bold text-base">
              Sri Prakash Car Travels in Kakinada
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premier <strong>Taxi Service in Kakinada</strong> offering 24/7 Airport Taxi, Outstation Cabs, Local Cab Booking, and Temple Tour Packages with top-rated drivers and pristine vehicles.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a cab.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs bg-[#25D366] text-white hover:bg-emerald-600 transition-colors shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:+91${businessInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-outfit font-bold text-white text-sm">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-[#FF5B00] transition-colors">› Home</Link></li>
              <li><Link to="/#tariff" className="hover:text-[#FF5B00] transition-colors">› Cab Tariff & Rates</Link></li>
              <li><Link to="/about" className="hover:text-[#FF5B00] transition-colors">› About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#FF5B00] transition-colors">› Cab Services</Link></li>
              <li><Link to="/cars" className="hover:text-[#FF5B00] transition-colors">› Fleet Vehicles</Link></li>
              <li><Link to="/airport-taxi" className="hover:text-[#FF5B00] transition-colors">› Airport Taxi</Link></li>
              <li><Link to="/temple-tours" className="hover:text-[#FF5B00] transition-colors">› Temple Tours</Link></li>
              <li><Link to="/holiday-packages" className="hover:text-[#FF5B00] transition-colors">› Tour Packages</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF5B00] transition-colors">› Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Top "Kakinada to" Routes */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-outfit font-bold text-white text-sm">Top "Kakinada to" Routes</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/airport-taxi/rajahmundry" className="hover:text-[#FF5B00] transition-colors">› Kakinada to Rajahmundry Airport Taxi</Link></li>
              <li><Link to="/airport-taxi/vizag" className="hover:text-[#FF5B00] transition-colors">› Kakinada to Vizag Airport Cab</Link></li>
              <li><Link to="/services/outstation-cabs" className="hover:text-[#FF5B00] transition-colors">› Kakinada to Vijayawada Cab</Link></li>
              <li><Link to="/services/outstation-cabs" className="hover:text-[#FF5B00] transition-colors">› Kakinada to Hyderabad Taxi</Link></li>
              <li><Link to="/services/outstation-cabs" className="hover:text-[#FF5B00] transition-colors">› Kakinada to Tirupati Taxi</Link></li>
              <li><Link to="/services/outstation-cabs" className="hover:text-[#FF5B00] transition-colors">› Kakinada to Bangalore Cab</Link></li>
              <li><Link to="/routes" className="hover:text-[#FF5B00] transition-colors">› View All Route Tariffs</Link></li>
            </ul>
          </div>

          {/* Col 4: Temple & Holiday Packages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-outfit font-bold text-white text-sm">Kakinada Tour Packages</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/temple-tours/annavaram" className="hover:text-[#FF5B00] transition-colors">› Annavaram Temple Taxi</Link></li>
              <li><Link to="/temple-tours/pancharamalu" className="hover:text-[#FF5B00] transition-colors">› Pancharama Kshetra Package</Link></li>
              <li><Link to="/temple-tours/srisailam-tirupati" className="hover:text-[#FF5B00] transition-colors">› Tirupati Pilgrimage Tour</Link></li>
              <li><Link to="/holiday-packages/araku-vizag" className="hover:text-[#FF5B00] transition-colors">› Araku Valley Tour Package</Link></li>
              <li><Link to="/holiday-packages/lambasingi" className="hover:text-[#FF5B00] transition-colors">› Lambasingi & Vanajangi Tour</Link></li>
              <li><Link to="/holiday-packages/maredumilli" className="hover:text-[#FF5B00] transition-colors">› Maredumilli Eco Tour</Link></li>
              <li><Link to="/holiday-packages/papikondalu" className="hover:text-[#FF5B00] transition-colors">› Papikondalu Godavari Cruise</Link></li>
            </ul>
          </div>

        </div>

        {/* SEO Popular Keyword Tags Section matching competitor */}
        <div className="border-t border-slate-800/80 pt-8 mt-8">
          <h5 className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            Popular High-Ranking Kakinada Searches
          </h5>
          <div className="flex flex-wrap gap-2">
            {[
              "Best Car Travels in Kakinada",
              "Taxi Service in Kakinada",
              "Kakinada Cab Service 24/7",
              "Car Travels Kakinada Tariff",
              "Kakinada to Rajahmundry Airport Taxi",
              "Kakinada to Vizag Airport Cab",
              "Innova Crysta Hire in Kakinada",
              "Tempo Traveller 12 Seater Kakinada",
              "Bhanugudi Junction Taxi Service",
              "JNTU Kakinada Cab Booking",
              "Kakinada Town Railway Station Cabs",
              "Kakinada to Vijayawada Cab",
              "Kakinada to Hyderabad Taxi",
              "Kakinada to Tirupati Balaji Cab",
              "Kakinada to Annavaram Temple Taxi",
              "Pancharamalu Tour Package from Kakinada",
              "Kakinada to Draksharamam Cab",
              "Wedding Luxury Car Rental Kakinada",
              "Force Urbania Luxury Van Kakinada",
              "One Way Taxi Kakinada to Vizag",
              "Affordable Outstation Taxi Kakinada",
              "Sri Prakash Car Travels Contact Number"
            ].map((tag, idx) => (
              <Link
                key={idx}
                to="/services"
                className="bg-white/5 hover:bg-[#FF5B00] text-slate-300 hover:text-white px-3 py-1 rounded-md text-[11px] border border-white/10 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar matching competitor */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {currentYear} <strong>Sri Prakash Car Travels</strong>. All Rights Reserved.
          </div>
          <div className="text-slate-400 text-center md:text-right">
            {businessInfo.address} | Phone: <a href={`tel:+91${businessInfo.phone}`} className="text-[#FF5B00] font-bold">+91 {businessInfo.phone}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
