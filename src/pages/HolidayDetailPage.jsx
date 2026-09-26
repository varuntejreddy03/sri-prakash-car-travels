import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Mountain, Clock, Car, CheckCircle2, ArrowRight, ArrowLeft, MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { holidayPackagesData, createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function HolidayDetailPage({ onOpenBooking }) {
  const { packageId } = useParams();
  const pkg = holidayPackagesData.find(p => p.id === packageId) || holidayPackagesData[0];

  const [pickup, setPickup] = useState('');
  const [car, setCar] = useState(pkg.car.split('/')[0].trim());
  const [date, setDate] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    const msg = `*HOLIDAY TOUR ENQUIRY - ${pkg.title}*
━━━━━━━━━━━━━━━━━━━━
🌴 *Tour Package:* ${pkg.title}
📍 *Location:* ${pkg.location}
⏳ *Duration:* ${pkg.duration}
🚘 *Preferred Car:* ${car}
📅 *Start Date:* ${date || 'Earliest'}
━━━━━━━━━━━━━━━━━━━━
Please share resort coordination, full sightseeing plan and fixed price.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <div>
      <PageBanner
        title={pkg.title}
        subtitle={`${pkg.location} • ${pkg.duration} from Kakinada`}
        breadcrumb={`Packages / ${pkg.location.split(' ')[0]}`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          
          <div className="flex items-center justify-between">
            <Link
              to="/holiday-packages"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#FF5B00] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Holiday Packages</span>
            </Link>
            <span className="badge-orange-pill text-xs">{pkg.duration}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Tour Hero Photo Banner */}
              <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-lg">
                    {pkg.location}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <h3 className="font-outfit font-extrabold text-xl sm:text-2xl drop-shadow-md">{pkg.title}</h3>
                    <p className="text-xs text-slate-200 mt-0.5">{pkg.duration} Tour Package from Kakinada</p>
                  </div>
                </div>
              </div>

              <div>
                <span className="ref-section-tag">{pkg.location}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-slate-900 mt-2">
                  Tour Overview & Scenic Experience
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-jakarta leading-relaxed mt-4">
                  {pkg.description}
                </p>
                <p className="text-sm text-slate-600 font-jakarta leading-relaxed mt-3">
                  Our chauffeurs have years of experience navigating hair-pin bends, Ghat sections, foggy morning drives, and narrow resort access lanes. We take care of driving while you immerse yourself in the natural beauty.
                </p>
              </div>

              {/* Major Attractions Checklist */}
              <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 space-y-4">
                <h3 className="font-outfit font-extrabold text-xl text-slate-900">
                  Key Attractions & Photo Viewpoints
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Scenic viewpoint photo stops</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Local food delicacies guidance</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Options */}
              <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200">
                <h4 className="font-outfit font-bold text-slate-900 text-base mb-1">
                  Ideal Fleet for Hill & Nature Drives:
                </h4>
                <p className="text-xs text-slate-700">
                  {pkg.car} • (Superior ground clearance, high torque diesel/petrol engines, high cooling climate control, and generous trunk storage).
                </p>
              </div>

            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-[#0F141E] text-white rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl space-y-4">
                <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider block">
                  Book Holiday Tour
                </span>
                <h3 className="font-outfit font-black text-xl text-white">
                  {pkg.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Get exact quotation and customized trip schedule on WhatsApp.
                </p>

                <form onSubmit={handleBooking} className="space-y-3.5 font-jakarta">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Pickup Point in Kakinada
                    </label>
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Kakinada Doorstep"
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
                      <option value="Kia Carens (Luxury 6+1)">Kia Carens (6+1)</option>
                      <option value="Toyota Innova Crysta (7+1)">Toyota Innova Crysta (7+1 VIP)</option>
                      <option value="Maruti Ertiga (MPV 6+1)">Maruti Ertiga (6+1)</option>
                      <option value="Swift Dzire (Sedan 4+1)">Swift Dzire (4+1)</option>
                      <option value="Force Urbania (10-17)">Force Urbania (10-17)</option>
                      <option value="Tempo Traveller (12-26)">Tempo Traveller (12-26)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Trip Start Date
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
                    <span>Get Tour Quote on WhatsApp</span>
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
