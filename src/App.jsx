import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import VehicleModal from './components/VehicleModal';
import ScrollToTop from './components/ScrollToTop';

// Main Pages
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import ServicesPage from './pages/ServicesPage';
import AirportTaxiPage from './pages/AirportTaxiPage';
import TempleToursPage from './pages/TempleToursPage';
import HolidayPackagesPage from './pages/HolidayPackagesPage';
import RoutesPage from './pages/RoutesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Dedicated Subpages
import ServiceDetailPage from './pages/ServiceDetailPage';
import AirportDetailPage from './pages/AirportDetailPage';
import TempleTourDetailPage from './pages/TempleTourDetailPage';
import HolidayDetailPage from './pages/HolidayDetailPage';

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
            <Route 
              path="/fleet" 
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
              path="/kakinada-temple-tours" 
              element={<TempleToursPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/temple-tours/:packageId" 
              element={<TempleTourDetailPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/kakinada-temple-tours/:packageId" 
              element={<TempleTourDetailPage onOpenBooking={handleOpenBooking} />} 
            />

            {/* Holiday Packages Hub & Individual Package Subpages */}
            <Route 
              path="/holiday-packages" 
              element={<HolidayPackagesPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/tour-packages" 
              element={<HolidayPackagesPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/packages" 
              element={<HolidayPackagesPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/holiday-packages/:packageId" 
              element={<HolidayDetailPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/tour-packages/:packageId" 
              element={<HolidayDetailPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/packages/:packageId" 
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
              path="/about-us" 
              element={<AboutPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/contact-us" 
              element={<ContactPage />} 
            />

            {/* Fallback to Home */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenBooking={handleOpenBooking} 
                  onSelectVehicle={(car) => setSelectedVehicle(car)} 
                />
              } 
            />
          </Routes>
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
