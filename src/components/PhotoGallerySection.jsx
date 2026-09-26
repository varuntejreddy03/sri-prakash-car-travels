import React, { useState } from 'react';
import { Camera, Car, Plane, Mountain, Landmark } from 'lucide-react';

export default function PhotoGallerySection() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "Toyota Innova Crysta & Fleet",
      category: "fleet",
      categoryName: "Luxury Fleet",
      sub: "Kakinada Executive Cabs",
      image: "/images/gallery-fleet.jpg"
    },
    {
      id: 2,
      title: "Airport Transfers & Flight Drops",
      category: "airport",
      categoryName: "Airport Drop & Pickup",
      sub: "Rajahmundry & Vizag Express",
      image: "/images/gallery-airport.jpg"
    },
    {
      id: 3,
      title: "Araku Valley & Hill Tour",
      category: "tours",
      categoryName: "Hill & Nature Tours",
      sub: "Holiday Tour Packages",
      image: "/images/gallery-araku.jpg"
    },
    {
      id: 4,
      title: "Annavaram & Temple Pilgrimages",
      category: "temple",
      categoryName: "Divine Pilgrimages",
      sub: "Annavaram & Draksharamam",
      image: "/images/gallery-temple.jpg"
    },
    {
      id: 5,
      title: "Rajahmundry Airport Express",
      category: "airport",
      categoryName: "Airport Drop & Pickup",
      sub: "Direct Domestic Flight Drops",
      image: "/images/airport-rajahmundry.jpg"
    },
    {
      id: 6,
      title: "Ratnagiri Annavaram Shrine",
      category: "temple",
      categoryName: "Divine Pilgrimages",
      sub: "Ratnagiri Hill Top View",
      image: "/images/temple-annavaram.png"
    },
    {
      id: 7,
      title: "Lambasingi Fog & Coffee Hills",
      category: "tours",
      categoryName: "Hill & Nature Tours",
      sub: "Kashmir of Andhra Pradesh",
      image: "/images/tour-lambasingi.png"
    },
    {
      id: 8,
      title: "Executive Force Urbania & Coach",
      category: "fleet",
      categoryName: "Luxury Fleet",
      sub: "VIP Luxury Passenger Van",
      image: "/images/urbania.jpg"
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="ref-section-tag">Our Fleet & Moments</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-slate-900 leading-tight mt-2">
            Sri Prakash <span className="text-[#FF5B00]">Travels Photo Gallery</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-jakarta mt-3">
            Sneak peek of our premium luxury cars, happy families, and memorable tour destinations.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'fleet', label: 'Fleet Cars' },
              { id: 'airport', label: 'Airport Transfers' },
              { id: 'tours', label: 'Holiday Tours' },
              { id: 'temple', label: 'Temple Pilgrimages' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-[#FF5B00] text-white shadow-md shadow-[#FF5B00]/30'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B00] bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-white/10">
                  {item.categoryName}
                </span>
                <h4 className="font-outfit font-extrabold text-lg text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 font-jakarta">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
