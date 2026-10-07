'use client';

import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import { MapPin, Phone, Mail, Instagram, Clock, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0E10] text-[#FAF8F5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Official Address */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-xl uppercase tracking-tight text-white">
                  Lakshmi Builders
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C04E26]" />
              </div>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm mb-6">
                Specialized in Building Construction, Renovation Work, Interior Design, and Building Plan Approval in Mount Road, Chennai.
              </p>

              <div className="space-y-3 text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C04E26] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Mount Road Office</span>
                    <span className="text-white/70">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C04E26] shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phoneCallable}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C04E26] shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.emailDisplay}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.emailDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#C04E26] shrink-0" />
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#E87349] transition-colors flex items-center gap-1"
                  >
                    <span>{COMPANY_INFO.instagramHandle}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50">
              <span>{COMPANY_INFO.yearsInBusiness} · Mount Road, Chennai</span>
            </div>
          </div>

          {/* Col 2: Services & Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#C04E26] mb-6">
              Our Core Services
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#C04E26] transition-colors" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#C04E26] mt-8 mb-4">
              Office Hours
            </h3>
            <div className="flex items-start gap-2 text-xs text-white/70">
              <Clock className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
              <div>
                <span>Mon – Sat: 09:00 AM – 07:30 PM</span>
                <span className="block text-white/40">Sunday: By Technical Appointment</span>
              </div>
            </div>
          </div>

          {/* Col 3: Embedded Google Map for Mount Road Location */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#C04E26]">
                Location Map
              </h3>
              <span className="text-[11px] text-white/50">Mount Road, Chennai 600002</span>
            </div>

            <div className="relative w-full h-56 sm:h-64 rounded-xs overflow-hidden border border-white/15 bg-[#1B1C20] shadow-inner">
              <iframe
                title="Lakshmi Builders Office Location in Mount Road Chennai"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) invert(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-white/60">
              <span>81/14, Thayar Sahib St, Mount Road</span>
              <a
                href="https://maps.google.com/?q=81/14,+Thayar+Sahib+Street,+Mount+Road,+Chennai+600002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E87349] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Lakshmi Builders. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Chennai Registered Builder</span>
            <span>·</span>
            <span>GCC / CMDA Licensed Consultant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
