import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ParkingSpaceForm from './components/ParkingSpaceForm';
import BusinessSolutions from './components/BusinessSolutions';
import ParkingSpots from './components/ParkingSpots';
import ParkingSpotsDisplay from './components/ParkingSpotsDisplay';
import ReservationDetails from './components/ReservationDetails';
import PaymentMethods from './components/PaymentMethods';
import MapComponent from './components/MapComponent';
import UserProfile from './components/UserProfile';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import HelpSection from './components/HelpSection';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';

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
