import React from 'react';
import { X, Users, Briefcase, Snowflake, Fuel, CheckCircle, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0F1626] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header & Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-[#FF5B00] transition-colors flex items-center justify-center border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vehicle Image */}
        <div className="relative aspect-[16/9] w-full bg-[#070A10] overflow-hidden shrink-0">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1626] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-6">
            <span className="badge-orange-pill text-xs mb-1">
              {vehicle.tag}
            </span>
            <h3 className="font-outfit font-black text-xl sm:text-3xl text-white">
              {vehicle.name}
            </h3>
            <p className="text-xs font-mono font-bold text-amber-400 mt-0.5">
              Registration: {vehicle.registration}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <Users className="w-5 h-5 text-[#FF5B00] mb-1" />
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Capacity</span>
              <strong className="text-xs text-white">{vehicle.seats}</strong>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <Briefcase className="w-5 h-5 text-[#FF5B00] mb-1" />
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Luggage</span>
              <strong className="text-xs text-white">{vehicle.luggage}</strong>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <Snowflake className="w-5 h-5 text-cyan-400 mb-1" />
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Air Conditioning</span>
              <strong className="text-xs text-white">{vehicle.ac}</strong>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <Fuel className="w-5 h-5 text-emerald-400 mb-1" />
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Fuel & Drive</span>
              <strong className="text-xs text-white">{vehicle.fuel}</strong>
            </div>
          </div>

          {/* Description & Recommended Usages */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-slate-200 mb-1 uppercase tracking-wider">
              Ideal Travel Purpose:
            </h4>
            <p className="text-sm text-slate-300 font-jakarta leading-relaxed">
              {vehicle.idealFor}
            </p>
          </div>

          {/* Feature List */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-slate-200 mb-2 uppercase tracking-wider">
              Vehicle Amenities & Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vehicle.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={createWhatsAppUrl(`Hi Sri Prakash Car Travels, I want to book ${vehicle.name} (${vehicle.registration}). Please give me the best quote.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 btn-brand-primary !py-3.5 !rounded-xl text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book This Vehicle on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:+91${businessInfo.phone}`}
              className="w-full sm:w-auto btn-brand-outline !py-3.5 !px-5 !rounded-xl text-xs"
            >
              <Phone className="w-4 h-4 text-[#FF5B00]" />
              <span>Call Helpline</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
