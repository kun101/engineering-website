import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ResponsiveHeroBanner from './components/ui/responsive-hero-banner';
import FUIBentoGridDark from './components/ui/bento';
import SubsystemsSection from './components/SubsystemsSection';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import './App.css';

export default function App() {
  const [isRFQOpen, setIsRFQOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Top-level persistent Navbar above all sections and cards */}
      <Navbar onOpenRFQ={() => setIsRFQOpen(true)} />
      <main>
        <ResponsiveHeroBanner onOpenRFQ={() => setIsRFQOpen(true)} />
        <FUIBentoGridDark />
        <SubsystemsSection />
      </main>
      <Footer />
      <RFQModal isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} />
    </div>
  );
}
