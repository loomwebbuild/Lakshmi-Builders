'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES, COMPANY_INFO } from '@/lib/constants';

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Reveal text content on scroll
      const textElements = textContainerRef.current?.children;
      if (textElements) {
        if (prefersReducedMotion) {
          gsap.set(textElements, { opacity: 1, y: 0 });
        } else {
          gsap.fromTo(
            textElements,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: textContainerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }

      // Parallax animations for the two images with distinct scrub speeds
      if (!prefersReducedMotion && img1Ref.current && img2Ref.current && sectionRef.current) {
        // Image 1: slower parallax (y: -30 to 30)
        gsap.fromTo(
          img1Ref.current,
          { y: '8%' },
          {
            y: '-8%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );

        // Image 2: faster parallax (y: 12% to -12%)
        gsap.fromTo(
          img2Ref.current,
          { y: '14%' },
          {
            y: '-14%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.6,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#FAF8F5] text-[#17181A] overflow-hidden border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Statement Headline & Editorial Paragraph */}
        <div ref={textContainerRef} className="max-w-4xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C04E26] mb-4">
            <span>Our Foundation</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#575A61]">{COMPANY_INFO.address}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17181A] leading-[1.15] text-balance mb-6">
            We merge engineering precision with architectural craft to create spaces that{' '}
            <span className="accent-serif-word">stand</span> the test of time.
          </h2>

          <p className="text-base sm:text-lg text-[#575A61] leading-relaxed max-w-3xl">
            Established on Mount Road in Chennai, Lakshmi Builders manages every phase of structural life: from ground-up civil construction and complex structural renovations to bespoke interior design and statutory CMDA / GCC plan approval sanctions. We eliminate uncertainty through itemized bills of quantities, lab-tested raw materials, and uncompromising on-site supervision.
          </p>
        </div>

        {/* Parallax Image Duet: Two asymmetric image frames with different scrub speeds */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image 1: Detail Craftsmanship (Slower Parallax) */}
          <div className="md:col-span-7 relative">
            <div className="overflow-hidden rounded-xs bg-[#1B1C20] shadow-md aspect-4/3 relative">
              <div ref={img1Ref} className="absolute -inset-y-12 inset-x-0 will-change-transform">
                <Image
                  src={IMAGES.introDetail}
                  alt="Lakshmi Builders structural masonry and brickwork craftsmanship in Chennai"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-[#575A61]">
              <span className="font-medium text-[#17181A]">Structural Masonry & Foundation</span>
              <span>Mount Road, Chennai</span>
            </div>
          </div>

          {/* Image 2: Contemporary Villa (Faster Parallax Offset) */}
          <div className="md:col-span-5 relative md:-mt-12">
            <div className="overflow-hidden rounded-xs bg-[#1B1C20] shadow-lg aspect-3/4 relative">
              <div ref={img2Ref} className="absolute -inset-y-16 inset-x-0 will-change-transform">
                <Image
                  src={IMAGES.introVilla}
                  alt="Contemporary residence crafted by Lakshmi Builders in Chennai"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-[#575A61]">
              <span className="font-medium text-[#17181A]">Completed Residential Structure</span>
              <span>{COMPANY_INFO.completedProjectsCount}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
