import React from 'react';
import { ShieldCheck, Percent, Headphones } from 'lucide-react';

export default function FeaturesStrip() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Safe and secure rentals",
      desc: "Choose from the best, handpicked just for you: Premium vehicles, maximum reliability and clean sanitized interiors.",
    },
    {
      icon: Percent,
      title: "Competitive pricing",
      desc: "Fair and well-balanced fixed pricing across a wide range of premium vehicles with zero hidden night surge.",
    },
    {
      icon: Headphones,
      title: "24/7 support",
      desc: "Need help? Our local Kakinada dispatch and support team is available round the clock at +91 9848903025.",
    }
  ];

  return (
    <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                {/* Red/Orange Circle Icon matching reference */}
                <div className="w-10 h-10 rounded-full bg-[#FF5B00] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#FF5B00]/25">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-outfit font-bold text-slate-900 text-base leading-snug mb-1">
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
