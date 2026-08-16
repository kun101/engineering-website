import React from 'react';
import MoltenMetal from './MoltenMetal';

export default function Hero({ onOpenRFQ }) {
  return (
    <section className="hero-section">
      {/* Molten Metal Shader - Autonomous Procedural Flow without Cursor Tracking */}
      <div className="hero-shader-backdrop">
        <MoltenMetal
          color1="#000000"
          color2="#eab308"
          color3="#ffffff"
          speed={0.34}
          scale={3.6}
          detail={4}
          glow={2.0}
          coreSize={0.13}
          swirl={1.15}
          fold={-0.20}
          blackPoint={0.03}
          brightness={1.5}
          colorMode="molten"
          grain={true}
          grainIntensity={0.04}
          mouseInteraction={false}
          mouseStrength={0}
          opacity={0.96}
        />
        <div className="shader-gradient-overlay"></div>
      </div>

      <div className="container hero-content-wrapper">
        <h1 className="hero-headline">
          Engineering Hardware
          <span className="block text-3xl font-medium text-white/80 mt-2">
            for Deep Tech
          </span>
        </h1>

        <p className="hero-lead-text">
          Catering to companies building in Deep Tech. We help you build <strong>Medical Devices</strong>, <strong>Defense &amp; Aerospace Platforms</strong>, <strong>Industrial Technology</strong>, and more.
        </p>

        {/* Single Primary Action */}
        <div className="hero-actions-row">
          <button className="btn-primary btn-hero-cta" onClick={onOpenRFQ}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
