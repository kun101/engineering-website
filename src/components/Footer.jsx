import React from 'react';

export default function Footer({ onOpenRFQ }) {
  return (
    <footer 
      className="engineering-footer" 
      style={{ marginTop: '120px', paddingTop: '64px', paddingBottom: '64px' }}
    >
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" aria-label="MedPrax Engineering">
            <img 
              src="/logoEngineering.svg" 
              alt="MedPrax Engineering Logo" 
              className="footer-logo-img" 
            />
          </a>
          <p className="footer-claim">Catering to companies building in Deep Tech.</p>
        </div>
        <div className="footer-links flex items-center gap-6">
          <a href="#components" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors font-spline">
            Components
          </a>
          <a href="#subsystems" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors font-spline">
            Subsystems
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              if (onOpenRFQ) {
                e.preventDefault();
                onOpenRFQ();
              }
            }}
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors font-spline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
