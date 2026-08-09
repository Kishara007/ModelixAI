'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Film, Star } from 'lucide-react';
import { gsap } from '@/lib/gsap';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string, price: string) => void;
}

export const PACKAGES_DATA = [
  {
    id: 'pkg-1',
    name: 'ESSENTIAL MEMORY',
    tagline: 'Perfect for quick birthday & milestone photo shoots',
    price: '$10',
    popular: false,
    badge: 'STARTER',
    icon: Zap,
    features: [
      '10 Realistic AI Photos',
      'Choose & Customize Photoshoot Theme',
      'Delivery within 24 Hours',
      'High-Resolution 8K Output',
    ],
  },
  {
    id: 'pkg-2',
    name: 'CREATIVE STUDIO',
    tagline: 'Best value for travel, trips & personal albums',
    price: '$30',
    popular: true,
    badge: 'MOST POPULAR',
    icon: Sparkles,
    features: [
      '30 Realistic AI Photos',
      'Choose & Customize Photoshoot Theme',
      'Delivery within 24 Hours',
      'FREE AI Video Reel',
      'High-Resolution 8K Output',
    ],
  },
  {
    id: 'pkg-3',
    name: 'VIP ULTIMATE CINEMA',
    tagline: 'Complete cinematic package for grand memories',
    price: '$50',
    popular: false,
    badge: 'VIP CINEMA',
    icon: Film,
    features: [
      '50 Realistic AI Photos',
      'Choose & Customize Photoshoot Theme',
      'Delivery within 24 Hours',
      'FREE AI Video + Slide Show Video',
      'Priority Delivery Support',
      'High-Resolution 8K Output',
    ],
  },
];

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 92%',
              end: 'top 65%',
              scrub: 1,
            },
          }
        );
      }

      if (cardsRef.current) {
        const pkgCards = gsap.utils.toArray<HTMLElement>('.pkg-card');
        gsap.fromTo(
          pkgCards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: 'none',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 92%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-32 bg-[#0D0C0C] border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#B026FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B026FF] font-mono block mb-2 sm:mb-3 font-bold">
            MODELIX AI PRICING & PACKAGES
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl text-[#F9FAFB] font-extrabold tracking-tight">
            CHOOSE YOUR <span className="volt-gradient-text italic font-bold pr-2 sm:pr-3 inline-block">PACKAGE</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#9CA3AF] font-light mt-3 sm:mt-4">
            Transparent pricing with 24-hour delivery. All packages include customizable AI photoshoot themes and high-resolution 8K imagery.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -8 }}
                className={`pkg-card relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 glass-panel ${
                  pkg.popular
                    ? 'border-2 border-[#B026FF] shadow-2xl shadow-[#B026FF]/25 bg-[#141217]'
                    : 'border border-white/10 hover:border-[#B026FF]/40'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#B026FF] text-white text-[9px] sm:text-[10px] font-heading font-extrabold tracking-widest uppercase shadow-lg shadow-[#B026FF]/40 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current text-white" /> MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`p-2.5 sm:p-3 rounded-2xl ${pkg.popular ? 'bg-[#B026FF] text-white' : 'bg-[#1A1A1A] text-[#B026FF] border border-white/10'}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#9CA3AF] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#0A0A0A] border border-white/10">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl text-[#F9FAFB] font-extrabold tracking-tight mb-1.5 sm:mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] font-light mb-5 sm:mb-6 sm:min-h-[32px]">
                    {pkg.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/10">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F9FAFB]">{pkg.price}</span>
                    <span className="text-[10px] sm:text-xs font-mono text-[#9CA3AF]">/ photoshoot</span>
                  </div>

                  <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs text-[#F9FAFB] font-medium">
                        <div className="p-0.5 rounded-full bg-[#B026FF]/20 text-[#B026FF] mt-0.5 shrink-0">
                          <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg.name, pkg.price)}
                  className={`w-full py-3.5 sm:py-4 rounded-full font-heading font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-[#B026FF] hover:bg-[#C246FF] text-white shadow-xl shadow-[#B026FF]/40'
                      : 'bg-[#1A1A1A] hover:bg-[#B026FF] text-[#F9FAFB] border border-white/15 hover:border-[#B026FF]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> SELECT {pkg.name.split(' ')[0]}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
