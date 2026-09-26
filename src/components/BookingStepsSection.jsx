import React from 'react';
import { Car, Calculator, ThumbsUp, ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, businessInfo } from '../data/travelData';

export default function BookingStepsSection() {
  const steps = [
    {
      num: "01",
      icon: Car,
      title: "Choose Your Vehicle & Route",
      desc: "Select from Swift Dzire, Toyota Etios, Maruti Ertiga, Kia Carens, Innova Crysta, Force Urbania, or luxury AC coaches according to your group size.",
    },
    {
      num: "02",
      icon: Calculator,
      title: "Get Instant Fixed Fare Quote",
      desc: "Connect on WhatsApp or call us at 9848903025. Receive transparent pricing with zero hidden charges, night surge, or unexpected extras.",
    },
    {
      num: "03",
      icon: ThumbsUp,
      title: "Doorstep Pickup & Safe Journey",
      desc: "Your uniformed chauffeur arrives 15 minutes before departure in a clean, sanitized AC vehicle. Relax and enjoy a smooth journey.",
    }
  ];

  return (
    <section className="py-20 bg-[#070A10] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title and Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5B00]"></span>
              <span className="text-xs font-bold text-[#FF7824] uppercase tracking-widest font-jakarta">
                How It Works
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight leading-tight">
              Book Your Cab in <br />
              <span className="text-gradient-orange">3 Easy Steps</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 font-jakarta leading-relaxed">
              We have eliminated the complicated app booking hassles. No cancellation fees, no surging prices during peak hours, and direct communication with our local team.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I would like to book a cab.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand-primary text-xs !py-3 !px-6"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book on WhatsApp Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="btn-brand-outline text-xs !py-3 !px-5"
              >
                <span>Call +91 {businessInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Step Cards (matching Raddito reference) */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-[#FF5B00]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-outfit font-black text-3xl sm:text-4xl text-[#FF5B00] group-hover:scale-110 transition-transform">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#162238] border border-white/10 flex items-center justify-center text-[#FF7824] group-hover:bg-[#FF5B00] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-outfit font-extrabold text-lg sm:text-xl text-white group-hover:text-[#FF7824] transition-colors mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-jakarta leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
