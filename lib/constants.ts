export const COMPANY_INFO = {
  name: 'Lakshmi Builders',
  tagline: 'Crafting spaces that endure.',
  address: '81/14, Thayar Sahib Street, Mount Road, Chennai 600002',
  city: 'Chennai',
  postalCode: '600002',
  state: 'Tamil Nadu',
  country: 'India',
  instagramHandle: '@lakshmibuilders_chennai',
  instagramUrl: 'https://www.instagram.com/lakshmibuilders_chennai',
  phoneDisplay: '+91 98400 [PLACEHOLDER]',
  phoneCallable: '+919840000000',
  emailDisplay: 'contact@[PLACEHOLDER]lakshmibuilders.com',
  whatsappUrl: 'https://wa.me/919840000000?text=Hello%20Lakshmi%20Builders%2C%20I%20am%20interested%20in%20discussing%20a%20construction%20project%20in%20Chennai.',
  yearsInBusiness: '[PLACEHOLDER: 20+] Years in Business',
  completedProjectsCount: '[PLACEHOLDER: 180+] Completed Projects',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.582697843072!2d80.26425037599026!3d13.062228312903126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526618e77a2843%3A0x9d5e38d7211516e8!2sMount%20Rd%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin',
};

export const IMAGES = {
  hero: '/images/hero_chennai_architecture_1791373809382.jpg',
  introDetail: '/images/intro_construction_detail_1791373836563.jpg',
  introVilla: '/images/intro_modern_villa_1791373849348.jpg',
  serviceInterior: '/images/service_renovation_interior_1791373866628.jpg',
  projectComplex: '/images/project_residential_complex_1791373884885.jpg',
  projectInterior: '/images/project_minimalist_interior_1791373940055.jpg',
  projectCommercial: '/images/project_commercial_elevation_1791373950335.jpg',
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'building-construction',
    number: '01',
    title: 'Building Construction',
    shortDesc: 'Turnkey residential and commercial structural construction with strict engineering standards.',
    fullDesc: 'End-to-end civil construction ranging from bespoke villas to multi-dwelling residential apartments and commercial structures in Chennai. We handle structural analysis, soil foundation tests, premium RCC framing, brick masonry, and turnkey handover.',
    image: IMAGES.projectComplex,
    deliverables: [
      'Structural engineering & foundation design',
      'High-grade FE-550 TMT & 53-grade certified cement',
      'Dedicated site engineer supervision',
      'Turnkey handover with structural warranty',
    ],
  },
  {
    id: 'renovation-work',
    number: '02',
    title: 'Renovation Work',
    shortDesc: 'Structural strengthening, floor additions, waterproofing, and complete spatial revamps.',
    fullDesc: 'Transform existing residential and commercial properties into modern, structurally sound spaces. Our renovation services cover vertical expansions, load-bearing column retrofitting, modern facade remodeling, advanced waterproofing, and MEP overhauls.',
    image: IMAGES.introDetail,
    deliverables: [
      'Structural health audit & load analysis',
      'Floor additions & space reconfiguration',
      'Advanced multi-layer terrace waterproofing',
      'Modern facade & exterior elevation upgrades',
    ],
  },
  {
    id: 'interior-design',
    number: '03',
    title: 'Interior Design',
    shortDesc: 'Custom architectural woodwork, space optimization, and bespoke contemporary living spaces.',
    fullDesc: 'Tailored interior architecture crafted with precision joinery, rich natural materials, and calculated ambient lighting. From bespoke teak millwork to turnkey modular kitchens, false ceilings, and wardrobe engineering suited for Chennai homes.',
    image: IMAGES.serviceInterior,
    deliverables: [
      '3D space planning & material curation',
      'Bespoke teak and treated marine ply joinery',
      'Acoustic, electrical & architectural lighting design',
      'Complete turnkey fit-outs & furniture integration',
    ],
  },
  {
    id: 'building-plan-approval',
    number: '04',
    title: 'Building Plan Approval',
    shortDesc: 'End-to-end CMDA and GCC building plan sanctions, documentation, and regulatory clearance.',
    fullDesc: 'Navigating Chennai’s statutory municipal norms with complete transparency. We manage building permit applications, CMDA / GCC layout sanction drawings, structural stability certificates, coastal regulatory zone (CRZ) clearances, and regularisation liaison.',
    image: IMAGES.projectCommercial,
    deliverables: [
      'CMDA & Greater Chennai Corporation (GCC) approvals',
      'Architectural blueprint & sanction drawing drafting',
      'Structural stability certification by registered engineers',
      'Complete municipal liaison & compliance follow-up',
    ],
  },
];

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Scale' | 'Clock' | 'ShieldCheck' | 'FileCheck';
  stat: string;
}

export const WHY_CHOOSE_US: WhyUsItem[] = [
  {
    id: 'transparent-pricing',
    title: 'Transparent Pricing',
    description: 'Detailed bill of quantities (BOQ) with itemized specifications. Zero hidden escalations or mid-project cost surprises [PLACEHOLDER].',
    iconName: 'Scale',
    stat: '100% Itemized BOQ',
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery',
    description: 'Strict milestone tracking with dedicated on-site engineering oversight and guaranteed handover schedules [PLACEHOLDER].',
    iconName: 'Clock',
    stat: '[PLACEHOLDER: 98%] On-Time Rate',
  },
  {
    id: 'quality-materials',
    title: 'Quality Materials',
    description: 'Lab-tested 53-grade cement, corrosion-resistant FE-550 TMT steel, and branded fixtures verified per batch [PLACEHOLDER].',
    iconName: 'ShieldCheck',
    stat: 'Lab Tested Batches',
  },
  {
    id: 'approvals-handled',
    title: 'Approvals Handled',
    description: 'Hassle-free statutory sanction handling with GCC & CMDA authorities, ensuring 100% legal compliance [PLACEHOLDER].',
    iconName: 'FileCheck',
    stat: 'End-to-End Liaison',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consult',
    subtitle: 'Site Evaluation & Requirement Mapping',
    description: 'We meet on site or at our Mount Road office to assess land topography, soil conditions, client vision, and initial budget parameters.',
    points: ['Site boundary & soil condition audit', 'Budget scoping & lifestyle needs analysis', 'Preliminary feasibility report'],
  },
  {
    number: '02',
    title: 'Plan and approval',
    subtitle: 'Architectural Design & GCC/CMDA Sanction',
    description: 'Drafting custom floor plans, 3D architectural elevations, structural engineering drawings, and obtaining statutory GCC/CMDA clearances.',
    points: ['Detailed 2D/3D architectural blueprinting', 'Structural engineering load calculations', 'Municipal permit application & sanction'],
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Precision Construction & Milestone Audits',
    description: 'Excavation, foundation casting, column raising, brick masonry, and electrical-plumbing rough-ins with rigorous quality checkpoints.',
    points: ['Material testing at every concrete pour', 'Weekly photographic progress updates', 'Dedicated on-site project supervisor'],
  },
  {
    number: '04',
    title: 'Handover',
    subtitle: 'Final Detailing, Snag List & Keys Handover',
    description: 'Deep cleaning, rigorous 50-point snag checklist resolution, testing of all utilities, and formal delivery of structural warranty documentation.',
    points: ['Comprehensive snag inspection audit', 'Utility & waterproofing stress tests', 'Handover documentation & warranty package'],
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Construction' | 'Renovation' | 'Interior' | 'Approval';
  categoryLabel: string;
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    title: '[PLACEHOLDER: Villa Serenity]',
    category: 'Construction',
    categoryLabel: 'Building Construction',
    location: 'ECR, Chennai',
    area: '4,800 sq.ft',
    year: '[PLACEHOLDER: 2024]',
    image: IMAGES.hero,
    description: 'Bespoke 4-bedroom contemporary coastal villa featuring terracotta brick louvers, exposed concrete pergolas, and landscaped courtyard living.',
  },
  {
    id: 'project-2',
    title: '[PLACEHOLDER: The Grand Heritage Residence]',
    category: 'Renovation',
    categoryLabel: 'Renovation Work',
    location: 'Mylapore, Chennai',
    area: '3,200 sq.ft',
    year: '[PLACEHOLDER: 2024]',
    image: IMAGES.introDetail,
    description: 'Comprehensive structural renovation and vertical floor expansion of a 35-year-old traditional residence, preserving historic charm while integrating modern amenities.',
  },
  {
    id: 'project-3',
    title: '[PLACEHOLDER: Mount Road Commercial Hub]',
    category: 'Construction',
    categoryLabel: 'Construction & Approval',
    location: 'Mount Road, Chennai',
    area: '8,500 sq.ft',
    year: '[PLACEHOLDER: 2023]',
    image: IMAGES.projectCommercial,
    description: 'G+3 boutique commercial retail and office complex with full GCC sanction, structural steel detailing, and ventilated brick facade.',
  },
  {
    id: 'project-4',
    title: '[PLACEHOLDER: Teak & Terracotta Penthouse]',
    category: 'Interior',
    categoryLabel: 'Interior Design',
    location: 'Nungambakkam, Chennai',
    area: '2,600 sq.ft',
    year: '[PLACEHOLDER: 2024]',
    image: IMAGES.serviceInterior,
    description: 'Minimalist luxury apartment interior featuring custom teak wood fluted panels, concealed ambient lighting, and hand-finished terrazzo flooring.',
  },
  {
    id: 'project-5',
    title: '[PLACEHOLDER: Urban Duplex Haven]',
    category: 'Construction',
    categoryLabel: 'Building Construction',
    location: 'Besant Nagar, Chennai',
    area: '3,900 sq.ft',
    year: '[PLACEHOLDER: 2023]',
    image: IMAGES.projectComplex,
    description: 'Modern residential duplex engineered for optimal natural ventilation, cantilevered balconies, and solar-ready terrace pergolas.',
  },
  {
    id: 'project-6',
    title: '[PLACEHOLDER: Contemporary Courtyard Home]',
    category: 'Interior',
    categoryLabel: 'Interior & Renovation',
    location: 'Alwarpet, Chennai',
    area: '3,100 sq.ft',
    year: '[PLACEHOLDER: 2024]',
    image: IMAGES.projectInterior,
    description: 'Interior revitalization and open-plan kitchen transformation centered around a sunlit natural stone lightwell and custom storage solutions.',
  },
];

export interface TestimonialItem {
  name: string;
  role: string;
  location: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: '[PLACEHOLDER: R. Sundaram]',
    role: 'Homeowner',
    location: 'Mount Road, Chennai',
    quote: '[PLACEHOLDER: "Lakshmi Builders completed our residential building project with immense structural rigor and complete honesty in material quality. Highly recommended."]',
  },
  {
    name: '[PLACEHOLDER: K. Meenakshi]',
    role: 'Architect & Client',
    location: 'Mylapore, Chennai',
    quote: '[PLACEHOLDER: "The renovation work executed on our ancestral home was flawless. The team navigated GCC approvals effortlessly and respected our timeline."]',
  },
];
