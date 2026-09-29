import React, { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import VehicleModal from './components/VehicleModal';
import ScrollToTop from './components/ScrollToTop';

// Code-split page imports for smaller initial bundle
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CarsPage = React.lazy(() => import('./pages/CarsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AirportTaxiPage = React.lazy(() => import('./pages/AirportTaxiPage'));
const TempleToursPage = React.lazy(() => import('./pages/TempleToursPage'));
const HolidayPackagesPage = React.lazy(() => import('./pages/HolidayPackagesPage'));
const RoutesPage = React.lazy(() => import('./pages/RoutesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const AirportDetailPage = React.lazy(() => import('./pages/AirportDetailPage'));
const TempleTourDetailPage = React.lazy(() => import('./pages/TempleTourDetailPage'));
const HolidayDetailPage = React.lazy(() => import('./pages/HolidayDetailPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-[#FF5B00] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 font-jakarta flex flex-col selection:bg-[#FF5B00] selection:text-white">
        
        {/* Persistent Sticky Navbar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Primary Pages */}
              <Route 
                path="/" 
                element={
                  <HomePage 
                    onOpenBooking={handleOpenBooking} 
                    onSelectVehicle={(car) => setSelectedVehicle(car)} 
                  />
                } 
              />
              <Route 
                path="/cars" 
                element={
                  <CarsPage 
                    onSelectVehicle={(car) => setSelectedVehicle(car)} 
                    onOpenBooking={handleOpenBooking} 
                  />
                } 
              />
              
              {/* Services Hub & Individual Service Subpages */}
              <Route 
                path="/services" 
                element={<ServicesPage onOpenBooking={handleOpenBooking} />} 
              />
              <Route 
                path="/services/:serviceId" 
                element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />} 
              />

              {/* Airport Taxi Hub & Individual Airport Subpages */}
              <Route 
                path="/airport-taxi" 
                element={<AirportTaxiPage onOpenBooking={handleOpenBooking} />} 
              />
              <Route 
                path="/airport-taxi/:airportId" 
                element={<AirportDetailPage onOpenBooking={handleOpenBooking} />} 
              />

              {/* Temple Tours Hub & Individual Temple Subpages */}
              <Route 
                path="/temple-tours" 
                element={<TempleToursPage onOpenBooking={handleOpenBooking} />} 
              />
              <Route 
                path="/temple-tours/:packageId" 
                element={<TempleTourDetailPage onOpenBooking={handleOpenBooking} />} 
              />

              {/* Holiday Packages Hub & Individual Package Subpages */}
              <Route 
                path="/holiday-packages" 
                element={<HolidayPackagesPage onOpenBooking={handleOpenBooking} />} 
              />
              <Route 
                path="/holiday-packages/:packageId" 
                element={<HolidayDetailPage onOpenBooking={handleOpenBooking} />} 
              />

              {/* Routes, About, Contact */}
              <Route 
                path="/routes" 
                element={<RoutesPage onOpenBooking={handleOpenBooking} />} 
              />
              <Route 
                path="/about" 
                element={<AboutPage onOpenBooking={handleOpenBooking} />} 
              />
              <Route 
                path="/contact" 
                element={<ContactPage />} 
              />

              {/* Redirect duplicate aliases (client-side backup for vercel.json 301s) */}
              <Route path="/fleet" element={<Navigate to="/cars" replace />} />
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
              <Route path="/tour-packages" element={<Navigate to="/holiday-packages" replace />} />
              <Route path="/packages" element={<Navigate to="/holiday-packages" replace />} />
              <Route path="/tour-packages/:packageId" element={<Navigate to="/holiday-packages" replace />} />
              <Route path="/packages/:packageId" element={<Navigate to="/holiday-packages" replace />} />
              <Route path="/kakinada-temple-tours" element={<Navigate to="/temple-tours" replace />} />
              <Route path="/kakinada-temple-tours/:packageId" element={<Navigate to="/temple-tours" replace />} />

              {/* Proper 404 Page (replaces soft-404 catch-all) */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Floating Quick Action Buttons */}
        <FloatingActions />

        {/* Interactive Modal Booking Engine */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />

        {/* Vehicle Specification Modal */}
        {selectedVehicle && (
          <VehicleModal
            vehicle={selectedVehicle}
            onClose={() => setSelectedVehicle(null)}
          />
        )}

      </div>
    </BrowserRouter>
  );
}
