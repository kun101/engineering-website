import React from 'react';

const SECTORS_DATA = [
  {
    id: 'medical',
    title: 'Medical Devices',
    badge: 'ISO 13485 / FDA',
    items: ['Surgical robotics & articulation joints', 'Microfluidic diagnostic cartridges', 'Hermetic titanium enclosures']
  },
  {
    id: 'defense-aero',
    title: 'Defense & Aerospace Platforms',
    badge: 'AS9100D / ITAR',
    items: ['Satellite payloads & structural chassis', 'AESA radar & RF front-ends', 'Cryogenic propulsion valving']
  },
  {
    id: 'industrial',
    title: 'Industrial Technology',
    badge: 'IPC Class 3 / CE',
    items: ['Sub-micron semiconductor stages', 'High-pressure proportional manifolds', 'High-power motor controllers']
  },
  {
    id: 'more',
    title: 'And More Deep Tech Domains',
    badge: 'Custom Hardware',
    items: ['Quantum cryostat hardware', 'High-vacuum feedthroughs', 'Solid-state battery thermal systems']
  }
];

export default function DeepTechSectors() {
  return (
    <section id="sectors" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Catering to Companies Building in Deep Tech</h2>
          <p className="section-desc">
            We help you build <strong>Medical Devices</strong>, <strong>Defense &amp; Aerospace Platforms</strong>, <strong>Industrial Technology</strong>, and more.
          </p>
        </div>

        <div className="sectors-grid">
          {SECTORS_DATA.map((sector) => (
            <div key={sector.id} className="panel-card sector-card">
              <div className="sector-header">
                <h3 className="sector-title">{sector.title}</h3>
                <span className="sector-badge">{sector.badge}</span>
              </div>

              <ul className="sector-list">
                {sector.items.map((item, idx) => (
                  <li key={idx} className="sector-list-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
