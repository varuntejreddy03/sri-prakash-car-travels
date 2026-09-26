import React from 'react';
import { Users, CheckCircle, Car, ShieldCheck } from 'lucide-react';

export default function StatsCounterSection() {
  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: Users, desc: "Satisfied riders across AP & South India" },
    { number: "50,000+", label: "Completed Trips", icon: CheckCircle, desc: "Safe city, airport & outstation journeys" },
    { number: "50+", label: "Fleet Vehicles", icon: Car, desc: "Sedans, MPVs, SUVs & Luxury Buses" },
    { number: "100%", label: "On-Time & Safe", icon: ShieldCheck, desc: "Guaranteed punctuality & sanitized cars" }
  ];

  return (
    <section className="py-16 bg-[#0B0F17] text-white border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FF5B00]/10 border border-[#FF5B00]/20 flex items-center justify-center text-[#FF5B00] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-200 uppercase tracking-wider font-jakarta">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 max-w-[200px] mx-auto hidden sm:block">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
