'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY_CHOOSE_US, COMPANY_INFO } from '@/lib/constants';
import { Scale, Clock, ShieldCheck, FileCheck } from 'lucide-react';

const iconMap = {
  Scale: Scale,
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
};

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        if (prefersReducedMotion) {
          gsap.set(headerRef.current, { opacity: 1, y: 0 });
        } else {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }

      // Staggered fade-up for the 4 columns
      const cards = cardsContainerRef.current?.querySelectorAll('.why-us-card');
      if (cards) {
        if (prefersReducedMotion) {
          gsap.set(cards, { opacity: 1, y: 0 });
        } else {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FAF8F5] text-[#17181A] relative border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C04E26] mb-3">
            <span>The Lakshmi Standard</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#575A61]">Structural Integrity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17181A] leading-[1.15] text-balance mb-6">
            Why discerning property owners in Chennai{' '}
            <span className="accent-serif-word">trust</span> us.
          </h2>

          <p className="text-base sm:text-lg text-[#575A61] leading-relaxed">
            Construction in Chennai requires unyielding structural compliance, honest material testing, and proactive regulatory navigation. Here is how we safeguard your investment.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="why-us-card bg-[#F3EFEA] border border-black/5 p-8 flex flex-col justify-between rounded-xs transition-all duration-300 hover:border-[#C04E26]/30 hover:shadow-md group"
              >
                <div>
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xs border border-black/5 mb-6 text-[#C04E26] group-hover:scale-110 group-hover:bg-[#C04E26] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-xs text-[#C04E26] font-bold block mb-2">
                    0{index + 1}
                  </span>

                  <h3 className="text-xl font-bold text-[#17181A] mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#575A61] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs">
                  <span className="text-[#575A61] font-medium">Standard</span>
                  <span className="font-semibold text-[#17181A] font-mono">{item.stat}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Trust Bar */}
        <div className="mt-16 p-6 sm:p-8 bg-[#121315] text-white flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xs">
          <div>
            <h4 className="text-lg font-bold">Have questions about site soil tests or GCC sanction norms?</h4>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Our registered structural engineers are available for technical consultations at Mount Road.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneCallable}`}
            className="px-6 py-3 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Speak with an Engineer
          </a>
        </div>
      </div>
    </section>
  );
}
