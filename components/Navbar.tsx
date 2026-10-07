'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_INFO } from '@/lib/constants';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [hasScrolledPast80, setHasScrolledPast80] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setHasScrolledPast80(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const isScrolled = !isHome || hasScrolledPast80;


  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md text-[#17181A] border-b border-black/5 shadow-xs py-3.5'
            : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single Text Element Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C04E26]"
            aria-label="Lakshmi Builders - Home"
          >
            <span className="font-bold text-lg sm:text-xl tracking-tight uppercase">
              Lakshmi Builders
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C04E26] group-hover:scale-125 transition-transform" />
          </Link>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors relative py-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C04E26] rounded-xs ${
                    isActive
                      ? 'text-[#C04E26] font-semibold'
                      : isScrolled
                      ? 'text-[#575A61] hover:text-[#17181A]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C04E26] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneCallable}`}
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xs border transition-colors whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'border-black/15 text-[#17181A] hover:bg-black/5'
                  : 'border-white/25 text-white hover:bg-white/10'
              }`}
              aria-label={`Call Lakshmi Builders at ${COMPANY_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C04E26]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-[#C04E26] text-white hover:bg-[#A73E1B] active:scale-98 transition-all whitespace-nowrap shrink-0 shadow-xs cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C04E26]"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C04E26] ${
                isScrolled ? 'text-[#17181A] hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-16 left-0 right-0 bg-[#FAF8F5] text-[#17181A] border-b border-black/10 shadow-xl px-6 py-8 flex flex-col gap-4 animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-semibold tracking-wider text-[#575A61] uppercase pb-2 border-b border-black/10">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-2 border-b border-black/5 transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#C04E26]' : 'text-[#17181A] hover:text-[#C04E26]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C04E26]" />}
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneCallable}`}
                className="flex items-center justify-center gap-2 py-3 border border-black/15 text-sm font-semibold text-[#17181A] bg-white rounded-xs"
              >
                <Phone className="w-4 h-4 text-[#C04E26]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry?.();
                }}
                className="w-full py-3 bg-[#C04E26] text-white text-sm font-semibold text-center rounded-xs shadow-xs cursor-pointer"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

