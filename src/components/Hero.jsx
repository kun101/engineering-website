import React from 'react';
import MoltenMetal from './MoltenMetal';

export default function Hero({ onOpenRFQ }) {
  return (
    <section className="hero-section">
      {/* Molten Metal Shader in Yellow on Black */}
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
          mouseInteraction={true}
          mouseStrength={0.32}
          opacity={0.96}
        />
        <div className="shader-gradient-overlay"></div>
      </div>

      <div className="container hero-content-wrapper">
        <h1 className="hero-headline">
          Deep Tech Manufacturing
        </h1>

        <p className="hero-lead-text">
          Catering to companies building in Deep Tech. We help you build <strong>Medical Devices</strong>, <strong>Defense &amp; Aerospace Platforms</strong>, <strong>Industrial Technology</strong>, and more. We will help companies manufacture.
        </p>

        {/* The One Single CTA */}
        <div className="hero-actions-row">
          <button className="btn-primary btn-hero-cta" onClick={onOpenRFQ}>
            Request Engineering Review
          </button>
        </div>
      </div>
    </section>
  );
}
