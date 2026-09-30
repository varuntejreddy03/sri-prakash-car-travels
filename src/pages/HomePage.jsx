import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import FeaturesStrip from '../components/FeaturesStrip';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

export default function HomePage({ onOpenBooking }) {
  return (
    <>
      <SEOHead
        title="Sri Prakash Car Travels Kakinada | 24/7 Taxi Service, Airport Cabs & Temple Tours"
        description="Sri Prakash Car Travels in Kakinada offers 24/7 Cab & Taxi Service, Rajahmundry & Vizag Airport Cabs, Outstation One Way / Round Trips, Temple Tours, and Luxury Car Rentals. Call +91 9848903025."
        canonical="/"
        keywords="car travels in kakinada, taxi service in kakinada, kakinada cab service, airport taxi kakinada, outstation cabs kakinada, innova crysta cab kakinada, best car travels in kakinada"
      />

      {/* 1. Hero Section with 24/7 Booking Form */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. 3-Pillar Trust Highlights Strip */}
      <FeaturesStrip />

      {/* 3. Core Cab Services Gateway (Links to Airport, Outstation, Local, Tours) */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* 4. Verified Customer Testimonials & Reviews */}
      <TestimonialsSection />

      {/* 5. Frequently Asked Questions (FAQ) & Direct Helpline */}
      <FAQSection onOpenBooking={onOpenBooking} />
    </>
  );
}

