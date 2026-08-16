import React from 'react';

export default function Footer() {
  return (
    <footer className="engineering-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="brand-name">VULCAN<span>.TECH</span></span>
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
