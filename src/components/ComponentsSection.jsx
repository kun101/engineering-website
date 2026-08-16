import React from 'react';

export const COMPONENTS_DATA = [
  {
    id: 1,
    name: 'Electronics',
    desc: 'High-density multi-layer PCB assembly, rigid-flex circuitry, and ruggedized microelectronics.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Precision Machining & Mechanical',
    desc: '5-axis CNC milling, Swiss micro-turning, wire EDM, and sub-micron structural enclosures.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Thermal Management',
    desc: 'Microchannel cold plates, vapor chambers, and cryogenic phase-change thermal loops.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Fluid Systems',
    desc: 'High-pressure diffusion-bonded manifolds, proportional micro-valves, and hermetic fluidics.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    name: 'Actuation and Motion',
    desc: 'Frameless torque motors, zero-backlash harmonic drives, and precision linear stages.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    name: 'Avionics and Aerospace',
    desc: 'Radiation-hardened flight chassis, CubeSat structures, and space-grade harness assemblies.',
    image: 'https://images.unsplash.com/photo-1517976487502-536f98efd46a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    name: 'Materials',
    desc: 'Refractory superalloys, advanced technical ceramics, additive metals, and composite structures.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800'
  }
];

export default function ComponentsSection() {
  return (
    <section id="components" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Components</h2>
        </div>

        <div className="components-image-grid">
          {COMPONENTS_DATA.map((item) => (
            <div key={item.id} className="component-visual-card">
              <div className="card-image-wrap">
                <img src={item.image} alt={item.name} className="card-image" loading="lazy" />
                <div className="card-image-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
