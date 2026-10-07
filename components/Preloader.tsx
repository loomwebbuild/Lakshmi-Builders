'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [isRemoved, setIsRemoved] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('lakshmi_preloader_seen') === 'true';
    }
    return false;
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeen = sessionStorage.getItem('lakshmi_preloader_seen') === 'true';

    if (prefersReducedMotion || hasSeen) {
      const timer = setTimeout(() => {
        setIsRemoved(true);
        onComplete?.();
      }, 0);
      return () => clearTimeout(timer);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('lakshmi_preloader_seen', 'true');
          setIsRemoved(true);
          onComplete?.();
        },
      });


      // Initial state
      gsap.set(logoRef.current, { opacity: 0, scale: 0.9, y: 15 });
      gsap.set(textRef.current, { opacity: 0, y: 15 });
      gsap.set(subtextRef.current, { opacity: 0, y: 10 });
      gsap.set(progressLineRef.current, { scaleX: 0, transformOrigin: 'left center' });

      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .to(
          progressLineRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.inOut',
          },
          '-=0.2'
        )
        .to(
          [logoRef.current, textRef.current, subtextRef.current, progressLineRef.current],
          {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power2.in',
            stagger: 0.05,
          },
          '+=0.15'
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.85,
          ease: 'power4.inOut',
        });
    });

    return () => ctx.revert();
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121315] text-[#FAF8F5] select-none"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Architectural Emblem */}
        <div ref={logoRef} className="mb-6">
          <div className="w-14 h-14 border border-[#FAF8F5]/20 flex items-center justify-center relative rotate-45">
            <div className="w-8 h-8 border border-[#C04E26] flex items-center justify-center">
              <span className="-rotate-45 font-serif text-lg font-bold text-[#C04E26]">L</span>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div ref={textRef} className="overflow-hidden mb-2">
          <h1 className="text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-[#FAF8F5]">
            Lakshmi Builders
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtextRef} className="overflow-hidden mb-6">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#FAF8F5]/60">
            Mount Road · Chennai
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-36 h-[2px] bg-white/10 overflow-hidden relative">
          <div
            ref={progressLineRef}
            className="absolute inset-0 bg-[#C04E26]"
          />
        </div>
      </div>
    </div>
  );
}
