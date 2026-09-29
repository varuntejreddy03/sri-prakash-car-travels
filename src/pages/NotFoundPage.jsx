import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/travelData';
export default function NotFoundPage() {
  return (
    <div>
      <SEOHead
        title="Page Not Found | Sri Prakash Car Travels Kakinada"
        description="The page you are looking for does not exist. Visit Sri Prakash Car Travels for 24/7 taxi service in Kakinada."
        canonical="/404"
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center px-4 py-20 max-w-lg">
          <div className="text-8xl font-extrabold font-outfit text-[#FF5B00] mb-4">404</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-outfit text-slate-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 font-jakarta mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let us help you find the right destination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="ref-btn-primary group"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
              <span className="ref-circle-arrow">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </Link>
            <a
              href={`tel:+91${businessInfo.phone}`}
              className="ref-btn-outline text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span>Call +91 {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
