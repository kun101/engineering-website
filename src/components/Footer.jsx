import React from 'react';

export default function Footer() {
  return (
    <footer 
      className="engineering-footer" 
      style={{ marginTop: '160px', paddingTop: '64px', paddingBottom: '64px' }}
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
        <div className="footer-links">
          <a href="#components">Components</a>
          <a href="#subsystems">Subsystems</a>
        </div>
      </div>
    </footer>
  );
}
