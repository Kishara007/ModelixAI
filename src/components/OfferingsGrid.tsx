'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem, MENU_ITEMS } from '@/lib/menuData';

interface OfferingsGridProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenCustomFlight: () => void;
}

const ROW_1_ITEMS: MenuItem[] = MENU_ITEMS.slice(0, 13);
const ROW_2_ITEMS: MenuItem[] = MENU_ITEMS.slice(13, 26);
const ROW_3_ITEMS: MenuItem[] = MENU_ITEMS.slice(26, 38);

export const OfferingsGrid: React.FC<OfferingsGridProps> = ({ onSelectItem }) => {
  const row1Loop = [...ROW_1_ITEMS, ...ROW_1_ITEMS];
  const row2Loop = [...ROW_2_ITEMS, ...ROW_2_ITEMS];
  const row3Loop = [...ROW_3_ITEMS, ...ROW_3_ITEMS];

  return (
    <section id="offerings" className="relative w-full py-16 sm:py-28 bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-[#B026FF]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16 relative z-10">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B026FF] font-mono block mb-2 sm:mb-3 font-bold">
          MODELIX AI PERSONAL MEMORIES
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl text-[#F9FAFB] font-extrabold tracking-tight">
          PERSONAL AI <span className="volt-gradient-text italic font-bold pr-2 sm:pr-3 inline-block">MEMORIES</span>
        </h2>
      </div>

      {/* 3-Row Infinite Motion Gallery Marquee Containers */}
      <div className="space-y-4 sm:space-y-8 relative z-10 w-full">
        
        {/* ROW 1 */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-left-right gap-4 sm:gap-6 px-2 sm:px-3">
            {row1Loop.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                onClick={() => onSelectItem(item)}
                className="group relative w-60 sm:w-80 md:w-96 h-52 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#B026FF]/60 transition-all duration-500 shrink-0 cursor-pointer shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 240px, 384px"
                  className="object-cover brightness-90 group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 flex flex-col justify-end">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#9CA3AF] uppercase tracking-widest block mb-0.5 sm:mb-1">
                    {item.price}
                  </span>
                  <h3 className="font-heading text-sm sm:text-lg text-[#F9FAFB] font-bold tracking-tight group-hover:text-[#B026FF] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-right-left gap-4 sm:gap-6 px-2 sm:px-3">
            {row2Loop.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                onClick={() => onSelectItem(item)}
                className="group relative w-60 sm:w-80 md:w-96 h-52 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#B026FF]/60 transition-all duration-500 shrink-0 cursor-pointer shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 240px, 384px"
                  className="object-cover brightness-90 group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 flex flex-col justify-end">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#9CA3AF] uppercase tracking-widest block mb-0.5 sm:mb-1">
                    {item.price}
                  </span>
                  <h3 className="font-heading text-sm sm:text-lg text-[#F9FAFB] font-bold tracking-tight group-hover:text-[#B026FF] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3 */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-left-right gap-4 sm:gap-6 px-2 sm:px-3">
            {row3Loop.map((item, idx) => (
              <div
                key={`r3-${idx}`}
                onClick={() => onSelectItem(item)}
                className="group relative w-60 sm:w-80 md:w-96 h-52 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#B026FF]/60 transition-all duration-500 shrink-0 cursor-pointer shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 240px, 384px"
                  className="object-cover brightness-90 group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 flex flex-col justify-end">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#9CA3AF] uppercase tracking-widest block mb-0.5 sm:mb-1">
                    {item.price}
                  </span>
                  <h3 className="font-heading text-sm sm:text-lg text-[#F9FAFB] font-bold tracking-tight group-hover:text-[#B026FF] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
