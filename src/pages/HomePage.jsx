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
import StatsCounterSection from '../components/StatsCounterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PhotoGallerySection from '../components/PhotoGallerySection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenBooking }) {
  return (
    <>
      <SEOHead
        title="Best Car Travels in Kakinada | Taxi Service & Cab Booking | Sri Prakash"
        description="Book top-rated Taxi Service in Kakinada with Sri Prakash Car Travels. Reliable Outstation Cabs, Rajahmundry & Vizag Airport Taxi, Temple Tour Packages & Luxury Cab Booking in Kakinada. Call +91 9848903025 for 24/7 Cab Booking."
        canonical="/"
        keywords="Best Car Travels in Kakinada, Best Taxi Service in Kakinada, Kakinada Cab Service, Airport Taxi Kakinada, Airport Cab Service Kakinada, Local Taxi Kakinada, Outstation Taxi Kakinada, Car Rental Kakinada, Taxi Near Me, Cab Booking Kakinada, Temple Tour Packages Kakinada, Family Trip Taxi, Corporate Cab Service, Railway Station Taxi, Affordable Taxi Service, Kakinada to Rajahmundry Airport Taxi, Kakinada to Vizag Cab, Kakinada to Vijayawada Taxi, Kakinada to Hyderabad Cab, Kakinada to Tirupati Taxi, Kakinada to Annavaram Cab, Kakinada to Araku Taxi, Kakinada to Maredumilli Cab, Kakinada to Bangalore Taxi, Sri Prakash Car Travels"
      />

      {/* 1. Hero Section with 24/7 Booking Form & Live Stats */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Top Highlights Strip */}
      <FeaturesStrip />

      {/* 3. About Us Section (15+ Years Excellence, Fleet Showcase) */}
      <AboutSection onOpenBooking={onOpenBooking} />

      {/* 4. Urgent Taxi / Mid-Page CTA Banner */}
      <UrgentTaxiBanner onOpenBooking={onOpenBooking} />

      {/* 5. Complete Services Gateway */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* 6. Vehicle Fleet Showcase with Filter Tabs */}
      <FleetSection onOpenBooking={onOpenBooking} />

      {/* 7. 24/7 Airport Transfers (Rajahmundry, Vizag, Vijayawada, Hyderabad) */}
      <AirportTransfersSection onOpenBooking={onOpenBooking} />

      {/* 8. Famous Temple Tour Packages from Kakinada */}
      <TempleToursSection onOpenBooking={onOpenBooking} />

      {/* 9. Popular Holiday & Tourist Packages (Araku, Lambasingi, Maredumilli, Papikondalu) */}
      <HolidayPackagesSection />

      {/* 10. Live Statistics Counter Section */}
      <StatsCounterSection />

      {/* 11. Customer Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 12. Travels Photo Gallery */}
      <PhotoGallerySection />

      {/* 13. FAQ Accordion Section */}
      <FAQSection onOpenBooking={onOpenBooking} />

      {/* 14. Contact Section with Map & Office Address */}
      <ContactSection />
    </>
  );
}

