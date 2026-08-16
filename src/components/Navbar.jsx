import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <span className="brand-name">VULCAN<span>.TECH</span></span>
        </a>

        <nav className="nav-links">
          <a href="#components" className="nav-link">Components</a>
          <a href="#subsystems" className="nav-link">Subsystems</a>
        </nav>
      </div>
    </header>
  );
}
