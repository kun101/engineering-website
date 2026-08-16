import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    domain: 'Deep Tech & Hardware Engineering',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.submitting) return;

    setStatus({ submitting: true, success: false, error: null });

    const params = {
      heading: `MedPrax Engineering Enquiry from ${formData.name}`,
      message: `Their details are as follows | NAME : ${formData.name} | EMAIL : ${formData.email} | COMPANY : ${formData.company || 'N/A'} | DOMAIN : ${formData.domain} | MESSAGE : ${formData.message} |`
    };

    try {
      await emailjs.send(
        'service_b6w76pk',
        'template_55wksj3',
        params,
        'M63yKgHlJOQX_L35W'
      );
      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        company: '',
        domain: 'Deep Tech & Hardware Engineering',
        message: ''
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'We could not send your message right now. Please try again or email us directly at support@medprax.in.'
      });
    }
  };

  return (
    <section 
      id="contact" 
      className="container mx-auto px-6 max-w-7xl"
      style={{ paddingTop: '120px', paddingBottom: '140px' }}
    >
      {/* Center-aligned Section Header */}
      <div 
        className="flex flex-col items-center text-center max-w-3xl mx-auto"
        style={{ marginBottom: '64px' }}
      >
        <span className="text-[#eab308] text-xs font-semibold uppercase tracking-widest font-spline mb-3">
          Get in Touch
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-spline">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl font-medium tracking-tight mt-4 text-white/70 font-spline">
          Start a conversation with our engineering team. Share your technical specifications, tolerances, or production requirements.
        </p>
      </div>

      {/* Main Grid: Left Details & Right Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Route & Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div 
            className="bg-zinc-950/80 border border-white/10 p-8 shadow-xl"
            style={{ borderRadius: 0 }}
          >
            <h3 className="text-2xl font-bold text-white font-spline mb-4">
              Direct Technical Channels
            </h3>
            <p className="text-sm text-zinc-300 font-spline leading-relaxed mb-8">
              We connect your requirements directly with our manufacturing engineers, CAD/DFM reviewers, and subsystem specialists.
            </p>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#eab308]/10 border border-[#eab308]/20 text-[#eab308]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold text-zinc-400 font-spline">Email Us</div>
                  <a 
                    href="mailto:support@medprax.in" 
                    className="text-base font-medium text-white hover:text-[#eab308] transition-colors font-spline"
                  >
                    support@medprax.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#eab308]/10 border border-[#eab308]/20 text-[#eab308]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold text-zinc-400 font-spline">Call Us</div>
                  <a 
                    href="tel:+919890939678" 
                    className="text-base font-medium text-white hover:text-[#eab308] transition-colors font-spline"
                  >
                    +91 9890939678
                  </a>
                </div>
              </div>

              {/* Turnaround */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#eab308]/10 border border-[#eab308]/20 text-[#eab308]">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold text-zinc-400 font-spline">Response Time</div>
                  <div className="text-base font-medium text-white font-spline">
                    Within 24 Hours
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#eab308]/10 border border-[#eab308]/20 text-[#eab308]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold text-zinc-400 font-spline">Facility & Office</div>
                  <div className="text-sm font-medium text-zinc-300 font-spline leading-relaxed">
                    Nagpur, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div 
            className="bg-zinc-950/80 border border-white/10 p-8 sm:p-10 shadow-2xl relative"
            style={{ borderRadius: 0 }}
          >
            <h3 className="text-2xl font-bold text-white font-spline mb-2">
              Send an Enquiry
            </h3>
            <p className="text-sm text-zinc-300 font-spline mb-8">
              Fill out the form below and our engineering team will get back to you promptly.
            </p>

            {status.success ? (
              <div 
                className="p-8 bg-[#eab308]/10 border border-[#eab308]/30 flex flex-col items-center text-center gap-4 animate-fade-slide-in-1"
                style={{ borderRadius: 0 }}
              >
                <CheckCircle2 size={48} className="text-[#eab308]" />
                <h4 className="text-xl font-bold text-white font-spline">
                  Enquiry Sent Successfully
                </h4>
                <p className="text-sm text-zinc-300 font-spline max-w-md">
                  Thank you for reaching out. Our engineering team has received your enquiry and will review your requirements shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus({ submitting: false, success: false, error: null })}
                  className="mt-2 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 px-6 py-2.5 font-spline cursor-pointer transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {status.error && (
                  <div 
                    className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-sm flex items-center gap-3 font-spline"
                    style={{ borderRadius: 0 }}
                  >
                    <AlertCircle size={18} className="shrink-0 text-red-400" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact_name" className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-spline">
                      Full Name <span className="text-[#eab308]">*</span>
                    </label>
                    <input
                      id="contact_name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#eab308] focus:outline-none font-spline placeholder:text-zinc-600 transition-colors"
                      style={{ borderRadius: 0 }}
                    />
                  </div>

                  {/* Work Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact_email" className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-spline">
                      Work Email <span className="text-[#eab308]">*</span>
                    </label>
                    <input
                      id="contact_email"
                      name="email"
                      type="email"
                      required
                      placeholder="engineer@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#eab308] focus:outline-none font-spline placeholder:text-zinc-600 transition-colors"
                      style={{ borderRadius: 0 }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organization / Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact_company" className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-spline">
                      Company / Organization
                    </label>
                    <input
                      id="contact_company"
                      name="company"
                      type="text"
                      placeholder="e.g. DeepTech Labs"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#eab308] focus:outline-none font-spline placeholder:text-zinc-600 transition-colors"
                      style={{ borderRadius: 0 }}
                    />
                  </div>

                  {/* Primary Domain / Interest */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact_domain" className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-spline">
                      Focus Area
                    </label>
                    <select
                      id="contact_domain"
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/15 px-4 py-3 text-white text-sm focus:border-[#eab308] focus:outline-none font-spline transition-colors"
                      style={{ borderRadius: 0 }}
                    >
                      <option value="Deep Tech & Hardware Engineering">Deep Tech Hardware</option>
                      <option value="Medical Devices">Medical Devices</option>
                      <option value="Defense & Aerospace Platforms">Defense & Aerospace Platforms</option>
                      <option value="Industrial Technology">Industrial Technology</option>
                      <option value="Electronics & Microelectronics">Microelectronics & PCB</option>
                      <option value="Precision Machining & Mechanical">Precision Machining & Mechanical</option>
                      <option value="Thermal & Fluid Systems">Thermal & Fluid Systems</option>
                      <option value="Subsystem Integration">Complete Subsystems</option>
                    </select>
                  </div>
                </div>

                {/* Requirements / Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact_message" className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-spline">
                    Project Requirements / Message <span className="text-[#eab308]">*</span>
                  </label>
                  <textarea
                    id="contact_message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us what you are building, target specifications, tolerances, or schedule..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#eab308] focus:outline-none font-spline placeholder:text-zinc-600 transition-colors resize-y"
                    style={{ borderRadius: 0 }}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    style={{ padding: '14px 36px', borderRadius: 0 }}
                    className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-sm font-spline transition-all cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <span>{status.submitting ? 'Sending...' : 'Send Enquiry'}</span>
                    <Send size={16} className={status.submitting ? 'animate-pulse' : ''} />
                  </button>

                  <span className="text-xs text-zinc-400 font-spline">
                    We use your details only to respond to this technical enquiry.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
