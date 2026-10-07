'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import { Phone, MessageCircle, Send, CheckCircle, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  initialServiceName?: string;
}

export function FinalCTA({ initialServiceName }: FinalCTAProps) {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [service, setService] = useState(initialServiceName || 'Building Construction');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync service from prop if provided
  const activeService = initialServiceName || service;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        if (prefersReducedMotion) {
          gsap.set(contentRef.current.children, { opacity: 1, y: 0 });
        } else {
          gsap.fromTo(
            contentRef.current.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 sm:py-32 bg-[#121315] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Tag */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C04E26] mb-4">
            <span>Direct Mount Road Office</span>
            <span aria-hidden="true">·</span>
            <span className="text-white/60">Free Project Consultation</span>
          </div>

          {/* Huge Main Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06] text-balance mb-8">
            Planning to build or <span className="accent-serif-word text-[#E87349]">renovate</span>?
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-10 text-pretty">
            Discuss your site blueprint, structural requirements, or GCC sanction needs directly with our engineering team at Mount Road, Chennai.
          </p>

          {/* Prominent WhatsApp and Call Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm tracking-wide uppercase transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneCallable}`}
              className="w-full sm:w-auto px-8 py-4 bg-[#C04E26] hover:bg-[#A73E1B] text-white font-bold text-sm tracking-wide uppercase transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-5 h-5" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Interactive Direct Estimation / Consultation Form */}
          <div className="w-full max-w-2xl bg-[#1B1C20] border border-white/15 p-8 sm:p-10 rounded-xs text-left shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Request an On-Site Technical Audit</h3>
            <p className="text-xs text-white/60 mb-6">
              Share your project details. We respond within 24 hours with an itemized initial feasibility outline.
            </p>

            {isSubmitted ? (
              <div className="py-10 text-center bg-white/5 border border-white/10 rounded-xs">
                <CheckCircle className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                <p className="text-xs text-white/70 max-w-md mx-auto mt-2">
                  Thank you. Our site engineer will reach out at your provided contact to arrange a consultation at our Mount Road office or on site.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs text-[#C04E26] hover:underline font-semibold"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Service Selector Tabs */}
                <div>
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    Select Service Required:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SERVICES.map((s) => (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setService(s.title)}
                        className={`p-2.5 text-[11px] font-semibold text-center rounded-xs border transition-colors cursor-pointer ${
                          activeService === s.title
                            ? 'bg-[#C04E26] text-white border-[#C04E26]'
                            : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand R."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#121315] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#C04E26] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 [PLACEHOLDER]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#121315] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#C04E26] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                    Site Location in Chennai *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mount Road / ECR / Mylapore / Anna Nagar"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#121315] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#C04E26] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                    Project Requirements / Approximate Plot Size
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. G+2 residential villa, 2,400 sq.ft plot, need GCC plan approval and turnkey construction."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#121315] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#C04E26] focus:outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C04E26] hover:bg-[#A73E1B] text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <span>Submitting Technical Scope...</span>
                  ) : (
                    <>
                      <span>Submit Free Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
