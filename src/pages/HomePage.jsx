import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import FeaturesStrip from '../components/FeaturesStrip';
import AboutSection from '../components/AboutSection';
import UrgentTaxiBanner from '../components/UrgentTaxiBanner';
import ServicesSection from '../components/ServicesSection';
import FleetSection from '../components/FleetSection';
import AirportTransfersSection from '../components/AirportTransfersSection';
import TempleToursSection from '../components/TempleToursSection';
import HolidayPackagesSection from '../components/HolidayPackagesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import StatsCounterSection from '../components/StatsCounterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PhotoGallerySection from '../components/PhotoGallerySection';
import PopularRoutesSection from '../components/PopularRoutesSection';
import FAQSection from '../components/FAQSection';
import PreFooterBanner from '../components/PreFooterBanner';

export default function HomePage({ onOpenBooking, onSelectVehicle }) {
  return (
    <>
      <SEOHead
        title="Sri Prakash Car Travels Kakinada | 24/7 Taxi Service, Airport Cabs & Temple Tours"
        description="Sri Prakash Car Travels in Kakinada offers 24/7 Cab & Taxi Service, Rajahmundry & Vizag Airport Cabs, Outstation One Way / Round Trips, Temple Tours, and Luxury Car Rentals. Call +91 9848903025."
        canonical="/"
        keywords="Sri Prakash Car Travels, Car Travels in Kakinada, Taxi Service in Kakinada, Kakinada Cab Service, Airport Taxi Kakinada"
      />
      {/* 1. Hero Section with #1 badge, 4 stats badges, and Instant Cab Booking Widget */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. 3 Feature Highlights Strip */}
      <FeaturesStrip />

      {/* 3. About Section with 15+ Years badge & 6 feature checkmarks */}
      <AboutSection onOpenBooking={onOpenBooking} />

      {/* 4. Mid-Page Urgent Taxi Booking CTA Banner */}
      <UrgentTaxiBanner onOpenBooking={onOpenBooking} />

      {/* 5. Complete Taxi & Cab Services Grid (9 services) */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* 6. Vehicle Fleet Showcase Section with category filters */}
      <FleetSection 
        onSelectVehicle={onSelectVehicle}
        onOpenBooking={onOpenBooking}
      />

      {/* 7. Dedicated Airport Transfers Section & Pre-Booking Benefits */}
      <AirportTransfersSection onOpenBooking={onOpenBooking} />

      {/* 8. Famous Temple Tour Packages from Kakinada (6 pilgrimages) */}
      <TempleToursSection onOpenBooking={onOpenBooking} />

      {/* 9. Popular Holiday Tour Packages (6 hill & nature tours) */}
      <HolidayPackagesSection />

      {/* 10. Simple 3-Step Booking Process */}
      <HowItWorksSection onOpenBooking={onOpenBooking} />

      {/* 11. Live Statistics Counter Section */}
      <StatsCounterSection />

      {/* 12. Verified Customer Testimonials & Reviews */}
      <TestimonialsSection />

      {/* 13. Fleet & Moments Photo Gallery */}
      <PhotoGallerySection />

      {/* 14. Top Outstation Routes & Distance Matrix */}
      <PopularRoutesSection />

      {/* 15. SEO FAQ Accordion Section */}
      <FAQSection />

      {/* 16. Pre-Footer Call to Action Banner */}
      <PreFooterBanner onOpenBooking={onOpenBooking} />
    </>
  );
}
