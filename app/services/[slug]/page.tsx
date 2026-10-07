'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { InquiryModal } from '@/components/InquiryModal';
import { SERVICES, PROJECTS, COMPANY_INFO } from '@/lib/constants';
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight,
  Phone,
  FileText,
  Layers,
  Award,
} from 'lucide-react';

interface ServiceDetailData {
  id: string;
  number: string;
  title: string;
  kicker: string;
  tagline: string;
  description: string;
  image: string;
  methodology: { title: string; desc: string }[];
  materialSpecs: { category: string; spec: string; certifiedBy: string }[];
  timeline: string;
  faq: { q: string; a: string }[];
}

const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  'building-construction': {
    id: 'building-construction',
    number: '01',
    title: 'Building Construction',
    kicker: 'Turnkey Civil Engineering',
    tagline: 'End-to-end residential and commercial construction in Chennai.',
    description:
      'From deep foundation excavation and soil bearing analysis to multi-storey RCC frame casting, brick masonry, and turnkey structural delivery. Every structure engineered by Lakshmi Builders complies with Indian Standard codes IS 456 (Concrete) and IS 1893 (Seismic).',
    image: '/images/hero_chennai_architecture_1791373809382.jpg',
    methodology: [
      {
        title: 'Geotechnical Soil & Foundation Analysis',
        desc: 'Core soil borehole testing to calculate exact safe bearing capacity (SBC) and determine shallow raft, isolated, or pile foundation design.',
      },
      {
        title: 'RCC Column & Beam Framing (IS 456)',
        desc: 'Precision shuttering with machine-mixed M25/M30 grade concrete and corrosion-resistant FE-550 TMT rebar layouts.',
      },
      {
        title: 'High-Density Masonry & Thermal Plastering',
        desc: 'Kiln-burnt red clay bricks or high-density wire-cut blocks bonded with 1:4 cement mortar and double-coat waterproof plastering.',
      },
      {
        title: 'Concealed MEP Rough-ins & Turnkey Finishing',
        desc: 'Pressure-tested CPVC plumbing, fire-retardant electrical conduits, vitrified tile laying, and multi-coat weatherproof painting.',
      },
    ],
    materialSpecs: [
      { category: 'Structural Steel', spec: 'FE-550D Primary TMT Rebar', certifiedBy: 'BIS Lab Tested' },
      { category: 'Cement', spec: '53-Grade Certified OPC / PPC', certifiedBy: 'Batch Compressive Tested' },
      { category: 'Aggregates', spec: '20mm & 12mm Machine Crushed Blue Granite', certifiedBy: 'Sieve & Silt Analysis' },
      { category: 'Plumbing', spec: 'SDR 11 CPVC & Lead-Free UPVC', certifiedBy: 'Hydrostatic Pressure Tested' },
    ],
    timeline: '[PLACEHOLDER: 8 - 14 Months depending on built-up area]',
    faq: [
      {
        q: 'Do you handle the complete building contract from excavation to keys?',
        a: 'Yes. We provide complete turnkey construction covering architectural blueprints, structural analysis, materials, labor, site engineering, and municipal completion certificates.',
      },
      {
        q: 'How do you ensure concrete curing in Chennai’s tropical heat?',
        a: 'We use submerged hessian cloth wrapping and continuous pressurized pond curing for a minimum of 14 to 21 days on all RCC slabs and vertical columns.',
      },
    ],
  },
  'renovation-work': {
    id: 'renovation-work',
    number: '02',
    title: 'Renovation Work',
    kicker: 'Structural Retrofitting & Remodeling',
    tagline: 'Preserving structural stability while transforming legacy properties.',
    description:
      'Specialized in complex civil renovations, vertical floor additions, column beam jacketing, multi-layer waterproofing, and spatial modernizations for residential and commercial buildings across Chennai.',
    image: '/images/intro_construction_detail_1791373836563.jpg',
    methodology: [
      {
        title: 'Structural Health & Rebound Hammer Audit',
        desc: 'Non-destructive testing (NDT) to evaluate concrete compressive strength and carbonation depth of existing structural members.',
      },
      {
        title: 'Micro-Concrete Jacketing & Strengthening',
        desc: 'Column retrofitting and beam strengthening using polymer-modified mortar and shear connector dowel anchoring.',
      },
      {
        title: 'Terrace & Sunken Area Waterproofing',
        desc: 'Elastomeric polyurethane multi-coat membranes, screed protective layering, and angle fillet detailing.',
      },
      {
        title: 'Architectural Modernization & MEP Overhaul',
        desc: 'Demolition of non-load bearing partitions, electrical rerouting, and contemporary facade elevation revitalization.',
      },
    ],
    materialSpecs: [
      { category: 'Structural Repair', spec: 'Micro-Concrete & Polymer Bonding Agent', certifiedBy: 'High-Strength Polymer Tested' },
      { category: 'Waterproofing', spec: 'Elastomeric PU & Acrylic Crystalline System', certifiedBy: '5-Bar Water Head Tested' },
      { category: 'Masonry Infill', spec: 'Lightweight Autoclaved Aerated Blocks', certifiedBy: 'Dead-Load Minimized' },
      { category: 'Exterior Finish', spec: 'Siliconized Weather-Resistant Exterior Emulsion', certifiedBy: 'UV & Rain Resistant' },
    ],
    timeline: '[PLACEHOLDER: 2 - 5 Months based on structural scope]',
    faq: [
      {
        q: 'Can an extra floor be added to an older Chennai house?',
        a: 'We first conduct a structural load test on columns and footings. If required, we reinforce existing columns through jacketing before submitting GCC plan sanction drawings for the additional floor.',
      },
      {
        q: 'How do you manage dust and vibration during live renovations?',
        a: 'We isolate work zones with heavy-duty acoustic dust screens and schedule noisy percussion work during authorized municipal working hours.',
      },
    ],
  },
  'interior-design': {
    id: 'interior-design',
    number: '03',
    title: 'Interior Design',
    kicker: 'Bespoke Architectural Interiors',
    tagline: 'Custom woodwork, space planning, and contemporary interior environments.',
    description:
      'Crafted with precision carpentry, treated marine-grade ply, architectural lighting, and natural stone textures. We deliver bespoke turnkey interiors tailored for Chennai’s coastal climate.',
    image: '/images/service_renovation_interior_1791373866628.jpg',
    methodology: [
      {
        title: '3D Spatial Planning & Ergonomic Layouts',
        desc: 'Comprehensive walkthrough renders, furniture layout optimization, and material swatch moodboards.',
      },
      {
        title: 'Treated Marine Plywood & Teak Joinery',
        desc: 'IS 710 calibrated boiling waterproof (BWP) ply with 1mm anti-scratch laminates, acrylics, and natural veneer finishes.',
      },
      {
        title: 'Concealed Ambient & Task Lighting',
        desc: 'Integrated indirect LED cove profiles, CRI > 90 warm architectural spot fixtures, and smart dimming zones.',
      },
      {
        title: 'Modular Kitchen & Wardrobe Systems',
        desc: 'Soft-close German hardware mechanisms, quartz countertops, and moisture-resistant internal carcases.',
      },
    ],
    materialSpecs: [
      { category: 'Cabinetry Core', spec: 'IS 710 Calibrated BWP Marine Ply', certifiedBy: '72hr Boiling Water Tested' },
      { category: 'Hardware', spec: 'German Engineered Soft-Close Hinges', certifiedBy: '100k Cycle Tested' },
      { category: 'Countertops', spec: 'Non-Porous Engineered Quartz / Natural Granite', certifiedBy: 'Stain & Scratch Resistant' },
      { category: 'Varnish & Polish', spec: 'Low-VOC Polyurethane Teak Finish', certifiedBy: 'Eco-Certified' },
    ],
    timeline: '[PLACEHOLDER: 45 - 90 Days]',
    faq: [
      {
        q: 'How do you safeguard modular woodwork against Chennai humidity and termites?',
        a: 'We exclusively use anti-termite treated IS 710 marine plywood and seal all exposed raw edges with 2mm PVC edge-banding under high temperature.',
      },
      {
        q: 'Do you provide 3D visualisations before starting carpentry?',
        a: 'Yes. Every client receives high-fidelity 3D perspective renders and electrical/false-ceiling working drawings before fabrication.',
      },
    ],
  },
  'building-plan-approval': {
    id: 'building-plan-approval',
    number: '04',
    title: 'Building Plan Approval',
    kicker: 'Statutory GCC & CMDA Sanctions',
    tagline: 'Navigating Chennai’s municipal regulations and building clearances.',
    description:
      'Complete liaison and architectural drafting for Greater Chennai Corporation (GCC) and Chennai Metropolitan Development Authority (CMDA) building permits, regularization, CRZ clearances, and completion certificates.',
    image: '/images/project_commercial_elevation_1791373950335.jpg',
    methodology: [
      {
        title: 'Land Title & Master Plan Zoning Verification',
        desc: 'Checking Combined Development Regulations (TNCDBR), road width compliance, FSI limits, and required front/rear setbacks.',
      },
      {
        title: 'Architectural Sanction Drawing Drafting',
        desc: 'Preparing official blueprint sheets with exact parking calculations, rainwater harvesting layouts, and structural key plans.',
      },
      {
        title: 'Structural Stability Certification (Form 1)',
        desc: 'Engineered verification signed by Registered Structural Engineers (RSE) and Registered Architects (RA).',
      },
      {
        title: 'GCC / CMDA Liaison & Final Permit Issuance',
        desc: 'Submission via online portal, on-site municipal inspection escort, fee verification, and final sanction order delivery.',
      },
    ],
    materialSpecs: [
      { category: 'Sanction Type', spec: 'GCC / CMDA Residential & Commercial Permits', certifiedBy: 'Chennai Municipal Authority' },
      { category: 'Compliance Code', spec: 'Tamil Nadu Combined Development Regulations', certifiedBy: 'TNCDBR Compliant' },
      { category: 'Structural Form', spec: 'Registered Engineer Stability Certificate', certifiedBy: 'RSE Grade-I Registered' },
      { category: 'Environmental', spec: 'Rainwater Harvesting & Solar Readiness Plan', certifiedBy: 'Statutory Clearances' },
    ],
    timeline: '[PLACEHOLDER: 3 - 6 Weeks for standard sanctions]',
    faq: [
      {
        q: 'What documents are required to apply for building sanction in Chennai?',
        a: 'Sale deed / patta, encumbrance certificate (EC), approved layout copy, existing site photos, and proposed architectural drawings.',
      },
      {
        q: 'Do you assist with regularisation or deviation corrections?',
        a: 'Yes. We evaluate existing deviations against TNCDBR compounding norms and prepare regularization documentation.',
      },
    ],
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = SERVICE_DETAILS[slug];
  const [modalOpen, setModalOpen] = useState(false);

  if (!service) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter(
    (p) =>
      p.categoryLabel.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]) ||
      p.category === 'Construction'
  ).slice(0, 3);

  return (
    <SmoothScroll>
      <Navbar onOpenInquiry={() => setModalOpen(true)} />

      <main className="min-h-screen bg-[#FAF8F5]">
        <PageHeader
          kicker={`Service ${service.number}`}
          title={service.title}
          accentWord="Scope."
          description={service.description}
          breadcrumbs={[
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]}
        />

        {/* Hero Feature Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-6 relative aspect-4/3 rounded-xs overflow-hidden bg-[#1B1C20] shadow-xl border border-black/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-mono text-[#E87349] uppercase font-bold tracking-widest block mb-1">
                  Lakshmi Builders · Mount Road
                </span>
                <span className="text-xl font-bold">{service.tagline}</span>
              </div>
            </div>

            {/* Overview & Core Value */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-widest block mb-2">
                  Technical Standard
                </span>
                <h2 className="text-3xl font-bold text-[#17181A] mb-4">
                  Engineered execution with certified compliance.
                </h2>
                <p className="text-sm sm:text-base text-[#575A61] leading-relaxed">
                  Every project in this discipline is governed by strict stage inspection logs, material batch validation, and transparent timeline management.
                </p>
              </div>

              {/* Quick Spec Bar */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/10">
                <div className="p-4 bg-white border border-black/5 rounded-xs">
                  <span className="text-xs text-[#575A61] block">Handover Timeline</span>
                  <span className="text-sm font-bold text-[#17181A] font-mono">{service.timeline}</span>
                </div>
                <div className="p-4 bg-white border border-black/5 rounded-xs">
                  <span className="text-xs text-[#575A61] block">Engineering Oversight</span>
                  <span className="text-sm font-bold text-[#17181A]">On-Site Civil Engineer</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request Technical Consultation
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneCallable}`}
                  className="w-full sm:w-auto px-6 py-3.5 border border-black/15 text-[#17181A] hover:bg-black/5 text-xs font-semibold uppercase tracking-wider text-center transition-colors"
                >
                  Call {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Technical Methodology */}
        <section className="py-20 bg-[#F3EFEA] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-widest block mb-2">
                Step-by-Step Delivery
              </span>
              <h2 className="text-3xl font-bold text-[#17181A]">Our Technical Methodology</h2>
              <p className="text-sm text-[#575A61] mt-2">
                Standard operating procedures executed by our in-house civil engineers and project supervisors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.methodology.map((step, idx) => (
                <div key={idx} className="bg-white p-8 border border-black/5 rounded-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#121315] text-white flex items-center justify-center text-xs font-mono font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#17181A]">{step.title}</h3>
                  </div>
                  <p className="text-sm text-[#575A61] leading-relaxed pl-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Material & Quality Standards */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-widest block mb-2">
              Quality Assurance
            </span>
            <h2 className="text-3xl font-bold text-[#17181A]">Material & Compliance Standards</h2>
            <p className="text-sm text-[#575A61] mt-2">
              We never compromise on structural grade components. Every material batch is verified on delivery.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-xs overflow-hidden shadow-xs">
            <div className="divide-y divide-black/5">
              {service.materialSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-5 h-5 text-[#C04E26] shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#17181A]">{spec.category}</h4>
                      <p className="text-xs text-[#575A61]">{spec.spec}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-[#FAF8F5] border border-black/10 px-3 py-1 text-[#17181A] rounded-xs w-fit">
                    {spec.certifiedBy}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Relevant Case Studies */}
        {relatedProjects.length > 0 && (
          <section className="py-20 bg-[#121315] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-[#E87349] font-bold uppercase tracking-widest block mb-2">
                    Case Studies
                  </span>
                  <h2 className="text-3xl font-bold text-white">
                    Related {service.title} Projects
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="mt-4 sm:mt-0 text-xs text-white/70 hover:text-white flex items-center gap-1 font-semibold"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((p) => (
                  <div
                    key={p.id}
                    className="bg-[#1B1C20] border border-white/10 rounded-xs overflow-hidden group"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-[#E87349] font-mono mb-1">{p.location}</div>
                      <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                      <p className="text-xs text-white/70 line-clamp-2">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs for Service */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#17181A] mb-8 text-center">
            Questions regarding {service.title}
          </h2>
          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <div key={idx} className="bg-white border border-black/10 p-6 rounded-xs">
                <h3 className="text-base font-bold text-[#17181A] mb-2">{item.q}</h3>
                <p className="text-sm text-[#575A61] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={service.title}
      />
    </SmoothScroll>
  );
}
