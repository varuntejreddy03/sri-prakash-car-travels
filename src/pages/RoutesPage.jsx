import React from 'react';
import PageBanner from '../components/PageBanner';
import PopularRoutesSection from '../components/PopularRoutesSection';
import { businessInfo, createWhatsAppUrl } from '../data/travelData';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function RoutesPage({ onOpenBooking }) {
  return (
    <div>
      <PageBanner
        title="Outstation Routes & Distance Guide"
        subtitle="Transparent fixed fares and estimated travel times for top destinations from Kakinada."
        breadcrumb="Routes"
      />
      <PopularRoutesSection />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#0B0F17] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider block">
                Custom Outstation Route?
              </span>
              <h3 className="font-outfit font-extrabold text-2xl text-white mt-1">
                Traveling to a Village, Town or City Not Listed Here?
              </h3>
              <p className="text-xs text-slate-400 font-jakarta mt-1">
                We provide point-to-point drop and round trips anywhere in Andhra Pradesh, Telangana, Tamil Nadu, and Karnataka.
              </p>
            </div>

            <a
              href={createWhatsAppUrl("Hi Sri Prakash Car Travels, I want to inquire about a custom outstation route.")}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-btn-primary group whitespace-nowrap !py-3 !px-7 text-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Get Custom Quote</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
