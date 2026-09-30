import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, Menu, X, ArrowRight, MessageCircle, MapPin, 
  ChevronDown, Plane, Landmark, Compass, Car, Sparkles, ShieldCheck 
} from 'lucide-react';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);

  const location = useLocation();
  const servicesTimeoutRef = useRef(null);
  const toursTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setToursDropdownOpen(false);
  }, [location.pathname]);

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleToursMouseEnter = () => {
    clearTimeout(toursTimeoutRef.current);
    setToursDropdownOpen(true);
  };

  const handleToursMouseLeave = () => {
    toursTimeoutRef.current = setTimeout(() => {
      setToursDropdownOpen(false);
    }, 150);
  };

  const isServicesActive = ['/services', '/airport-taxi'].some(path => location.pathname.startsWith(path));
  const isToursActive = ['/temple-tours', '/holiday-packages', '/routes'].some(path => location.pathname.startsWith(path));

  return (
    <>
      {/* Top Notification & Contact Bar */}
      <div className="bg-[#070B12] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href={`tel:+91${businessInfo.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#FF5B00] transition-colors font-medium text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span className="text-[11px] sm:text-xs">
                24/7 Kakinada Helpline: <strong className="text-[#FF5B00]">+91 {businessInfo.phone}</strong>
              </span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span>Doorstep Pickup Across All Kakinada Localities</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Verified Own Fleet</span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a 
              href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a taxi.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 text-[11px] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Dispatch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#0B0F17]/95 backdrop-blur-md shadow-2xl py-2 border-b border-white/10' 
          : 'bg-[#0B0F17] py-2.5 sm:py-3 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center shrink-0 group py-0.5" aria-label="Sri Prakash Car Travels">
            <img 
              src="/images/logo-transparent-cv.png" 
              alt="Sri Prakash Car Travels" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-all duration-200"
            />
          </Link>

          {/* Desktop Navigation Menu (Streamlined & Clean) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] xl:text-[14px]">
            
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'text-[#FF5B00] bg-white/[0.04]' 
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.04]'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center gap-1 ${
                  isServicesActive
                    ? 'text-[#FF5B00] bg-white/[0.04]' 
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#FF5B00]' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-[#121824] rounded-2xl p-2.5 shadow-2xl border border-white/10 backdrop-blur-xl">
                    <Link
                      to="/services"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FF5B00]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#FF5B00] transition-colors">
                        <Car className="w-4 h-4 text-[#FF5B00] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs group-hover:text-[#FF5B00] transition-colors">
                          All Cab Services
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Local city taxi, outstation & rentals
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/airport-taxi"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-500 transition-colors">
                        <Plane className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs group-hover:text-[#FF5B00] transition-colors">
                          Airport Taxi
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Rajahmundry, Vizag & Vijayawada
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/services/outstation-cabs"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-500 transition-colors">
                        <Compass className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs group-hover:text-[#FF5B00] transition-colors">
                          Outstation Cabs
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          One-way drops & round trips
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/services/local-city-taxi"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 transition-colors">
                        <Car className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs group-hover:text-[#FF5B00] transition-colors">
                          Local City Taxi
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Hourly packages in Kakinada
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our Fleet */}
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'text-[#FF5B00] bg-white/[0.04]' 
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.04]'
                }`
              }
            >
              Our Fleet
            </NavLink>

            {/* Tour Packages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleToursMouseEnter}
              onMouseLeave={handleToursMouseLeave}
            >
              <button
                type="button"
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center gap-1 ${
                  isToursActive
                    ? 'text-[#FF5B00] bg-white/[0.04]' 
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>Tour Packages</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${toursDropdownOpen ? 'rotate-180 text-[#FF5B00]' : 'text-slate-400'}`} />
              </button>

              {toursDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-[#121824] rounded-2xl p-2.5 shadow-2xl border border-white/10 backdrop-blur-xl">
                    <Link
                      to="/temple-tours"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#FF5B00] transition-colors">
                        <Landmark className="w-4 h-4 text-[#FF5B00] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs group-hover:text-[#FF5B00] transition-colors">
                          Temple Pilgrimages
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Annavaram, Pancharamalu, Tirupati
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/holiday-packages"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 transition-colors">
                        <Compass className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs group-hover:text-[#FF5B00] transition-colors">
                          Holiday & Hill Tours
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Araku, Lambasingi, Maredumilli
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/routes"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-500 transition-colors">
                        <Car className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs group-hover:text-[#FF5B00] transition-colors">
                          Route Distance & Fares
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Top destination rate cards
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Tariff / Rate Card (Special Pill Link) */}
            <Link
              to="/routes"
              className="px-3 py-1.5 rounded-full font-bold text-xs bg-[#FF5B00]/15 hover:bg-[#FF5B00]/25 text-[#FF5B00] border border-[#FF5B00]/30 transition-all whitespace-nowrap inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tariff & Fares</span>
            </Link>

            {/* About Us */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'text-[#FF5B00] bg-white/[0.04]' 
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.04]'
                }`
              }
            >
              About
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'text-[#FF5B00] bg-white/[0.04]' 
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.04]'
                }`
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* Right Action Block (Call & Booking Button) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:+91${businessInfo.phone}`}
              className="text-xs font-bold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-full hover:bg-white/5 flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF5B00]/20 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
              </div>
              <span className="hidden xl:inline text-slate-400 font-normal">Call:</span>
              <span className="text-white font-mono">{businessInfo.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="ref-btn-primary group !py-2.5 !px-5 whitespace-nowrap"
            >
              <span>Book Cab</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0E131F] text-white p-5 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto border-l border-white/10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img 
                    src="/images/logo-transparent-cv.png" 
                    alt="Sri Prakash Car Travels" 
                    className="h-10 w-auto object-contain drop-shadow-md" 
                  />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/10 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col py-4 space-y-1 text-sm font-semibold">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl transition-colors ${
                      isActive ? 'bg-[#FF5B00]/15 text-[#FF5B00] font-bold' : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#FF5B00]' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 py-1 space-y-1 border-l-2 border-white/10 ml-3 mt-1">
                      <Link 
                        to="/services" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                      >
                        › All Cab Services
                      </Link>
                      <Link 
                        to="/airport-taxi" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                      >
                        › Airport Taxi (RJA, VTZ, VGA)
                      </Link>
                      <Link 
                        to="/services/outstation-cabs" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                      >
                        › Outstation Cabs
                      </Link>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/cars"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl transition-colors ${
                      isActive ? 'bg-[#FF5B00]/15 text-[#FF5B00] font-bold' : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  Our Fleet
                </NavLink>

                {/* Mobile Tours Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileToursOpen(!mobileToursOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white"
                  >
                    <span>Tour Packages</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileToursOpen ? 'rotate-180 text-[#FF5B00]' : ''}`} />
                  </button>
                  {mobileToursOpen && (
                    <div className="pl-4 py-1 space-y-1 border-l-2 border-white/10 ml-3 mt-1">
                      <Link 
                        to="/temple-tours" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                      >
                        › Temple Pilgrimages (Annavaram, Tirupati)
                      </Link>
                      <Link 
                        to="/holiday-packages" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                      >
                        › Holiday Packages (Araku, Lambasingi)
                      </Link>
                      <Link 
                        to="/routes" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                      >
                        › Route Distance & Fares
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/routes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-[#FF5B00] font-bold flex items-center gap-1.5 bg-[#FF5B00]/10"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tariff & Fares</span>
                </Link>

                <NavLink
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl transition-colors ${
                      isActive ? 'bg-[#FF5B00]/15 text-[#FF5B00] font-bold' : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl transition-colors ${
                      isActive ? 'bg-[#FF5B00]/15 text-[#FF5B00] font-bold' : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-lg shadow-[#FF5B00]/30 transition-all"
              >
                <span>Book Cab Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:+91${businessInfo.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-[#FF5B00]" />
                <span>Call Helpline (+91 {businessInfo.phone})</span>
              </a>

              <a
                href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a taxi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-[#25D366] text-white hover:bg-emerald-600 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
