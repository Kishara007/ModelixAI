'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { gsap } from '@/lib/gsap';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            end: 'top 70%',
            scrub: 1,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative w-full bg-[#121212] border-t border-white/10 pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden"
    >
      <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10 items-center">
          
          {/* Brand & Studio Details */}
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#F9FAFB] font-extrabold tracking-tight mb-2 sm:mb-4 uppercase">
              MODELIX AI STUDIO
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] font-light">
              Generative Visual Studio • Modelix AI Personal Photo Memories
            </p>
          </div>

          {/* Contact Details (Email & WhatsApp) */}
          <div className="flex flex-col lg:flex-row lg:justify-end gap-3 sm:gap-4 w-full lg:w-auto">
            
            {/* Email Contact Pill */}
            <a
              href="mailto:hellopixelpiestudio@gmail.com"
              className="glass-panel px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-white/15 hover:border-[#B026FF]/60 flex items-center justify-start gap-3 group transition-all cursor-pointer w-full lg:w-auto"
            >
              <div className="p-2 rounded-xl bg-[#B026FF]/20 text-[#B026FF] group-hover:bg-[#B026FF] group-hover:text-white transition-colors shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] sm:text-[10px] font-mono text-[#9CA3AF] uppercase tracking-widest font-bold">Email Us</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F9FAFB] group-hover:text-[#B026FF] transition-colors whitespace-nowrap">
                  hellopixelpiestudio@gmail.com
                </span>
              </div>
            </a>

            {/* WhatsApp Contact Pill */}
            <a
              href="https://wa.me/94751670510"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-white/15 hover:border-[#B026FF]/60 flex items-center justify-start gap-3 group transition-all cursor-pointer w-full lg:w-auto"
            >
              <div className="p-2 rounded-xl bg-[#B026FF]/20 text-[#B026FF] group-hover:bg-[#B026FF] group-hover:text-white transition-colors shrink-0">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] sm:text-[10px] font-mono text-[#9CA3AF] uppercase tracking-widest font-bold">WhatsApp</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F9FAFB] group-hover:text-[#B026FF] transition-colors whitespace-nowrap">
                  +94 75 167 0510
                </span>
              </div>
            </a>

          </div>

        </div>

        {/* Bottom Socials */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] sm:text-xs text-[#9CA3AF]">
          <div>© {new Date().getFullYear()} MODELIX AI PERSONAL MEMORIES STUDIO</div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:hellopixelpiestudio@gmail.com"
              className="group relative flex items-center gap-1 hover:text-[#B026FF] transition-colors"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://wa.me/94751670510"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-1 hover:text-[#B026FF] transition-colors"
            >
              <span>WhatsApp Chat</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
