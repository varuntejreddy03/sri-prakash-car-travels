import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Cab Services', path: '/services' },
    { name: 'Temple Tours', path: '/temple-tours' },
    { name: 'Tour Packages', path: '/holiday-packages' },
    { name: 'Airport Taxi', path: '/airport-taxi' },
    { name: 'Our Fleet', path: '/cars' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Contact Strip */}
      <div className="bg-[#0B0F17] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:+91${businessInfo.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#FF5B00] transition-colors font-medium text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span>24/7 Helpline: <strong>+91 {businessInfo.phone}</strong></span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span>Kakinada, Andhra Pradesh 533003</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={businessInfo.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#FF5B00] transition-colors"
            >
              Facebook
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={businessInfo.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#FF5B00] transition-colors"
            >
              Instagram
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a taxi.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header matching Rentor reference */}
      <header className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#0B0F17]/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-white/10' 
          : 'bg-[#0B0F17] py-3.5 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Big Brand Logo Only */}
          <Link to="/" className="flex items-center group py-0.5" aria-label="Sri Prakash Car Travels">
            <img 
              src="/images/logo-transparent-cv.png" 
              alt="Sri Prakash Car Travels" 
              className="h-14 sm:h-18 md:h-20 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-all duration-200"
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors relative py-1 ${
                    isActive 
                      ? 'text-[#FF5B00] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF5B00]' 
                      : 'text-slate-300 hover:text-[#FF5B00]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA Button (Pill with circle arrow matching reference) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:+91${businessInfo.phone}`}
              className="text-xs font-bold text-slate-300 hover:text-white px-3 py-2 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span>9848903025</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="ref-btn-primary group"
            >
              <span>Book Now</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0E131F] text-white p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto border-l border-white/10">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src="/images/logo-transparent-cv.png" alt="Sri Prakash Car Travels" className="h-14 w-auto object-contain drop-shadow-md" />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/10 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col py-6 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl font-semibold transition-colors text-base ${
                        isActive 
                          ? 'bg-[#FF5B00]/15 text-[#FF5B00] font-bold border border-[#FF5B00]/30' 
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm bg-slate-900 text-white"
              >
                <Phone className="w-4 h-4 text-[#FF5B00]" />
                <span>Call Helpline (+91 {businessInfo.phone})</span>
              </a>

              <a
                href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a taxi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm bg-[#25D366] text-white"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
