'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES, ServiceItem } from '@/lib/constants';
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsContainerRef = useRef<HTMLDivElement>(null);
  const [activeDesktopService, setActiveDesktopService] = useState<ServiceItem>(SERVICES[0]);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(SERVICES[0].id);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const rows = rowsContainerRef.current?.querySelectorAll('.service-row-item');
      if (rows) {
        if (prefersReducedMotion) {
          gsap.set(rows, { opacity: 1, y: 0 });
        } else {
          gsap.fromTo(
            rows,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: rowsContainerRef.current,
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

  const toggleMobile = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#121315] text-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C04E26] mb-3">
              <span>Core Capabilities</span>
              <span aria-hidden="true">·</span>
              <span className="text-white/60">4 Integrated Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-xl">
              Engineered services designed to <span className="accent-serif-word text-[#E87349]">perform</span>.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-white/60 max-w-md">
            From initial municipal blueprint sanction to structural handover and interior finishing, our in-house engineering team oversees every detail.
          </p>
        </div>

        {/* Desktop Layout: Split list + Dynamic Floating Image Viewport */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Left: 4 Large Numbered Rows */}
          <div ref={rowsContainerRef} className="col-span-7 flex flex-col divide-y divide-white/10">
            {SERVICES.map((service) => {
              const isSelected = activeDesktopService.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveDesktopService(service)}
                  onClick={() => onSelectService?.(service.title)}
                  className={`service-row-item py-8 px-4 transition-all duration-300 cursor-pointer group rounded-xs ${
                    isSelected ? 'bg-white/5 pl-6' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-sm tracking-widest text-[#C04E26] font-bold">
                        {service.number}
                      </span>
                      <h3 className="text-2xl xl:text-3xl font-bold text-white group-hover:text-[#E87349] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isSelected
                          ? 'text-[#C04E26] translate-x-1 -translate-y-1'
                          : 'text-white/30 group-hover:text-white'
                      }`}
                    />
                  </div>

                  <p className="text-sm text-white/70 max-w-xl pl-12 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Expandable deliverables on active */}
                  {isSelected && (
                    <div className="mt-4 pl-12 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 animate-in fade-in duration-200">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C04E26] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Image Preview Showcase */}
          <div className="col-span-5 sticky top-28">
            <div className="relative aspect-4/3 rounded-xs overflow-hidden border border-white/15 bg-[#1B1C20] shadow-2xl">
              <Image
                src={activeDesktopService.image}
                alt={activeDesktopService.title}
                fill
                sizes="40vw"
                className="object-cover transition-opacity duration-500"
                key={activeDesktopService.id}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Service Overlay Card */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="text-xs font-mono text-[#E87349] tracking-wider uppercase mb-1 block">
                  Service {activeDesktopService.number}
                </span>
                <h4 className="text-xl font-bold mb-2">{activeDesktopService.title}</h4>
                <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                  {activeDesktopService.fullDesc}
                </p>
                <button
                  onClick={() => onSelectService?.(activeDesktopService.title)}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#C04E26] hover:bg-[#A73E1B] px-3.5 py-2 transition-colors cursor-pointer"
                >
                  <span>Inquire for {activeDesktopService.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Accordion Layout: Tap-to-Expand with Large Touch Targets */}
        <div className="lg:hidden flex flex-col divide-y divide-white/10">
          {SERVICES.map((service) => {
            const isExpanded = expandedMobileId === service.id;
            return (
              <div key={service.id} className="py-6 service-row-item">
                <button
                  onClick={() => toggleMobile(service.id)}
                  className="w-full flex items-center justify-between text-left py-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C04E26]"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#C04E26]">
                      {service.number}
                    </span>
                    <span className="text-xl font-bold text-white">{service.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-[#C04E26]' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="mt-4 pt-2 pb-2 pl-8 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-sm text-white/80 leading-relaxed">{service.fullDesc}</p>

                    {/* Mobile Image Preview */}
                    <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-white/10 my-2">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="90vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectService?.(service.title)}
                      className="mt-2 w-full py-3 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider text-center"
                    >
                      Inquire for {service.title}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
