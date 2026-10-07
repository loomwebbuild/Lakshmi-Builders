'use client';

import { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import { X, Send, CheckCircle, Phone, MessageCircle } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function InquiryModal({ isOpen, onClose, initialService }: InquiryModalProps) {
  const [selectedService, setSelectedService] = useState(initialService || 'Building Construction');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#121315] text-white border border-white/20 max-w-lg w-full rounded-xs shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1 rounded-full"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xs mx-auto mb-6">
              Our site engineer will contact you promptly at {formData.phone || COMPANY_INFO.phoneDisplay} to arrange a technical consultation.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#C04E26] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C04E26] mb-2">
              <span>Lakshmi Builders</span>
              <span aria-hidden="true">·</span>
              <span className="text-white/60">Mount Road, Chennai</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Request a Project Consultation</h3>
            <p className="text-xs text-white/70 mb-6">
              Share your requirements for building construction, renovation, interior, or plan sanctions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                  Service Needed
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedService(s.title)}
                      className={`p-2 text-xs font-semibold rounded-xs border text-left transition-colors ${
                        selectedService === s.title
                          ? 'bg-[#C04E26] text-white border-[#C04E26]'
                          : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suresh K."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1B1C20] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#C04E26] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98400 [PLACEHOLDER]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1B1C20] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#C04E26] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1">
                    Location in Chennai
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mount Road / ECR"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#1B1C20] border border-white/15 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#C04E26] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-1">
                  Brief Project Scope (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Plot size, number of floors, timeline, or renovation requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#1B1C20] border border-white/15 px-3.5 py-2 text-xs sm:text-sm text-white focus:border-[#C04E26] focus:outline-hidden resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <span>Submit Consultation Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <a
                href={`tel:${COMPANY_INFO.phoneCallable}`}
                className="hover:text-white flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C04E26]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
