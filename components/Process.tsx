'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS, COMPANY_INFO } from '@/lib/constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Create ScrollTrigger pin for desktop
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2400',
          pin: pinWrapperRef.current,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              PROCESS_STEPS.length - 1,
              Math.floor(progress * PROCESS_STEPS.length)
            );
            setActiveStepIndex(index);
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-[#121315] text-[#FAF8F5] overflow-hidden border-b border-white/10"
    >
      {/* Pinned Desktop Layout / Mobile Standard Flow */}
      <div ref={pinWrapperRef} className="lg:h-screen w-full flex flex-col justify-center py-20 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Top Section Header */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C04E26] mb-3">
              <span>Execution Roadmap</span>
              <span aria-hidden="true">·</span>
              <span className="text-white/60">4-Stage Precision Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
              From concept to keys, our disciplined{' '}
              <span className="accent-serif-word text-[#E87349]">process</span>.
            </h2>
          </div>

          {/* Desktop Pinned Interactive Display */}
          <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
            {/* Left: Step Indicators */}
            <div className="col-span-5 flex flex-col gap-6">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                const isPast = activeStepIndex > idx;
                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-6 rounded-xs border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white/10 border-[#C04E26] pl-8 shadow-lg'
                        : isPast
                        ? 'bg-white/[0.03] border-white/10 opacity-70 hover:opacity-100'
                        : 'bg-transparent border-white/5 opacity-40 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-sm font-bold ${
                            isActive ? 'text-[#C04E26]' : 'text-white/50'
                          }`}
                        >
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      {isPast ? (
                        <CheckCircle2 className="w-5 h-5 text-[#C04E26]" />
                      ) : (
                        <span className="text-xs text-white/40 uppercase font-mono">Stage {idx + 1}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Active Step Detailed Blueprint Box */}
            <div className="col-span-7">
              <div className="bg-[#1B1C20] border border-white/15 p-10 rounded-xs shadow-2xl relative overflow-hidden">
                {/* Background Accent Lines */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C04E26]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-xs font-mono text-[#C04E26] font-bold uppercase tracking-wider block mb-1">
                      Stage {PROCESS_STEPS[activeStepIndex].number} of 04
                    </span>
                    <h3 className="text-3xl font-bold text-white">
                      {PROCESS_STEPS[activeStepIndex].title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/50 block">Standard Protocol</span>
                    <span className="text-xs font-semibold text-white/80">Chennai Municipal Code</span>
                  </div>
                </div>

                <p className="text-base text-white/80 leading-relaxed mb-8">
                  {PROCESS_STEPS[activeStepIndex].description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                    Key Quality Milestones:
                  </h4>
                  {PROCESS_STEPS[activeStepIndex].points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                      <div className="w-5 h-5 rounded-full bg-[#C04E26]/20 flex items-center justify-center shrink-0 border border-[#C04E26]/40">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C04E26]" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Step Progress Bar */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[#C04E26]">Step {activeStepIndex + 1}</span>
                    <span>/ 4 Total Phases</span>
                  </div>
                  <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C04E26] transition-all duration-300"
                      style={{ width: `${((activeStepIndex + 1) / 4) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Step Flow: Vertical Cards with Large Tap Targets */}
          <div className="lg:hidden flex flex-col gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="bg-[#1B1C20] border border-white/10 p-6 rounded-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#C04E26] bg-white/5 px-2.5 py-1 border border-white/10">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <span className="text-xs text-white/50 font-mono">Stage 0{idx + 1}</span>
                </div>

                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {step.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C04E26] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
