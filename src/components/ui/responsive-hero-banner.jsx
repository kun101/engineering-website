import React, { useState } from 'react';

export default function ResponsiveHeroBanner({
    logoUrl = "/logoEngineering.svg",
    backgroundImageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=3840",
    navLinks = [
        { label: "Components", href: "#components", isActive: true },
        { label: "Subsystems", href: "#subsystems" }
    ],
    ctaButtonText = "Request RFQ",
    ctaButtonHref = "#",
    badgeLabel = "Deep Tech",
    badgeText = "Precision Engineering & Manufacturing",
    title = "MedPrax Engineering",
    titleLine2 = "Hardware for Deep Tech",
    description = "Catering to companies building in Deep Tech. We help you build Medical Devices, Defense & Aerospace Platforms, Industrial Technology, and more. We will help companies manufacture.",
    primaryButtonText = "Request Engineering Review",
    primaryButtonHref = "#",
    secondaryButtonText = "Explore Components",
    secondaryButtonHref = "#components",
    partnersTitle = "Specialized manufacturing across mission-critical domains",
    partners = [
        { name: "Medical Devices", href: "#components" },
        { name: "Defense & Aerospace", href: "#components" },
        { name: "Industrial Tech", href: "#components" },
        { name: "Robotics & Motion", href: "#subsystems" },
        { name: "Next-Gen Hardware", href: "#subsystems" }
    ],
    onOpenRFQ
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative bg-black">
            {/* Background Hero Image */}
            <img
                src={backgroundImageUrl}
                alt="Deep Tech Systems"
                className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
            />
            {/* Gradient & Ring Overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black ring-1 ring-black/30" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(234,179,8,0.08)_0%,rgba(0,0,0,0.85)_75%)]" />

            {/* Header Navigation */}
            <header className="z-20 xl:top-4 relative">
                <div className="mx-6">
                    <div className="flex items-center justify-between pt-4 max-w-7xl mx-auto">
                        <a
                            href="#"
                            className="inline-flex items-center"
                            aria-label="MedPrax Engineering"
                        >
                            <img src={logoUrl} alt="MedPrax Engineering" className="h-10 w-auto" />
                        </a>

                        <nav className="hidden md:flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur-md">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`px-4 py-2 text-sm font-medium hover:text-white font-sans transition-colors ${
                                            link.isActive ? 'text-white' : 'text-white/80'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <button
                                    onClick={onOpenRFQ}
                                    className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#eab308] hover:bg-[#facc15] px-4 py-2 text-sm font-bold text-black font-sans transition-colors cursor-pointer"
                                >
                                    <span>{ctaButtonText}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </button>
                            </div>
                        </nav>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white/90">
                                <path d="M4 5h16" />
                                <path d="M4 12h16" />
                                <path d="M4 19h16" />
                            </svg>
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 p-4 bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col gap-3">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-sm font-medium text-white/80 hover:text-white px-2 py-1"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button
                                onClick={() => { setMobileMenuOpen(false); onOpenRFQ?.(); }}
                                className="w-full bg-[#eab308] text-black font-bold py-2 rounded-full text-sm text-center"
                            >
                                {ctaButtonText}
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* Banner Main Body */}
            <div className="z-10 relative">
                <div className="sm:pt-24 md:pt-28 lg:pt-32 max-w-7xl mx-auto pt-20 px-6 pb-20">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Pill Badge */}
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
                            <span className="inline-flex items-center text-xs font-bold text-black bg-[#eab308] rounded-full py-0.5 px-2.5 font-sans tracking-wide uppercase">
                                {badgeLabel}
                            </span>
                            <span className="text-sm font-medium text-white/90 font-sans">
                                {badgeText}
                            </span>
                        </div>

                        {/* Heading in Instrument Serif */}
                        <h1 className="sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-5xl text-white tracking-tight font-instrument-serif font-normal animate-fade-slide-in-2">
                            {title}
                            <br className="hidden sm:block" />
                            <span className="text-[#eab308] italic block sm:inline sm:ml-3">{titleLine2}</span>
                        </h1>

                        {/* Narrative Description */}
                        <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/80 max-w-2xl mt-6 mx-auto leading-relaxed">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
                            <button
                                onClick={onOpenRFQ}
                                className="inline-flex items-center gap-2 hover:bg-[#facc15] text-sm font-bold text-black bg-[#eab308] ring-[#eab308]/40 ring-1 rounded-full py-3.5 px-7 font-sans transition-all cursor-pointer shadow-[0_0_25px_rgba(234,179,8,0.35)]"
                            >
                                <span>{primaryButtonText}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                            <a
                                href={secondaryButtonHref}
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-6 py-3.5 text-sm font-medium text-white ring-1 ring-white/15 font-sans transition-colors"
                            >
                                <span>{secondaryButtonText}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Domains Strip */}
                    <div className="mx-auto mt-20 max-w-5xl">
                        <p className="animate-fade-slide-in-1 text-xs font-semibold tracking-widest text-white/60 uppercase text-center">
                            {partnersTitle}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 animate-fade-slide-in-2 text-white/80 mt-6 items-center justify-items-center gap-3">
                            {partners.map((partner, index) => (
                                <a
                                    key={index}
                                    href={partner.href || "#components"}
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:text-[#eab308] hover:border-[#eab308]/40 transition-all"
                                >
                                    {partner.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
