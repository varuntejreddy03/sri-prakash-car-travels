import React from 'react';
import PageBanner from '../components/PageBanner';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        title="Contact Sri Prakash Car Travels"
        subtitle="We are available 24 hours a day, 7 days a week for immediate cab dispatch and custom tour inquiries."
        breadcrumb="Contact"
      />
      <ContactSection />
    </div>
  );
}
