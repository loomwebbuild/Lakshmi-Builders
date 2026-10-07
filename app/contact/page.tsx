'use client';

import { useState } from 'react';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: 'Building Construction',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <SmoothScroll>
      <Navbar />

      <main className="min-h-screen bg-[#FAF8F5]">
        <PageHeader
          kicker="Get In Touch"
          title="Connect with our engineering team at"
          accentWord="Mount Road."
          description={`Visit our office at ${COMPANY_INFO.address}, call directly, or submit your project details for an on-site technical inspection.`}
          breadcrumbs={[{ label: 'Contact' }]}
        />

        {/* Contact Content Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Office Details & Direct Actions */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-black/10 p-8 rounded-xs shadow-xs">
                <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-widest block mb-2">
                  Head Office
                </span>
                <h2 className="text-2xl font-bold text-[#17181A] mb-6">
                  Mount Road, Chennai
                </h2>

                <div className="space-y-5 text-sm text-[#575A61]">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#C04E26] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#17181A] block">Physical Address</span>
                      <p className="leading-relaxed mt-0.5">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#C04E26] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#17181A] block">Direct Telephone</span>
                      <a
                        href={`tel:${COMPANY_INFO.phoneCallable}`}
                        className="text-[#17181A] hover:text-[#C04E26] font-mono text-sm transition-colors"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#C04E26] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#17181A] block">Email Correspondence</span>
                      <a
                        href={`mailto:${COMPANY_INFO.emailDisplay}`}
                        className="text-[#17181A] hover:text-[#C04E26] transition-colors"
                      >
                        {COMPANY_INFO.emailDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Instagram className="w-5 h-5 text-[#C04E26] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#17181A] block">Official Instagram</span>
                      <a
                        href={COMPANY_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C04E26] hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        <span>{COMPANY_INFO.instagramHandle}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-4 border-t border-black/5">
                    <Clock className="w-5 h-5 text-[#575A61] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#17181A] block">Working Hours</span>
                      <p className="text-xs text-[#575A61] mt-0.5">
                        Monday – Saturday: 09:00 AM – 07:30 PM<br />
                        Sunday: Site Inspections by Technical Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Card */}
              <div className="bg-[#121315] text-white p-6 rounded-xs flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm">Need a Rapid WhatsApp Response?</h3>
                  <p className="text-xs text-white/60 mt-0.5">
                    Send plot location pin or blueprint PDF.
                  </p>
                </div>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider rounded-xs flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Request Form */}
            <div className="lg:col-span-7 bg-white border border-black/10 p-8 sm:p-10 rounded-xs shadow-xs">
              <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-widest block mb-2">
                Consultation Request
              </span>
              <h2 className="text-2xl font-bold text-[#17181A] mb-2">
                Share Your Project Specifications
              </h2>
              <p className="text-xs sm:text-sm text-[#575A61] mb-8">
                Our principal civil engineer will review your plot parameters or renovation requirements and provide a preliminary engineering assessment within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center bg-[#FAF8F5] border border-black/10 rounded-xs">
                  <CheckCircle className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-[#17181A]">Technical Inquiry Logged</h3>
                  <p className="text-xs sm:text-sm text-[#575A61] max-w-sm mx-auto mt-2 leading-relaxed">
                    Thank you, {formData.name}. Our Mount Road office will contact you at {formData.phone} to coordinate your site inspection or drawing review.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-[#C04E26] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-2">
                      Select Construction Discipline *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {SERVICES.map((s) => (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => setFormData({ ...formData, service: s.title })}
                          className={`p-2 text-[11px] font-semibold text-center rounded-xs border transition-colors cursor-pointer ${
                            formData.service === s.title
                              ? 'bg-[#121315] text-white border-[#121315]'
                              : 'bg-[#FAF8F5] text-[#575A61] border-black/10 hover:bg-black/5'
                          }`}
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Suresh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-2.5 text-xs sm:text-sm text-[#17181A] focus:border-[#C04E26] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 [PLACEHOLDER]"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-2.5 text-xs sm:text-sm text-[#17181A] focus:border-[#C04E26] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-2.5 text-xs sm:text-sm text-[#17181A] focus:border-[#C04E26] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-1.5">
                        Site Location in Chennai *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mount Road / ECR / Mylapore"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-2.5 text-xs sm:text-sm text-[#17181A] focus:border-[#C04E26] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-1.5">
                      Project Notes / Approximate Built-up Area
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Planning a G+2 residential building on a 2,400 sq.ft plot, need GCC plan approval and turnkey construction..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-black/10 px-4 py-2.5 text-xs sm:text-sm text-[#17181A] focus:border-[#C04E26] focus:outline-hidden resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C04E26] hover:bg-[#A73E1B] text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Submitting Scope Details...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Embedded Location Map Section */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-black/10 rounded-xs p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="text-xl font-bold text-[#17181A]">Office Location & Transit</h3>
                <p className="text-xs text-[#575A61] mt-0.5">
                  81/14, Thayar Sahib Street, Mount Road, Chennai 600002
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=81/14,+Thayar+Sahib+Street,+Mount+Road,+Chennai+600002"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#121315] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 hover:bg-[#1E2024] transition-colors self-start"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative w-full h-80 sm:h-96 rounded-xs overflow-hidden border border-black/10">
              <iframe
                title="Lakshmi Builders Chennai Mount Road Office Map"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}
