import React from 'react';
import { Clock, ShieldCheck, Headphones } from 'lucide-react';

export default function FeaturesStrip() {
  const features = [
    {
      icon: Clock,
      title: "Guaranteed Doorstep Punctuality",
      desc: "Your chauffeur arrives 15 minutes ahead of schedule. Never stress about early-morning flight departures or crucial appointments.",
    },
    {
      icon: ShieldCheck,
      title: "100% Transparent Fixed Fares",
      desc: "Upfront pricing with exact GPS-verified km calculations. Zero hidden midnight surcharges, peak-hour surges, or surprise fees.",
    },
    {
      icon: Headphones,
      title: "24/7 Direct Local Dispatch",
      desc: "Speak directly with our Kakinada operations desk at +91 9848903025 anytime. Real human support and instant ride dispatch.",
    }
  ];

  return (
    <section className="py-8 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all duration-200"
              >
                {/* Gold Circle Icon matching Karthikeya */}
                <div className="w-10 h-10 rounded-full bg-gold-gradient text-navy-950 flex items-center justify-center shrink-0 shadow-gold-glow">
                  <Icon className="w-5 h-5 text-navy-950" />
                </div>
                <div>
                  <h2 className="font-outfit font-bold text-[#0C2340] text-base leading-snug mb-1">
                    {feat.title}
                  </h2>
                  <p className="text-xs text-slate-600 font-jakarta leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
