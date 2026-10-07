'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { InquiryModal } from '@/components/InquiryModal';
import { SERVICES, COMPANY_INFO } from '@/lib/constants';
import {
  ArrowRight,
  CheckCircle2,
  Calculator,
  HelpCircle,
  Phone,
  FileCheck,
  ShieldAlert,
} from 'lucide-react';

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Quick Construction Estimator state
  const [plotArea, setPlotArea] = useState<number>(1800);
  const [floors, setFloors] = useState<number>(2);
  const [qualityTier, setQualityTier] = useState<'Standard' | 'Premium' | 'Luxury'>('Premium');

  const ratePerSqFt = {
    Standard: 2200,
    Premium: 2650,
    Luxury: 3300,
  };

  const totalBuiltUpArea = plotArea * floors * 0.85; // approx coverage
  const estimatedCost = totalBuiltUpArea * ratePerSqFt[qualityTier];

  const handleInquire = (serviceName?: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const faqs = [
    {
      q: 'How long does CMDA or GCC building plan approval take in Chennai?',
      a: 'Standard residential plan sanctions typically require 3 to 6 weeks depending on plot location, road width, and whether regularisation is required. Our liaison team manages drawing compliance, site inspections, and municipal documentation end-to-end.',
    },
    {
      q: 'What quality grade steel and cement are used on Lakshmi Builders sites?',
      a: 'We strictly mandate tested 53-grade certified Portland Pozzolana / OPC cement and primary brand FE-550 TMT steel bars. Every batch undergoes mandatory lab tensile and concrete compressive cube test audits [PLACEHOLDER].',
    },
    {
      q: 'Do you offer structural health checks prior to undertaking renovation work?',
      a: 'Yes. Before any floor additions or structural modifications, our licensed structural engineers perform rebound hammer tests, column load-bearing analyses, and foundation checks to guarantee complete building stability.',
    },
    {
      q: 'Are project costs fixed once the contract is signed?',
      a: 'Yes. We provide a 100% itemized Bill of Quantities (BOQ). Material specifications and stage milestones are locked to prevent arbitrary mid-project price escalations [PLACEHOLDER].',
    },
  ];

  return (
    <SmoothScroll>
      <Navbar onOpenInquiry={() => handleInquire()} />

      <main className="min-h-screen bg-[#FAF8F5]">
        <PageHeader
          kicker="Our Disciplines"
          title="Engineered construction services crafted with"
          accentWord="precision."
          description="From turnkey civil construction to structural renovations, bespoke interiors, and CMDA/GCC plan approvals in Mount Road, Chennai."
          breadcrumbs={[{ label: 'Services' }]}
        />

        {/* 4 Core Services Detailed Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-black/10 rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-auto min-h-[280px] bg-[#1B1C20]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#121315]/85 text-white text-xs font-mono font-bold px-3 py-1 border border-white/10">
                      SERVICE {service.number}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#C04E26] font-bold mb-2">
                        <span>0{idx + 1} / 04</span>
                        <span>·</span>
                        <span>Chennai Standard</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[#17181A] mb-3">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-[#575A61] leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#17181A] mb-3">
                          Engineering Deliverables:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-[#575A61]">
                              <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center gap-4">
                      <Link
                        href={`/services/${service.id}`}
                        className="w-full sm:w-auto px-5 py-2.5 bg-[#121315] hover:bg-[#1E2024] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <span>View Technical Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => handleInquire(service.title)}
                        className="w-full sm:w-auto px-5 py-2.5 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Request Service Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Construction Estimator Tool */}
        <section className="py-20 bg-[#F3EFEA] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C04E26] mb-3">
                <Calculator className="w-4 h-4" />
                <span>Preliminary Budget Scoping</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17181A]">
                Chennai Construction Cost <span className="accent-serif-word">Estimator</span>
              </h2>
              <p className="text-sm text-[#575A61] mt-2">
                Calculate approximate built-up area and construction budget based on prevailing Mount Road / Chennai material rates.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white border border-black/10 p-8 sm:p-10 rounded-xs shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Plot Area */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-2">
                    Plot Area: {plotArea} sq.ft
                  </label>
                  <input
                    type="range"
                    min="600"
                    max="6000"
                    step="100"
                    value={plotArea}
                    onChange={(e) => setPlotArea(Number(e.target.value))}
                    className="w-full accent-[#C04E26] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#575A61] mt-1 font-mono">
                    <span>600 sq.ft</span>
                    <span>6,000 sq.ft</span>
                  </div>
                </div>

                {/* Number of Floors */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-2">
                    Structure Floors: {floors === 1 ? 'Ground Only' : `G+${floors - 1}`}
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[1, 2, 3, 4].map((f) => (
                      <button
                        key={f}
                        onClick={() => setFloors(f)}
                        className={`py-2 text-xs font-bold rounded-xs border transition-colors cursor-pointer ${
                          floors === f
                            ? 'bg-[#121315] text-white border-[#121315]'
                            : 'bg-white text-[#575A61] border-black/10 hover:bg-black/5'
                        }`}
                      >
                        {f === 1 ? 'G' : `G+${f - 1}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quality Tier */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#17181A] mb-2">
                    Finish Specification
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['Standard', 'Premium', 'Luxury'] as const).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => setQualityTier(tier)}
                        className={`py-2 text-[11px] font-bold rounded-xs border transition-colors cursor-pointer ${
                          qualityTier === tier
                            ? 'bg-[#C04E26] text-white border-[#C04E26]'
                            : 'bg-white text-[#575A61] border-black/10 hover:bg-black/5'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Result Box */}
              <div className="bg-[#121315] text-white p-6 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs text-white/60 font-mono mb-1">
                    Approx Built-Up Area: ~{Math.round(totalBuiltUpArea).toLocaleString()} sq.ft (at ₹{ratePerSqFt[qualityTier]}/sq.ft)
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#E87349]">
                    ₹{(estimatedCost / 100000).toFixed(2)} Lakhs{' '}
                    <span className="text-xs text-white/50 font-normal">[PLACEHOLDER ESTIMATE]</span>
                  </div>
                  <p className="text-[11px] text-white/60 mt-1">
                    Includes foundation, FE-550 TMT framing, brick masonry, and {qualityTier.toLowerCase()} interior finishes.
                  </p>
                </div>

                <button
                  onClick={() => handleInquire(`Detailed BOQ Estimation for ${plotArea} sq.ft`)}
                  className="px-6 py-3.5 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer"
                >
                  Get Itemized BOQ
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ Section */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C04E26] mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>Technical Clarity</span>
            </div>
            <h2 className="text-3xl font-bold text-[#17181A]">Frequently Asked Technical Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-black/10 p-6 rounded-xs">
                <h3 className="text-base font-bold text-[#17181A] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#575A61] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Direct CTA */}
        <section className="py-16 bg-[#121315] text-white text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Need on-site technical inspection in Chennai?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mb-6">
              Our registered engineers evaluate soil strata, existing structural columns, and municipal setbacks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleInquire()}
                className="px-6 py-3 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Schedule Site Audit
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneCallable}`}
                className="px-6 py-3 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Call {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </SmoothScroll>
  );
}
