'use client';

import { COMPANY_INFO } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Lakshmi Builders"
        className="flex items-center gap-3 bg-[#121315] hover:bg-[#1E2024] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl border border-white/15 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366]" />
        </span>

        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-medium text-white/60 leading-tight">Chat on</span>
            <span className="text-xs font-bold text-white tracking-wide leading-tight">WhatsApp</span>
          </div>
        </div>
      </a>
    </aside>
  );
}
