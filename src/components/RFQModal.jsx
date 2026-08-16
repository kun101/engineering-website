import React, { useState } from 'react';
import { X } from 'lucide-react';
import { COMPONENTS_DATA } from './ComponentsSection';
import { SUBSYSTEMS_DATA } from './SubsystemsSection';

export default function RFQModal({ isOpen, onClose }) {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedSubsystems, setSelectedSubsystems] = useState([]);
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleComponent = (name) => {
    setSelectedComponents(prev => 
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

  const toggleSubsystem = (name) => {
    setSelectedSubsystems(prev => 
      prev.includes(name) ? prev.filter(s => s !== name) : [...prev, name]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="rfq-form">
            <h2 className="rfq-title">Request Engineering Review</h2>
            
            <div className="form-group">
              <label className="form-label">Components</label>
              <div className="checkbox-grid">
                {COMPONENTS_DATA.map((name, idx) => {
                  const isChecked = selectedComponents.includes(name);
                  return (
                    <div
                      key={idx}
                      className={`checkbox-card ${isChecked ? 'checkbox-card-active' : ''}`}
                      onClick={() => toggleComponent(name)}
                    >
                      <span className="checkbox-card-title">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subsystems</label>
              <div className="checkbox-grid">
                {SUBSYSTEMS_DATA.map((name, idx) => {
                  const isChecked = selectedSubsystems.includes(name);
                  return (
                    <div
                      key={idx}
                      className={`checkbox-card ${isChecked ? 'checkbox-card-active' : ''}`}
                      onClick={() => toggleSubsystem(name)}
                    >
                      <span className="checkbox-card-title">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Work Email</label>
              <input
                type="email"
                required
                placeholder="engineer@company.com"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Project Requirements / Notes</label>
              <textarea
                rows="3"
                className="form-textarea"
                placeholder="Specify tolerances, materials, or target schedule..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary rfq-submit-btn">
              Submit Review Request
            </button>
          </form>
        ) : (
          <div className="rfq-success-content">
            <h2 className="success-title">Review Request Received</h2>
            <p className="success-desc">We will review your requirements and reach out directly to {email}.</p>
            <button className="btn-primary" onClick={() => { setSubmitted(false); onClose(); }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
