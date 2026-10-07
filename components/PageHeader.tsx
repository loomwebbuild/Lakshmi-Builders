'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  accentWord?: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHeader({
  kicker,
  title,
  accentWord,
  description,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-[#121315] text-white border-b border-white/10 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              {item.href ? (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/90 font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C04E26] mb-3">
          <span>{kicker}</span>
          <span aria-hidden="true">·</span>
          <span className="text-white/60">Mount Road, Chennai</span>
        </div>

        {/* Main Title with Accented Serif Word */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.12] text-balance mb-6">
          {title}{' '}
          {accentWord && <span className="accent-serif-word text-[#E87349]">{accentWord}</span>}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </section>
  );
}
