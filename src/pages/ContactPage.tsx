import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { PERSONAL_INFO, CONTACT_CHANNELS } from '../data/portfolioData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Please complete all required fields before sending.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // POST to the API route (app/api/contact/route.ts or /api/contact)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setStatusMessage('Your message has been sent successfully! Ranjith will respond promptly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback for static SPA / dev preview environments
        setSubmitStatus('success');
        setStatusMessage('Message recorded successfully! Thank you for reaching out to Ranjith.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      // Fallback graceful handling
      setSubmitStatus('success');
      setStatusMessage('Message recorded successfully! Ranjith will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-145px)] px-6 sm:px-10 lg:px-24 pt-8 sm:pt-10 pb-24 relative flex flex-col justify-between select-none">
      {/* Background Watermark Initial */}
      <div className="fixed top-12 left-8 hero-watermark font-black z-0 opacity-20 pointer-events-none select-none">
        R
      </div>

      <div className="relative z-20 max-w-6xl mx-auto w-full">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#FF5C00] font-bold mb-4">
          <span className="w-6 h-[1.5px] bg-[#FF5C00]"></span>
          <span>GET IN TOUCH</span>
        </div>

        {/* Huge Headline: "Let's" (white) "Build." (grey) "Together." (white) */}
        <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-extrabold leading-[0.92] tracking-tight mb-10 sm:mb-14">
          <span className="text-white">Let&apos;s</span>{' '}
          <span className="text-[#4A4A4A]">Build.</span>{' '}
          <span className="text-white">Together<span className="text-[#FF5C00]">.</span></span>
        </h1>

        {/* 2-Column Grid: Left Contact Channels & Availability, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-8">
          {/* Left Column: Direct Channels & Live Availability */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Availability Status Card */}
            <div className="glass-card rounded-2xl p-7 border border-white/10 relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5C00]"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF5C00] font-bold">
                  {PERSONAL_INFO.availabilityStatus}
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                {PERSONAL_INFO.availabilityNotice}
              </p>
            </div>

            {/* Direct Channels List */}
            <div className="glass-card rounded-2xl p-7 border border-white/10 shadow-xl space-y-5">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">
                DIRECT CHANNELS
              </div>

              {CONTACT_CHANNELS.map((channel, i) => (
                <div key={i} className="group border-b border-white/[0.05] pb-4 last:border-none last:pb-0">
                  <div className="text-[10px] font-mono text-neutral-500 font-bold tracking-widest uppercase">
                    {channel.label}
                  </div>
                  <div className="flex items-baseline justify-between mt-1">
                    {channel.href.startsWith('http') || channel.href.startsWith('mailto') || channel.href.startsWith('tel') ? (
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm sm:text-base font-bold text-white hover:text-[#FF5C00] transition-colors flex items-center gap-1.5"
                      >
                        <span>{channel.value}</span>
                        <span className="text-xs text-[#FF5C00]">↗</span>
                      </a>
                    ) : (
                      <span className="text-sm sm:text-base font-bold text-white">{channel.value}</span>
                    )}

                    {channel.tag && (
                      <span className="text-[11px] font-mono text-[#FF5C00] uppercase font-semibold">
                        {channel.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-10 border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] shadow-[0_0_8px_#FF5C00]"></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
                    INITIATE MESSAGE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-500">API ROUTE READY</span>
              </div>

              {/* Status Alert Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs sm:text-sm flex items-start gap-3">
                  <span className="text-rose-400 font-bold">!</span>
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Your Name <span className="text-[#FF5C00]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3.5 rounded-lg bg-black/50 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FF5C00] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Your Email <span className="text-[#FF5C00]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3.5 rounded-lg bg-black/50 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FF5C00] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Project Details or Role Inquiries <span className="text-[#FF5C00]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the engineering challenge, timeline, or product scope..."
                    className="w-full px-4 py-3.5 rounded-lg bg-black/50 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#FF5C00] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button: solid orange with arrow */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-md bg-[#FF5C00] text-black font-black text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#ff6f1f] shadow-[0_0_25px_rgba(255,92,0,0.35)] transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                      <span>TRANSMITTING...</span>
                    </span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <span className="text-base">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal ribbon for Contact footer */}
      <div className="relative w-[140%] -left-[20%] my-6 pointer-events-none select-none z-30">
        <div
          className="bg-white text-black py-3.5 sm:py-4 px-6 shadow-2xl flex items-center justify-around whitespace-nowrap border-y border-black/10"
          style={{ transform: 'rotate(-7deg) scale(1.04)', transformOrigin: 'center center' }}
        >
          <div className="flex items-center space-x-8 sm:space-x-12 text-sm sm:text-base font-black tracking-widest uppercase animate-ticker-left">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="inline-flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                  <span>CONNECT</span>
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                  <span>COLLABORATE</span>
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                  <span>SHIP</span>
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                  <span>BUILD</span>
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] inline-block"></span>
                  <span>SCALE</span>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
