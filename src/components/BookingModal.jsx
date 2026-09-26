import React, { useState } from 'react';
import { X, Calendar, MapPin, Car, Phone, User, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { businessInfo, fleetData, createWhatsAppUrl } from '../data/travelData';

export default function BookingModal({ isOpen, onClose, preselectedCar }) {
  const [serviceType, setServiceType] = useState('Outstation Cab');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [car, setCar] = useState(preselectedCar || 'Toyota Innova Crysta (7+1)');
  const [travelDate, setTravelDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*NEW TAXI RESERVATION - Sri Prakash Car Travels*
━━━━━━━━━━━━━━━━━━━━
📌 *Service:* ${serviceType}
📍 *Pickup:* ${pickup || 'Kakinada'}
🏁 *Drop:* ${destination || 'Airport / Outstation'}
🚘 *Vehicle:* ${car}
📅 *Date:* ${travelDate || 'Earliest'}
👤 *Name:* ${name}
📞 *Mobile:* ${phone}
━━━━━━━━━━━━━━━━━━━━
Please confirm driver assignment and fixed rate.`;

    window.open(createWhatsAppUrl(msg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl z-10 overflow-hidden border border-slate-200 my-8">
        
        {/* Header */}
        <div className="bg-[#0B0F17] p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-xs text-[#FF5B00] font-bold uppercase tracking-wider block">
              24/7 Cab Booking
            </span>
            <h3 className="font-outfit font-extrabold text-xl text-white mt-0.5">
              Book Your Ride in Kakinada
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5B00] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 font-jakarta text-slate-800">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Service Type
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#FF5B00]"
            >
              <option value="Airport Taxi (RJA / VTZ)">Airport Taxi (Rajahmundry / Vizag)</option>
              <option value="Outstation Cab (One Way / Round)">Outstation Cab (One Way / Round Trip)</option>
              <option value="Temple Tour Pilgrimage">Temple Tour Package (Annavaram, Pancharamalu)</option>
              <option value="Local City Cab (Hourly)">Local City Taxi (Kakinada / Port)</option>
              <option value="Wedding / Group Bus">Wedding & Group Bus / Traveller</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Pickup Point
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Kakinada Main"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF5B00]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Destination
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Rajahmundry Airport"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF5B00]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Vehicle
              </label>
              <select
                value={car}
                onChange={(e) => setCar(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF5B00]"
              >
                <option value="Maruti Suzuki Dzire (4+1)">Swift Dzire (4+1)</option>
                <option value="Toyota Etios (4+1)">Toyota Etios (4+1)</option>
                <option value="Kia Carens (6+1)">Kia Carens (6+1)</option>
                <option value="Toyota Innova Crysta (7+1)">Toyota Innova Crysta (7+1)</option>
                <option value="Force Urbania (10-17)">Force Urbania (10-17)</option>
                <option value="Tempo Traveller (12-26)">Tempo Traveller (12-26)</option>
                <option value="Luxury Bus (32-45)">Luxury AC Bus (32-45)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Travel Date
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF5B00]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF5B00]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile Number"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#FF5B00]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full font-bold text-xs bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-lg shadow-[#FF5B00]/30 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Confirm Booking on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <p className="text-[11px] text-center text-slate-500 pt-1">
            Zero booking cancellation fees • Fixed transparent pricing
          </p>
        </form>

      </div>
    </div>
  );
}
