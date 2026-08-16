"use client";

import React, { useState } from 'react';

export interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

export interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    onOpenRFQ?: () => void;
}

export const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl = "/logoEngineering.svg",
    backgroundImageUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg",
    navLinks = [
        { label: "Components", href: "#components" },
        { label: "Subsystems", href: "#subsystems" }
    ],
    ctaButtonText = "Contact Us",
    title = "MedPrax Engineering",
    titleLine2 = "Hardware for Deep Tech",
    description = "Catering to companies building in Deep Tech. We help you build Medical Devices, Defense & Aerospace Platforms, Industrial Technology, and more. We will help companies manufacture.",
    onOpenRFQ
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative bg-black flex flex-col justify-between items-center">
            {/* Background Solar Arc Planetary Image (Static Perfect Framing) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <img
                    src={backgroundImageUrl}
                    alt="Background Planetary Flare"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Glowing Light Beam Animating Along the Planetary Circular Arc */}
            <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-[1]" 
                viewBox="0 0 1920 1080" 
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="orbitalBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                        <stop offset="40%" stopColor="#facc15" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="orbitalGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="blur1" />
                        <feGaussianBlur stdDeviation="18" result="blur2" />
                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Ambient Subtle Base Glow along the arc */}
                <path 
                    d="M -80 140 C 580 180, 1140 480, 2020 1140" 
                    fill="none" 
                    stroke="rgba(234, 179, 8, 0.15)" 
                    strokeWidth="4" 
                    className="animate-orbital-ambient"
                />

                {/* Primary Fast Moving Luminous Light Streak */}
                <path 
                    d="M -80 140 C 580 180, 1140 480, 2020 1140" 
                    fill="none" 
                    stroke="url(#orbitalBeamGrad)" 
                    strokeWidth="3.5" 
                    filter="url(#orbitalGlow)"
                    className="animate-orbital-beam-1"
                />

                {/* Secondary Cascading Light Particle Pulse */}
                <path 
                    d="M -80 140 C 580 180, 1140 480, 2020 1140" 
                    fill="none" 
                    stroke="url(#orbitalBeamGrad)" 
                    strokeWidth="2.5" 
                    filter="url(#orbitalGlow)"
                    className="animate-orbital-beam-2"
                />
            </svg>

            {/* Subtle Vignette Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/90 z-[2]" />

            {/* Unified Floating Navbar (Razor Sharp Edges) */}
            <header className="fixed top-6 left-0 right-0 z-30 flex justify-center items-center px-4">
                <div 
                    className="flex items-center gap-3 sm:gap-6 rounded-none bg-neutral-950/85 border border-white/20 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10"
                    style={{ padding: '6px 8px 6px 16px', borderRadius: 0 }}
                >
                    {/* Brand Logo */}
                    <a
                        href="#"
                        className="inline-flex items-center pr-2"
                        aria-label="MedPrax Engineering"
                    >
                        <img src={logoUrl} alt="MedPrax Engineering" className="h-7 sm:h-8 w-auto" />
                    </a>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                style={{ padding: '8px 16px', borderRadius: 0 }}
                                className={`text-sm font-medium hover:text-white font-sans transition-colors rounded-none ${
                                    link.isActive ? 'text-white font-semibold' : 'text-neutral-300'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Contact Us CTA Button with sharp edges */}
                    <button
                        onClick={onOpenRFQ}
                        style={{ padding: '10px 22px', borderRadius: 0 }}
                        className="inline-flex items-center gap-1.5 rounded-none bg-white text-sm font-bold text-neutral-950 hover:bg-neutral-100 font-sans transition-all cursor-pointer shadow-md hover:scale-105"
                    >
                        <span>{ctaButtonText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </button>

                    {/* Mobile Hamburger toggle */}
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
                        className="md:hidden mt-3 bg-neutral-950/95 backdrop-blur-2xl rounded-none border border-white/20 flex flex-col gap-3 shadow-2xl max-w-xs w-full"
                        style={{ padding: '16px', borderRadius: 0 }}
                    >
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ padding: '8px 12px' }}
                                className="text-sm font-medium text-white/80 hover:text-white text-center"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            {/* Centered Hero Content */}
            <div 
                className="z-10 relative flex-1 flex flex-col items-center justify-center my-auto w-full"
                style={{ padding: '120px 24px 60px' }}
            >
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    {/* Headline */}
                    <h1 
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-normal font-instrument-serif animate-fade-slide-in-1"
                        style={{ marginBottom: '28px', lineHeight: 1.12 }}
                    >
                        {title}
                        <br />
                        {titleLine2}
                    </h1>

                    {/* Narrative Description */}
                    <p 
                        className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto font-sans animate-fade-slide-in-2"
                        style={{ marginBottom: '36px', lineHeight: 1.7 }}
                    >
                        {description}
                    </p>

                    {/* Single "Contact Us" CTA Button (Razor Sharp) */}
                    <div className="flex items-center justify-center animate-fade-slide-in-3">
                        <button
                            onClick={onOpenRFQ}
                            style={{ padding: '14px 36px', fontSize: '15px', borderRadius: 0 }}
                            className="inline-flex items-center justify-center gap-2 hover:bg-neutral-100 font-bold text-neutral-950 bg-white rounded-none font-sans shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all cursor-pointer hover:scale-105"
                        >
                            <span>Contact Us</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Spacer */}
            <div style={{ height: '48px' }}></div>
        </section>
    );
};

export default ResponsiveHeroBanner;
