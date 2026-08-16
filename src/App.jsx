import React, { useState } from 'react';
import ResponsiveHeroBanner from './components/ui/responsive-hero-banner';
import ComponentsSection from './components/ComponentsSection';
import SubsystemsSection from './components/SubsystemsSection';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import './App.css';

export default function App() {
  const [isRFQOpen, setIsRFQOpen] = useState(false);

  return (
    <div className="app-container">
      <main>
        <ResponsiveHeroBanner onOpenRFQ={() => setIsRFQOpen(true)} />
        <ComponentsSection />
        <SubsystemsSection />
      </main>
      <Footer />
      <RFQModal isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} />
    </div>
  );
}
