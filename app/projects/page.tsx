'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { PageHeader } from '@/components/PageHeader';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { InquiryModal } from '@/components/InquiryModal';
import { PROJECTS, ProjectItem, COMPANY_INFO } from '@/lib/constants';
import {
  MapPin,
  Maximize2,
  X,
  CheckCircle2,
  Search,
  SlidersHorizontal,
  ArrowUpRight,
} from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryProject, setInquiryProject] = useState<string | undefined>(undefined);

  const categories = ['All', 'Construction', 'Renovation', 'Interior'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenInquiry = (title?: string) => {
    setInquiryProject(title);
    setModalOpen(true);
  };

  return (
    <SmoothScroll>
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="min-h-screen bg-[#FAF8F5]">
        <PageHeader
          kicker="Selected Works"
          title="Engineered structures and spaces built to"
          accentWord="endure."
          description={`A showcase of turnkey residential residences, heritage renovations, and commercial developments across Chennai by Lakshmi Builders (${COMPANY_INFO.completedProjectsCount}).`}
          breadcrumbs={[{ label: 'Projects' }]}
        />

        {/* Filter and Search Bar */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/10">
            {/* Category Filter Pills */}
            <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xs border transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#121315] text-white border-[#121315] shadow-xs'
                      : 'bg-white text-[#575A61] border-black/10 hover:bg-black/5 hover:text-[#17181A]'
                  }`}
                >
                  {cat === 'All' ? 'All Projects (6)' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#575A61] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search location or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-black/10 rounded-xs text-[#17181A] placeholder:text-[#575A61]/60 focus:border-[#C04E26] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Active Filter Counter */}
          <div className="mt-4 flex items-center justify-between text-xs text-[#575A61]">
            <span>Showing {filteredProjects.length} completed projects</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#C04E26] hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center bg-white border border-black/10 rounded-xs">
              <p className="text-base font-bold text-[#17181A]">No projects match your criteria.</p>
              <p className="text-xs text-[#575A61] mt-1">Try selecting another category or clear search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="group bg-white border border-black/10 rounded-xs overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#C04E26]/40"
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#1B1C20]">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.categoryLabel}`}
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

                    {/* Bottom Info */}
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
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Project Detail Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="bg-[#FAF8F5] text-[#17181A] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xs shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/9 w-full bg-[#1B1C20]">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 bg-[#121315]/80 hover:bg-[#121315] text-white p-2 rounded-full transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#575A61] mb-2 font-mono">
                  <span className="text-[#C04E26] font-bold uppercase">{activeProject.categoryLabel}</span>
                  <span>·</span>
                  <span>{activeProject.location}</span>
                  <span>·</span>
                  <span>{activeProject.area}</span>
                  <span>·</span>
                  <span>{activeProject.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#17181A] mb-4">
                  {activeProject.title}
                </h3>

                <p className="text-sm sm:text-base text-[#575A61] leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <div className="bg-[#F3EFEA] p-5 rounded-xs mb-6 border border-black/5">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#17181A] mb-3">
                    Delivered Structural Scope:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#575A61]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                      <span>FE-550 TMT steel reinforced RCC structure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                      <span>Statutory GCC/CMDA building sanction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                      <span>Multi-layer terrace elastomeric waterproofing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C04E26] shrink-0" />
                      <span>Turnkey architectural interior joinery</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-black/10">
                  <button
                    onClick={() => {
                      const title = activeProject.title;
                      setActiveProject(null);
                      handleOpenInquiry(title);
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
      </main>

      <Footer />
      <FloatingWhatsApp />
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={inquiryProject}
      />
    </SmoothScroll>
  );
}
