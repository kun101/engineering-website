import React from 'react';
import { 
  Zap, 
  ThermometerSnowflake, 
  Gauge, 
  Satellite, 
  Compass, 
  Radio, 
  RadioTower, 
  Server, 
  Anchor 
} from 'lucide-react';

export const SUBSYSTEMS_DATA = [
  {
    id: 1,
    name: 'Electrical & Power',
    icon: Zap,
    desc: 'High-density power distribution, PMUs, battery storage, and radiation-tolerant power conversion.'
  },
  {
    id: 2,
    name: 'Thermal Management',
    icon: ThermometerSnowflake,
    desc: 'Pumped liquid cold plates, thermoelectric cryo-loops, and high heat-flux dissipation radiators.'
  },
  {
    id: 3,
    name: 'Motion and Actuation',
    icon: Gauge,
    desc: 'Multi-axis servo gimbals, electro-mechanical actuators, and high-torque robotic joints.'
  },
  {
    id: 4,
    name: 'Avionics and Aerospace',
    icon: Satellite,
    desc: 'Integrated flight management, telemetry bay structures, and ruggedized DO-160G enclosures.'
  },
  {
    id: 5,
    name: 'Navigation and Positioning',
    icon: Compass,
    desc: 'Inertial navigation units (INS), fiber-optic gyros, and anti-jam GNSS positioning arrays.'
  },
  {
    id: 6,
    name: 'Communications',
    icon: Radio,
    desc: 'Free-space optical laser terminals, high-throughput SDR transceivers, and SATCOM links.'
  },
  {
    id: 7,
    name: 'RF & MW (Radiofrequency and Microwave)',
    icon: RadioTower,
    desc: 'Ka/Ku-band phased array feeds, GaN power amplifiers, and precision cavity filters.'
  },
  {
    id: 8,
    name: 'Computing & Communications',
    icon: Server,
    desc: 'Conduction-cooled OpenVPX edge AI servers, high-speed backplanes, and encrypted routers.'
  },
  {
    id: 9,
    name: 'Hydraulic and Propulsion-Support',
    icon: Anchor,
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
          {SUBSYSTEMS_DATA.map((sub) => {
            const Icon = sub.icon;
            return (
              <div key={sub.id} className="subsystem-clean-card">
                <div className="subsystem-card-icon">
                  <Icon size={22} color="#eab308" />
                </div>
                <h3 className="subsystem-card-title">{sub.name}</h3>
                <p className="subsystem-card-desc">{sub.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
