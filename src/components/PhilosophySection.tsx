'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export const PhilosophySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>('.reveal-line');
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: line,
              start: 'top 92%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      });

      gsap.fromTo(
        '.stats-row',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.stats-row',
            start: 'top 95%',
            end: 'top 65%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-32 bg-[#121212] border-t border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
        
        {/* High-Contrast Luminous Lavender Micro-Copy Overline */}
        <span className="reveal-line text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#E2B3FF] font-mono mb-4 sm:mb-6 block font-extrabold">
          MODELIX AI MEMORIES MANIFESTO
        </span>

        {/* Refined Headline with Casing Contrast */}
        <h2 className="font-heading text-2xl sm:text-5xl md:text-7xl font-extrabold text-[#F9FAFB] leading-snug sm:leading-[1.15] tracking-tight">
          <span className="reveal-line block normal-case font-bold text-[#F9FAFB] mb-1 sm:mb-2">
            We do not limit memories to reality.
          </span>
          <span className="reveal-line block bronze-gradient-text uppercase italic font-black">
            WE CRAFT INFINITE PERSONAL AI PHOTO MEMORIES.
          </span>
        </h2>

        {/* 3 Unified Modelix AI Stats */}
        <div className="stats-row mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/10">
          <div className="flex flex-col items-center">
            <span className="font-heading text-4xl sm:text-6xl text-[#B026FF] font-extrabold">8K</span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D1D5DB] mt-2 sm:mt-3 font-semibold">
              Memory Quality
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-heading text-4xl sm:text-6xl text-[#B026FF] font-extrabold">24h</span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D1D5DB] mt-2 sm:mt-3 font-semibold">
              Fast Delivery
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-heading text-4xl sm:text-6xl text-[#B026FF] font-extrabold">100%</span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D1D5DB] mt-2 sm:mt-3 font-semibold">
              Photorealistic Fidelity
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
