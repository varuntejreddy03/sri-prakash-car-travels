import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import FeaturesStrip from '../components/FeaturesStrip';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
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

      {/* 2. 3-Pillar Trust Highlights Strip (Tightened spacing) */}
      <FeaturesStrip />

      {/* 3. Core Cab Services Gateway (4 Cards In A Row on Desktop) */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* 4. Why Choose Sri Prakash Car Travels Section */}
      <WhyChooseUsSection onOpenBooking={onOpenBooking} />

      {/* 5. Verified Customer Testimonials & Reviews (Desktop-Friendly Balanced Header) */}
      <TestimonialsSection />

      {/* 6. Frequently Asked Questions (Minimum 3 in a Row Grid) */}
      <FAQSection onOpenBooking={onOpenBooking} />
    </>
  );
}
