import React from 'react';
import Hero from '../components/Hero';
import FeaturesStrip from '../components/FeaturesStrip';
import AboutSection from '../components/AboutSection';
import FleetSection from '../components/FleetSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import AirportTransfersSection from '../components/AirportTransfersSection';
import TempleToursSection from '../components/TempleToursSection';
import PopularRoutesSection from '../components/PopularRoutesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import PreFooterBanner from '../components/PreFooterBanner';

export default function HomePage({ onOpenBooking, onSelectVehicle }) {
  return (
    <>
      {/* 1. Hero Section matching Rentor reference */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. 3 Feature Highlights Strip */}
      <FeaturesStrip />

      {/* 3. About Section with commitment statement & dual photos */}
      <AboutSection onOpenBooking={onOpenBooking} />

      {/* 4. Fleet Section (Choose the perfect car for your trip) */}
      <FleetSection 
        onSelectVehicle={onSelectVehicle}
        onOpenBooking={onOpenBooking}
      />

      {/* 5. Services Section (Flexible rental solutions with highlighted active card) */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* 6. How It Works (Split section: Highway image + 3 easy steps dark container) */}
      <HowItWorksSection onOpenBooking={onOpenBooking} />

      {/* 7. Dedicated Airport Transfers Section */}
      <AirportTransfersSection onOpenBooking={onOpenBooking} />

      {/* 8. Temple Tour Pilgrimage Packages */}
      <TempleToursSection onOpenBooking={onOpenBooking} />

      {/* 9. Top Outstation Routes Matrix */}
      <PopularRoutesSection />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. Pre-Footer Banner */}
      <PreFooterBanner />
    </>
  );
}
