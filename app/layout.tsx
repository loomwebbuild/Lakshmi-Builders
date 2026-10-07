import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lakshmi Builders | Construction, Renovation & Plan Approvals in Mount Road, Chennai',
  description: 'Lakshmi Builders is a premier construction and renovation company in Mount Road, Chennai 600002. Specializing in residential & commercial construction, interiors, and plan approval.',
  keywords: [
    'builders in Mount Road Chennai',
    'construction company Chennai',
    'building contractors Mount Road',
    'house renovation Chennai',
    'interior designers Mount Road Chennai',
    'building plan approval Chennai',
    'Lakshmi Builders Chennai',
  ],
  authors: [{ name: 'Lakshmi Builders' }],
  creator: 'Lakshmi Builders',
  metadataBase: new URL(process.env.APP_URL || 'https://lakshmibuilders-chennai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lakshmi Builders | Builders in Mount Road Chennai',
    description: 'Bespoke building construction, renovation, interior design, and plan approval services in Chennai. Crafting spaces that endure.',
    url: '/',
    siteName: 'Lakshmi Builders',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshmi Builders | Builders in Mount Road Chennai',
    description: 'Premier construction and renovation company in Mount Road, Chennai 600002. Plan approval & interior design specialists.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Lakshmi Builders',
  image: 'https://lakshmibuilders-chennai.com/og-image.jpg',
  '@id': 'https://lakshmibuilders-chennai.com/#business',
  url: 'https://lakshmibuilders-chennai.com',
  telephone: '+919840000000',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '81/14, Thayar Sahib Street, Mount Road',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600002',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0604,
    longitude: 80.2642,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:30',
    },
  ],
  sameAs: ['https://www.instagram.com/lakshmibuilders_chennai'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction & Architectural Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Building Construction',
          description: 'Turnkey residential and commercial building construction in Chennai with structural warranty.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Renovation Work',
          description: 'Structural remodeling, floor additions, structural strengthening, and modernization.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interior Design',
          description: 'Bespoke residential and commercial interior spaces, modular woodwork, and space planning.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Building Plan Approval',
          description: 'CMDA and GCC building permit sanction, regularisation, and regulatory liaison.',
        },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#FAF8F5] text-[#17181A] font-sans selection:bg-[#C04E26] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

