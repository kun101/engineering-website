import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ResponsiveHeroBanner from './components/ui/responsive-hero-banner';
import FUIBentoGridDark from './components/ui/bento';
import SubsystemsSection from './components/SubsystemsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import './App.css';

export default function App() {
  const [isRFQOpen, setIsRFQOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Top-level persistent Navbar */}
      <Navbar onOpenRFQ={scrollToContact} />
      
      <main>
        <ResponsiveHeroBanner onOpenRFQ={scrollToContact} />
        <FUIBentoGridDark />
        <SubsystemsSection />
        <ContactSection />
      </main>

      <Footer onOpenRFQ={scrollToContact} />
      <RFQModal isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} />
    </div>
  );
}
