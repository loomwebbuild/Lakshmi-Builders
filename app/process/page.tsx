'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { InquiryModal } from '@/components/InquiryModal';
import { PROCESS_STEPS, COMPANY_INFO } from '@/lib/constants';
import {
  CheckCircle2,
  FileCheck,
  HardHat,
  ShieldCheck,
  ClipboardList,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function ProcessPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const qualityChecks = [
    {
      title: 'Concrete Compressive Cube Testing (IS 516)',
      desc: 'Standard 150mm test cubes cast at every major concrete pour and crushed at 7-day and 28-day intervals to verify target M25/M30 characteristic strength.',
      stage: 'Civil Framing Phase',
    },
    {
      title: 'TMT Rebar Tensile & Bend Audits',
      desc: 'Batch verification of FE-550 primary steel to ensure yield strength $\\ge 550\\text{ N/mm}^2$ and ductile elongation properties.',
      stage: 'Reinforcement Phase',
    },
    {
      title: '72-Hour Hydrostatic Terrace Ponding Test',
      desc: 'Submerging finished terrace slabs and sunken bathroom areas under 50mm standing water for 72 hours to verify 100% leak-proof waterproofing.',
      stage: 'Waterproofing Phase',
    },
    {
      title: '50-Point Pre-Handover Snag Audit',
      desc: 'Detailed checklist covering tile hollow-sound tests, door-window latch clearances, MEP circuit continuity, and water pressure levels.',
      stage: 'Handover Phase',
    },
  ];

  return (
    <SmoothScroll>
      <Navbar onOpenInquiry={() => setModalOpen(true)} />

      <main className="min-h-screen bg-[#FAF8F5]">
        <PageHeader
          kicker="Our Methodology"
          title="A 4-stage delivery process engineered for"
          accentWord="certainty."
          description="How Lakshmi Builders takes your construction project from preliminary site topography to architectural blueprint sanction, structural casting, and formal handover in Chennai."
          breadcrumbs={[{ label: 'Process' }]}
        />

        {/* 4 Execution Phases Deep Dive */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white border border-black/10 rounded-xs p-8 sm:p-12 shadow-xs hover:border-[#C04E26]/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-black/10 mb-8 gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-[#C04E26] bg-[#FAF8F5] border border-black/10 px-4 py-2 rounded-xs">
                      {step.number}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-[#575A61] uppercase tracking-wider block">
                        Phase 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#17181A]">
                        {step.title}: {step.subtitle}
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-[#575A61] font-mono">
                    Chennai Municipal Standards
                  </span>
                </div>

                <p className="text-base text-[#575A61] leading-relaxed mb-8 max-w-4xl">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {step.points.map((point, i) => (
                    <div
                      key={i}
                      className="bg-[#FAF8F5] border border-black/5 p-4 rounded-xs flex items-start gap-3 text-xs text-[#17181A] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Testing Protocol */}
        <section className="py-20 bg-[#F3EFEA] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-widest block mb-2">
                Engineering Checks
              </span>
              <h2 className="text-3xl font-bold text-[#17181A]">
                Mandatory Structural Quality Checkpoints
              </h2>
              <p className="text-sm text-[#575A61] mt-2">
                We implement verifiable laboratory and on-site testing protocols at every stage of construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualityChecks.map((check, idx) => (
                <div key={idx} className="bg-white p-8 border border-black/5 rounded-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#C04E26] uppercase">
                      {check.stage}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#575A61]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#17181A] mb-2">{check.title}</h3>
                  <p className="text-xs sm:text-sm text-[#575A61] leading-relaxed">
                    {check.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestone Billing Transparency */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121315] text-white p-8 sm:p-12 rounded-xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono text-[#E87349] font-bold uppercase tracking-widest block mb-2">
                Commercial Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Milestone-Based Stage Invoicing
              </h2>
              <p className="text-xs sm:text-sm text-white/70">
                You never pay in advance for unfinished work. Payments are invoiced only upon completion and structural sign-off of each respective milestone.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
                <span className="text-white/50 block">Milestone 1</span>
                <span className="text-sm font-bold text-white block my-1">Foundation Cast</span>
                <span className="text-[#E87349]">Sign-off Verified</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
                <span className="text-white/50 block">Milestone 2</span>
                <span className="text-sm font-bold text-white block my-1">RCC Slabs Cast</span>
                <span className="text-[#E87349]">Cube Test Cleared</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
                <span className="text-white/50 block">Milestone 3</span>
                <span className="text-sm font-bold text-white block my-1">Brick & Plaster</span>
                <span className="text-[#E87349]">MEP Rough-in Complete</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xs">
                <span className="text-white/50 block">Milestone 4</span>
                <span className="text-sm font-bold text-white block my-1">Final Handover</span>
                <span className="text-[#E87349]">Snag List Cleared</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-white/60">
                Ready to review a sample Bill of Quantities (BOQ) for your Chennai plot?
              </span>
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Sample BOQ Outline
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
