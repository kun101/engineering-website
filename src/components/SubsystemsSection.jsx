import React from 'react';

export const SUBSYSTEMS_DATA = [
  {
    id: 1,
    name: 'Electrical & Power',
    desc: 'High-density power distribution, PMUs, battery storage, and radiation-tolerant power conversion.'
  },
  {
    id: 2,
    name: 'Thermal Management',
    desc: 'Pumped liquid cold plates, thermoelectric cryo-loops, and high heat-flux dissipation radiators.'
  },
  {
    id: 3,
    name: 'Motion and Actuation',
    desc: 'Multi-axis servo gimbals, electro-mechanical actuators, and high-torque robotic joints.'
  },
  {
    id: 4,
    name: 'Avionics and Aerospace',
    desc: 'Integrated flight management, telemetry bay structures, and ruggedized DO-160G enclosures.'
  },
  {
    id: 5,
    name: 'Navigation and Positioning',
    desc: 'Inertial navigation units (INS), fiber-optic gyros, and anti-jam GNSS positioning arrays.'
  },
  {
    id: 6,
    name: 'Communications',
    desc: 'Free-space optical laser terminals, high-throughput SDR transceivers, and SATCOM links.'
  },
  {
    id: 7,
    name: 'RF & MW (Radiofrequency and Microwave)',
    desc: 'Ka/Ku-band phased array feeds, GaN power amplifiers, and precision cavity filters.'
  },
  {
    id: 8,
    name: 'Computing & Communications',
    desc: 'Conduction-cooled OpenVPX edge AI servers, high-speed backplanes, and encrypted routers.'
  },
  {
    id: 9,
    name: 'Hydraulic and Propulsion-Support',
    desc: 'High-pressure propellant valving, electron-beam welded tanks, and cryogenic regulators.'
  }
];

export default function SubsystemsSection() {
  return (
    <section id="subsystems" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Subsystems</h2>
        </div>

        <div className="subsystems-cards-grid">
          {SUBSYSTEMS_DATA.map((sub) => (
            <div key={sub.id} className="subsystem-clean-card">
              <h3 className="subsystem-card-title">{sub.name}</h3>
              <p className="subsystem-card-desc">{sub.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
