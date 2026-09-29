import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/travelData';

export default function HowItWorksSection({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      title: "Choose Your Car",
      desc: "Explore our diverse fleet, from Dzire sedans to spacious Innova Crysta SUVs and luxury buses. Find the perfect vehicle for your journey."
    },
    {
      num: "02",
      title: "Book on WhatsApp / Call",
      desc: "Connect instantly with our team. Share your travel dates, pickup location, and drop point to lock in your fixed transparent fare."
    },
    {
      num: "03",
      title: "Doorstep Pickup & Travel",
      desc: "Our verified chauffeur arrives 15 minutes early at your doorstep in Kakinada with a fresh, sanitized car ready for departure."
    }
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Split Section matching pinterest-bulk-5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          
          {/* Left Column: Scenic Highway / Vehicle Photo */}
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full bg-slate-900">
            <img
              src="/images/urbania.jpg"
              alt="Force Urbania on road Sri Prakash Travels"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF5B00] text-white">
                Chauffeur Driven
              </span>
              <p className="font-outfit font-extrabold text-2xl text-white mt-2">
                Safe, Timely & Comfortable Every Mile
              </p>
              <p className="text-xs text-slate-300 font-jakarta mt-1">
                Kakinada's premier fleet for local & outstation journeys.
              </p>
            </div>
          </div>

          {/* Right Column: Deep Dark Card with 3 Easy Steps */}
          <div className="lg:col-span-6 bg-[#0B0F17] p-8 sm:p-12 text-white flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5B00]"></span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest font-jakarta">
                  How We Work
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-white tracking-tight leading-tight">
                Rent your car in <br />
                <span className="text-[#FF5B00]">3 easy steps</span>
              </h2>

              <div className="space-y-6 mt-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* Red/Orange Step Circle matching reference */}
                    <div className="w-8 h-8 rounded-full bg-[#FF5B00] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-[#FF5B00]/40">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-white text-base">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-jakarta leading-relaxed mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="ref-btn-primary group"
              >
                <span>Book Now</span>
                <span className="ref-circle-arrow">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </button>

              <a
                href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to book a taxi in 3 steps.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
