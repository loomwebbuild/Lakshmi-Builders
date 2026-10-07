'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { InquiryModal } from '@/components/InquiryModal';
import { COMPANY_INFO, IMAGES } from '@/lib/constants';
import {
  ShieldCheck,
  Building,
  HardHat,
  Scale,
  Award,
  CheckCircle2,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const pillars = [
    {
      title: 'Structural Longevity First',
      desc: 'We construct for generational durability. Every foundation, column, and beam adheres strictly to Indian Standard seismic and concrete codes (IS 456 & IS 1893).',
      icon: ShieldCheck,
    },
    {
      title: '100% Itemized BOQ Transparency',
      desc: 'No vague lump-sum quotes or hidden mid-project escalations. Every single cement bag, steel kilogram, and cubic meter of masonry is logged and transparently priced.',
      icon: Scale,
    },
    {
      title: 'Full Statutory Municipal Clearances',
      desc: 'We guarantee full compliance with CMDA and GCC building bylaws, ensuring that setback requirements, road widths, and floor space indices are legally watertight.',
      icon: Building,
    },
    {
      title: 'Dedicated Site Engineering Oversight',
      desc: 'Our sites are staffed with full-time civil engineers who oversee concrete slump tests, curing logs, reinforcement binding, and multi-layer waterproofing.',
      icon: HardHat,
    },
  ];

  return (
    <SmoothScroll>
      <Navbar onOpenInquiry={() => setModalOpen(true)} />

      <main className="min-h-screen bg-[#FAF8F5]">
        <PageHeader
          kicker="Our Heritage"
          title="Building with integrity and architectural"
          accentWord="rigor."
          description={`Rooted at ${COMPANY_INFO.address}, Lakshmi Builders brings ${COMPANY_INFO.yearsInBusiness} of disciplined civil engineering and construction craft to Chennai.`}
          breadcrumbs={[{ label: 'About Us' }]}
        />

        {/* Story Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-widest block mb-2">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17181A] mb-6 leading-tight">
                Crafting dependable structures across the Chennai urban landscape.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#575A61] leading-relaxed">
                <p>
                  Headquartered in Mount Road, Chennai 600002, Lakshmi Builders was founded on a singular principle: building construction should be defined by engineering precision, honest pricing, and unconditional structural safety.
                </p>
                <p>
                  Over {COMPANY_INFO.yearsInBusiness}, we have overseen {COMPANY_INFO.completedProjectsCount}, encompassing turnkey independent luxury villas on ECR, heritage renovations in Mylapore, commercial hubs on Mount Road, and modern residential apartments across the city.
                </p>
                <p>
                  We believe client peace of mind is forged through clarity. That is why we provide itemized bills of quantities, conduct batch-wise lab testing of cement and TMT steel, and manage complex CMDA and GCC municipal plan sanctions with absolute statutory compliance.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="mt-8 pt-6 border-t border-black/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-3xl font-bold font-mono text-[#C04E26] block">
                    {COMPANY_INFO.yearsInBusiness.split(' ')[0]}
                  </span>
                  <span className="text-xs text-[#575A61]">Years in Business</span>
                </div>
                <div>
                  <span className="text-3xl font-bold font-mono text-[#C04E26] block">
                    {COMPANY_INFO.completedProjectsCount.split(' ')[0]}
                  </span>
                  <span className="text-xs text-[#575A61]">Completed Structures</span>
                </div>
                <div>
                  <span className="text-3xl font-bold font-mono text-[#C04E26] block">100%</span>
                  <span className="text-xs text-[#575A61]">CMDA/GCC Legal Sanction</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Detail Photo Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 rounded-xs overflow-hidden bg-[#1B1C20] shadow-2xl border border-black/10">
                <Image
                  src={IMAGES.introVilla}
                  alt="Lakshmi Builders Chennai Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 text-xs text-[#575A61] flex items-center justify-between">
                <span>Mount Road Office & Field Engineering</span>
                <span className="font-mono">Chennai 600002</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="py-20 bg-[#F3EFEA] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-widest block mb-2">
                Core Philosophy
              </span>
              <h2 className="text-3xl font-bold text-[#17181A]">The 4 Pillars of the Lakshmi Standard</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 border border-black/5 rounded-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 bg-[#FAF8F5] border border-black/10 flex items-center justify-center rounded-xs mb-6 text-[#C04E26]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#17181A] mb-2">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-[#575A61] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Location & Team Presence */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121315] text-white p-8 sm:p-12 rounded-xs flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#E87349] uppercase font-bold tracking-widest mb-2">
                <MapPin className="w-4 h-4" />
                <span>Mount Road Office</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Visit Us at 81/14, Thayar Sahib Street
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl">
                Conveniently located off Mount Road, Chennai 600002. Meet our principal engineers, review architectural drawings, and discuss your upcoming construction project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors"
              >
                Schedule Office Visit
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 border border-white/20 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </SmoothScroll>
  );
}
