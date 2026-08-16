import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComponentsSection from './components/ComponentsSection';
import SubsystemsSection from './components/SubsystemsSection';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import './App.css';

export default function App() {
  const [isRFQOpen, setIsRFQOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero onOpenRFQ={() => setIsRFQOpen(true)} />
        <ComponentsSection />
        <SubsystemsSection />
      </main>
      <Footer />
      <RFQModal isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} />
    </div>
  );
}
