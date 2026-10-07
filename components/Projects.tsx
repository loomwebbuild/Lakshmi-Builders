'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS, ProjectItem, COMPANY_INFO } from '@/lib/constants';
import { ArrowUpRight, ArrowRight, X, MapPin, Maximize2, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  onOpenInquiry?: (projectName?: string) => void;
}

export function Projects({ onOpenInquiry }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Construction', 'Renovation', 'Interior'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card-item');
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
                trigger: gridRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FAF8F5] text-[#17181A] relative border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C04E26] mb-3">
              <span>Selected Portfolio</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#575A61]">{COMPANY_INFO.completedProjectsCount}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17181A] max-w-xl">
              Structures crafted with structural <span className="accent-serif-word">rigor</span>.
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center flex-wrap gap-2 p-1 bg-[#F3EFEA] border border-black/5 rounded-xs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#121315] text-white shadow-xs'
                    : 'text-[#575A61] hover:text-[#17181A] hover:bg-black/5'
                }`}
              >
                {category === 'All' ? 'All Works (6)' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of 6 Projects */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="project-card-item group bg-white border border-black/10 rounded-xs overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#C04E26]/40"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#1B1C20]">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.categoryLabel} by Lakshmi Builders Chennai`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Clean Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#121315]/85 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1 border border-white/10">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Quick Expand Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-2 text-[#17181A]">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Quick Area / Year */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-mono">
                  <span>{project.area}</span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#575A61] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C04E26] shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#17181A] group-hover:text-[#C04E26] transition-colors mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#575A61] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#C04E26]">
                  <span>Explore Project Specs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#121315] hover:bg-[#1E2024] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-md"
          >
            <span>Explore Complete Portfolio ({COMPANY_INFO.completedProjectsCount})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Project Detail Modal View */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-[#FAF8F5] text-[#17181A] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xs shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-16/9 w-full bg-[#1B1C20]">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 bg-[#121315]/80 hover:bg-[#121315] text-white p-2 rounded-full transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#575A61] mb-2 font-mono">
                <span className="text-[#C04E26] font-bold uppercase">{activeModalProject.categoryLabel}</span>
                <span>·</span>
                <span>{activeModalProject.location}</span>
                <span>·</span>
                <span>{activeModalProject.area}</span>
                <span>·</span>
                <span>{activeModalProject.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#17181A] mb-4">
                {activeModalProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[#575A61] leading-relaxed mb-6">
                {activeModalProject.description}
              </p>

              {/* Engineering Scope Highlights */}
              <div className="bg-[#F3EFEA] p-5 rounded-xs mb-6 border border-black/5">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#17181A] mb-3">
                  Delivered Structural Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#575A61]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                    <span>Tested FE-550 TMT reinforced columns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                    <span>Statutory GCC building permit compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                    <span>Thermal & sound-insulated exterior masonry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                    <span>Turnkey interior joinery & finishing</span>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-black/10">
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onOpenInquiry?.(title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#C04E26] hover:bg-[#A73E1B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Inquire for Similar Project
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneCallable}`}
                  className="w-full sm:w-auto px-6 py-3 border border-black/15 hover:bg-black/5 text-[#17181A] text-xs font-semibold tracking-wider text-center transition-colors"
                >
                  Call {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
