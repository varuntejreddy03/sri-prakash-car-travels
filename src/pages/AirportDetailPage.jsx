import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Plane, Clock, ShieldCheck, CheckCircle2, MessageCircle, Phone, ArrowRight, ArrowLeft, MapPin, Luggage } from 'lucide-react';
import { businessInfo, createWhatsAppUrl, fleetData } from '../data/travelData';

const airportDataMap = {
  rajahmundry: {
    code: "RJA",
    name: "Kakinada to Rajahmundry Airport Taxi",
    officialName: "Rajahmundry Airport (Madhurapudi - RJA)",
    distance: "~65 km",
    travelTime: "~1 Hour 30 Minutes",
    image: "/images/airport-rajahmundry.jpg",
    highway: "Samarlakota - Rajanagaram - NH16 Expressway",
    flightsCovered: "IndiGo & domestic flights to Hyderabad, Bengaluru, Tirupati, Chennai",
    overview: "Rajahmundry Airport is the primary domestic gateway for Kakinada and East Godavari. We provide dedicated door-to-terminal pickup and arrival drops with guaranteed flight tracking so you never experience flight delay panic.",
    tollIncluded: true,
    pickupAreas: ["Kakinada Main Town", "Sriram Nagar & Prashanti Apartment", "Bhanugudi Junction", "Ramanayyapeta", "Madhavapatnam", "Samarlakota"],
    recommendedCars: ["Maruti Dzire (4+1)", "Toyota Etios (4+1)", "Toyota Innova Crysta (7+1)", "Maruti Ertiga (6+1)"],
    rates: "Fixed all-inclusive fare with zero surge"
  },
  vizag: {
    code: "VTZ",
    name: "Kakinada to Visakhapatnam (Vizag) Airport Taxi",
    officialName: "Visakhapatnam International Airport (VTZ)",
    distance: "~155 km",
    travelTime: "~3 Hours 30 Minutes",
    image: "/images/airport-vizag.jpg",
    highway: "NH16 Express 4-Lane Highway via Annavaram & Tuni",
    flightsCovered: "International flights (Dubai, Singapore, Bangkok) & pan-India metro connections",
    overview: "Visakhapatnam Airport is the premier international airport of Andhra Pradesh. Our highway-experienced chauffeurs provide smooth, comfortable long-distance transfers with spacious luggage boot space for international travel bags.",
    tollIncluded: true,
    pickupAreas: ["Any doorstep in Kakinada", "Kakinada Deep Water Port", "NFCL & Coromandel Plant Areas", "Collectorate & Ashok Nagar"],
    recommendedCars: ["Toyota Innova Crysta (7+1 VIP)", "Kia Carens (6+1 Luxury)", "Toyota Etios (4+1 Large Boot)"],
    rates: "Transparent highway fixed pricing"
  },
  vijayawada: {
    code: "VGA",
    name: "Kakinada to Vijayawada Airport Taxi",
    officialName: "Vijayawada Airport (Gannavaram - VGA)",
    distance: "~210 km",
    travelTime: "~4 Hours 30 Minutes",
    image: "/images/airport-vijayawada.jpg",
    highway: "Via Ravulapalem, Tanuku, Tadepalligudem & Eluru Bypass",
    flightsCovered: "Direct flights to Delhi, Mumbai, Bengaluru, Hyderabad, Dubai & Gulf",
    overview: "Reliable airport transfers to Gannavaram Airport. Perfect for business executives, Gulf travelers, and families connecting to international destinations.",
    tollIncluded: true,
    pickupAreas: ["All locations across Kakinada District"],
    recommendedCars: ["Toyota Innova Crysta (7+1)", "Kia Carens", "Swift Dzire"],
    rates: "One-Way Drop & Round Trip packages"
  },
  hyderabad: {
    code: "HYD",
    name: "Kakinada to Hyderabad Airport Taxi",
    officialName: "Rajiv Gandhi International Airport (Shamshabad - HYD)",
    distance: "~490 km",
    travelTime: "~9 to 10 Hours",
    image: "/images/airport-hyderabad.jpg",
    highway: "Kakinada → Vijayawada Expressway → Suryapet → Hyderabad ORR",
    flightsCovered: "Direct global flights to USA, UK, Europe, Middle East & Australia",
    overview: "Overnight luxury sleeper-style outstation taxi for international family groups with heavy baggage. Driven by two seasoned highway chauffeurs with utmost safety.",
    tollIncluded: true,
    pickupAreas: ["Doorstep pickup anywhere in Kakinada"],
    recommendedCars: ["Toyota Innova Crysta (7+1)", "Force Urbania Luxury Van"],
    rates: "Direct terminal drop fixed rate"
  }
};

export default function AirportDetailPage() {
  const { airportId } = useParams();
  const airportKey = airportId ? airportId.toLowerCase() : 'rajahmundry';
  const data = airportDataMap[airportKey] || airportDataMap.rajahmundry;

  const [pickup, setPickup] = useState('');
  const [car, setCar] = useState('Toyota Innova Crysta (7+1)');
  const [date, setDate] = useState('');
  const [flightNo, setFlightNo] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    const msg = `*AIRPORT TAXI BOOKING - ${data.code}*
━━━━━━━━━━━━━━━━━━━━
✈️ *Airport:* ${data.name}
📍 *Pickup in Kakinada:* ${pickup || 'Doorstep Kakinada'}
🚘 *Vehicle:* ${car}
📅 *Date & Pickup Time:* ${date || 'Earliest'}
🛫 *Flight Number:* ${flightNo || 'Will share later'}
━━━━━━━━━━━━━━━━━━━━
Please confirm pickup timing and fixed fare.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <div>
      <PageBanner
        title={data.name}
        subtitle={`${data.distance} • ${data.travelTime} • ${data.officialName}`}
        breadcrumb={`Airport Taxi / ${data.code}`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          <div className="flex items-center justify-between">
            <Link
              to="/airport-taxi"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#FF5B00] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Airport Transfers</span>
            </Link>
            <span className="badge-orange-pill text-xs">Airport Specialist</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Airport Terminal Hero Photo */}
              <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full text-sm font-mono font-extrabold bg-[#FF5B00] text-white shadow-lg">
                    {data.code} Airport Taxi
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <h3 className="font-outfit font-extrabold text-xl sm:text-2xl drop-shadow-md">{data.officialName}</h3>
                    <p className="text-xs text-slate-200 mt-0.5">{data.distance} from Kakinada • {data.travelTime}</p>
                  </div>
                </div>
              </div>

              <div>
                <span className="ref-section-tag">{data.officialName}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-slate-900 mt-2">
                  Doorstep Pickup to {data.code} Terminal
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed mt-4">
                  {data.overview}
                </p>
              </div>

              {/* Route & Distance Info Card */}
              <div className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Total Distance</span>
                  <strong className="text-2xl font-outfit text-slate-900">{data.distance}</strong>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Estimated Time</span>
                  <strong className="text-2xl font-outfit text-[#FF5B00]">{data.travelTime}</strong>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Highway Route</span>
                  <span className="text-xs text-slate-700 font-semibold mt-1 block">{data.highway}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-4">
                <h3 className="font-outfit font-extrabold text-xl text-slate-900">
                  Airport Transfer Guarantees
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-outfit font-bold text-slate-900 text-sm">15-Min Prior Arrival</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Your driver reaches your doorstep 15 minutes before your schedule to ensure zero last-minute rush.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-outfit font-bold text-slate-900 text-sm">Flight Tracking</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Live monitoring of arrival/departure flight numbers. Automatic schedule adjustments at no extra charge.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-outfit font-bold text-slate-900 text-sm">Trolley Luggage Boot</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Clean, expansive boot compartments capable of accommodating multiple full-size international bags.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-outfit font-bold text-slate-900 text-sm">Zero Surge Billing</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Fixed fare agreed upfront. Zero unexpected midnight multipliers or holiday surges.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Cars */}
              <div>
                <h3 className="font-outfit font-extrabold text-xl text-slate-900 mb-4">
                  Recommended Cabs for {data.code} Airport
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.recommendedCars.map((c, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl text-xs font-bold bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/25">
                      🚘 {c}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-[#0F141E] text-white rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl space-y-4">
                <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider block">
                  Book Airport Taxi
                </span>
                <h3 className="font-outfit font-black text-xl text-white">
                  {data.name.split('Taxi')[0]}
                </h3>

                <form onSubmit={handleBooking} className="space-y-3.5 font-jakarta">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Pickup Point in Kakinada
                    </label>
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Sriram Nagar, Kakinada"
                      required
                      className="w-full bg-[#1A2234] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Vehicle
                    </label>
                    <select
                      value={car}
                      onChange={(e) => setCar(e.target.value)}
                      className="w-full bg-[#1A2234] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5B00]"
                    >
                      <option value="Swift Dzire (Sedan 4+1)">Swift Dzire (4+1)</option>
                      <option value="Toyota Etios (4+1 Large Boot)">Toyota Etios (4+1 Large Boot)</option>
                      <option value="Toyota Innova Crysta (7+1)">Toyota Innova Crysta (7+1 VIP)</option>
                      <option value="Kia Carens (6+1 Luxury)">Kia Carens (6+1 Luxury)</option>
                      <option value="Force Urbania (10-17 Seater)">Force Urbania (10-17 Seater)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Travel Date & Pickup Time
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="e.g. 28th Oct, 3:30 AM"
                      required
                      className="w-full bg-[#1A2234] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Flight Number (Optional)
                    </label>
                    <input
                      type="text"
                      value={flightNo}
                      onChange={(e) => setFlightNo(e.target.value)}
                      placeholder="e.g. 6E 7122"
                      className="w-full bg-[#1A2234] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-lg shadow-[#FF5B00]/30 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Confirm Fare on WhatsApp</span>
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
