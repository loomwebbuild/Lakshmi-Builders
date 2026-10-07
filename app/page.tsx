'use client';

import { useState } from 'react';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Preloader } from '@/components/Preloader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Process } from '@/components/Process';
import { Projects } from '@/components/Projects';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { InquiryModal } from '@/components/InquiryModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (serviceName?: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <SmoothScroll>
      <Preloader />
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="relative min-h-screen flex flex-col bg-[#FAF8F5]">
        <Hero onOpenInquiry={() => handleOpenInquiry()} />
        <Intro />
        <Services onSelectService={(service) => handleOpenInquiry(service)} />
        <WhyChooseUs />
        <Process />
        <Projects onOpenInquiry={(projectName) => handleOpenInquiry(projectName)} />
        <FinalCTA initialServiceName={selectedService} />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </SmoothScroll>
  );
}
