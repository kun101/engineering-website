import React from 'react';

const WORKFLOW_STEPS = [
  {
    title: 'DFM Review',
    desc: 'CAD/CAM analysis, thermal & stress FEA simulation, tolerance stack-up.'
  },
  {
    title: 'Rapid Prototyping',
    desc: 'Precision CNC, DMLS metal 3D printing, AS9102 First Article Inspection.'
  },
  {
    title: 'Certified Production',
    desc: 'Full-rate AS9100D & ISO 13485 manufacturing with automated AOI & X-Ray.'
  },
  {
    title: 'Qualification & Testing',
    desc: 'TVAC thermal-vacuum cycling, vibration testing, and helium leak detection.'
  }
];

export default function ManufacturingWorkflow() {
  return (
    <section id="workflow" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Manufacturing Pipeline</h2>
          <p className="section-desc">
            End-to-end hardware pipeline engineered for zero-failure deep tech applications.
          </p>
        </div>

        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div key={idx} className="panel-card workflow-card">
              <h3 className="workflow-title">{step.title}</h3>
              <p className="workflow-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
