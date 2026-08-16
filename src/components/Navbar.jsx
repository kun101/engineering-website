import React, { useState } from 'react';

export default function Navbar({ onOpenRFQ }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Components", href: "#components" },
    { label: "Subsystems", href: "#subsystems" },
    { label: "Contact Us", onClick: onOpenRFQ }
  ];

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-[100] flex justify-center items-center px-4 sm:px-8 pointer-events-none">
      <div 
        className="pointer-events-auto w-full max-w-5xl flex items-center justify-between rounded-none bg-neutral-950/90 border border-white/20 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10"
        style={{ padding: '12px 24px', borderRadius: 0 }}
      >
        {/* Left: Brand Logo */}
        <a
          href="#"
          className="inline-flex items-center"
          aria-label="MedPrax Engineering"
        >
          <img src="/logoEngineering.svg" alt="MedPrax Engineering" className="h-7 sm:h-8 w-auto" />
        </a>

        {/* Right: Normal Right-Aligned Navigation Links (No special button) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => {
            if (link.onClick) {
              return (
                <button
                  key={index}
                  onClick={link.onClick}
                  className="text-sm font-medium text-neutral-300 hover:text-white font-spline transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  {link.label}
                </button>
              );
            }
            return (
              <a
                key={index}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white font-spline transition-colors"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-none bg-white/10 text-white"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div 
          className="pointer-events-auto md:hidden absolute top-16 left-4 right-4 bg-neutral-950/95 backdrop-blur-2xl rounded-none border border-white/20 flex flex-col gap-4 shadow-2xl p-5 z-[100]"
          style={{ borderRadius: 0 }}
        >
          {navLinks.map((link, index) => {
            if (link.onClick) {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    link.onClick();
                  }}
                  className="text-sm font-medium text-neutral-300 hover:text-white font-spline text-left bg-transparent border-none p-0 cursor-pointer"
                >
                  {link.label}
                </button>
              );
            }
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-300 hover:text-white font-spline"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
