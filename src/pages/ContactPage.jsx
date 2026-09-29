import React from 'react';
import PageBanner from '../components/PageBanner';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';

export default function ContactPage() {
  return (
    <div>
      <SEOHead
        title="Contact Sri Prakash Car Travels Kakinada – 24/7 Cab Booking Helpline"
        description="Contact Sri Prakash Car Travels for instant cab booking in Kakinada. Call +91 9848903025, WhatsApp us, or visit our office at Kondayya Palem. Available 24 hours, 365 days."
        canonical="/contact"
        keywords="contact Sri Prakash Car Travels, Kakinada taxi phone number, cab booking helpline Kakinada"
      />
      <PageBanner
        title="Contact Sri Prakash Car Travels"
        subtitle="We are available 24 hours a day, 7 days a week for immediate cab dispatch and custom tour inquiries."
        breadcrumb="Contact"
      />
      <ContactSection />
    </div>
  );
}
