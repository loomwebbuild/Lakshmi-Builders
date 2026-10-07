'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { IMAGES, COMPANY_INFO } from '@/lib/constants';
import { ArrowDown, Phone, MessageSquareQuote } from 'lucide-react';

interface HeroProps {
  onOpenInquiry?: () => void;
}

export function Hero({ onOpenInquiry }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageBgRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const trustBadgeRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            kickerRef.current,
            headlineRef.current,
            descriptionRef.current,
            actionsRef.current,
            trustBadgeRef.current,
            scrollIndicatorRef.current,
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      // Initial state
      gsap.set(imageBgRef.current, { scale: 1.1 });
      gsap.set(
        [
          kickerRef.current,
          headlineRef.current,
          descriptionRef.current,
          actionsRef.current,
          trustBadgeRef.current,
        ],
        { opacity: 0, y: 40 }
      );
      gsap.set(scrollIndicatorRef.current, { opacity: 0, y: 20 });

      // Slow scale-down of hero background
      gsap.to(imageBgRef.current, {
        scale: 1,
        duration: 2.2,
        ease: 'power2.out',
      });

      // Staggered reveal of text elements (translateY 40px + opacity 0 to 1, 0.9s, power3.out, stagger 0.12)
      gsap.to(
        [
          kickerRef.current,
          headlineRef.current,
          descriptionRef.current,
          actionsRef.current,
          trustBadgeRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Reveal scroll indicator & bobbing loop
      gsap.to(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.9,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(scrollIndicatorRef.current, {
            y: 8,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#121315] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image Container with Slow Scale Down */}
      <div
        ref={imageBgRef}
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      >
        <Image
          src={IMAGES.hero}
          alt="Lakshmi Builders modern architectural construction project in Chennai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured Contrast Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-black/65 to-black/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/70" />
      </div>

      {/* Spacer for top alignment */}
      <div className="hidden sm:block h-6" />

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto flex flex-col items-center sm:items-start text-center sm:text-left py-12">
        {/* Unboxed Location Kicker */}
        <div ref={kickerRef} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C04E26] mb-4">
          <span>Mount Road, Chennai</span>
          <span aria-hidden="true">·</span>
          <span className="text-white/80">Est. Tamil Nadu</span>
        </div>

        {/* Headline with Accented Word */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] text-balance mb-6"
        >
          We build homes and spaces that{' '}
          <span className="accent-serif-word text-[#E87349]">last</span>.
        </h1>

        {/* Subtitle / Value Proposition */}
        <p
          ref={descriptionRef}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed mb-8 text-pretty"
        >
          Premier construction, structural renovation, tailored interior design, and CMDA/GCC plan approvals in Mount Road, Chennai. Engineered for generational durability.
        </p>

        {/* Primary Action Buttons */}
        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-7 py-4 bg-[#C04E26] hover:bg-[#A73E1B] active:scale-98 text-white text-sm font-semibold tracking-wide uppercase transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageSquareQuote className="w-4 h-4" />
            <span>Request Free Consultation</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.phoneCallable}`}
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 active:scale-98 text-white border border-white/20 text-sm font-semibold tracking-wide transition-all backdrop-blur-xs flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="w-4 h-4 text-[#C04E26]" />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Quiet Trust Evidence Metadata */}
        <div
          ref={trustBadgeRef}
          className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 text-xs text-white/70"
        >
          <div>
            <span className="font-semibold text-white">4 Core Specializations</span>
            <span className="block text-[11px] text-white/50">Turnkey Construction to Sanctions</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <div>
            <span className="font-semibold text-white">{COMPANY_INFO.yearsInBusiness}</span>
            <span className="block text-[11px] text-white/50">Mount Road, Chennai</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <div>
            <span className="font-semibold text-white">GCC & CMDA Compliance</span>
            <span className="block text-[11px] text-white/50">100% Legal Clearance</span>
          </div>
        </div>
      </div>

      {/* Bobbing Scroll Indicator at Bottom */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 flex flex-col items-center justify-center text-center text-white/60 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          const intro = document.getElementById('intro');
          intro?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium mb-1.5">
          Scroll to explore
        </span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <ArrowDown className="w-3.5 h-3.5 text-[#C04E26]" />
        </div>
      </div>
    </section>
  );
}
