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
        title="Best Car Travels in Kakinada | Taxi Service & Cab Booking | Sri Prakash"
        description="Book top-rated Taxi Service in Kakinada with Sri Prakash Car Travels. Reliable Outstation Cabs, Rajahmundry & Vizag Airport Taxi, Temple Tour Packages & Luxury Cab Booking in Kakinada. Call +91 9848903025 for 24/7 Cab Booking."
        canonical="/"
        keywords="Best Car Travels in Kakinada, Best Taxi Service in Kakinada, Kakinada Cab Service, Airport Taxi Kakinada, Airport Cab Service Kakinada, Local Taxi Kakinada, Outstation Taxi Kakinada, Car Rental Kakinada, Taxi Near Me, Cab Booking Kakinada, Temple Tour Packages Kakinada, Family Trip Taxi, Corporate Cab Service, Railway Station Taxi, Affordable Taxi Service, Kakinada to Rajahmundry Airport Taxi, Kakinada to Vizag Cab, Kakinada to Vijayawada Taxi, Kakinada to Hyderabad Cab, Kakinada to Tirupati Taxi, Kakinada to Annavaram Cab, Kakinada to Araku Taxi, Kakinada to Maredumilli Cab, Kakinada to Bangalore Taxi, Sri Prakash Car Travels"
      />

      {/* 1. Hero Section with 24/7 Booking Form & Live Stats */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. 3-Pillar Trust Highlights Strip */}
      <FeaturesStrip />

      {/* 3. Core Cab Services Gateway with Image Banners */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* 4. Verified Customer Testimonials & Reviews */}
      <TestimonialsSection />

      {/* 5. Frequently Asked Questions (FAQ) & Direct Helpline */}
      <FAQSection onOpenBooking={onOpenBooking} />
    </>
  );
}
