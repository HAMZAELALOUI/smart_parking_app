import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/sections/HeroSection';
import Testimonials from './components/sections/Testimonials';
import Features from './components/sections/Features';
import SignupForm from './components/forms/SignupForm';
import LoginForm from './components/forms/LoginForm';
import ParkingSpaceForm from './components/forms/ParkingSpaceForm';
import BusinessSolutions from './components/sections/BusinessSolutions';
import ParkingSpotsDisplay from './pages/ParkingSpotsDisplay';
import ReservationDetails from './components/forms/ReservationDetails';
import PaymentMethods from './pages/PaymentMethods';
import MapComponent from './pages/MapComponent';
import UserProfile from './components/forms/UserProfile';
import ContactForm from './components/forms/ContactForm';

import HelpSection from './pages/HelpSection';
import PricingSection from './components/sections/PricingSection';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HowItWorksSection from './components/sections/HowItWorksSection';
import AboutUs from './pages/AboutUs';

function App() {
  const spots = [
    { id: 1, lat: 33.7490, lng: -84.3880 }, // Example spot in Atlanta
    // Additional spots can be added here
  ];
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Testimonials />
              <PricingSection />
              <Features />

            </>
          } />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/list-space" element={<>
            <ParkingSpaceForm />
            <BusinessSolutions />
          </>} />
          {/* <Route path="/parking-spots" element={<ParkingSpots />} /> */}
          <Route path="/parking-spots-display" element={<ParkingSpotsDisplay />} />
          <Route path="/reservation-details" element={<ReservationDetails />} />
          <Route path="/payement" element={<PaymentMethods />} />
          <Route path="/map" element={<MapComponent spots={spots} />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/help" element={<HelpSection />} />
          <Route path="/how-it-works" element={<HowItWorksSection />} />








        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
