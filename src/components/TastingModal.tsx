'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem, MENU_ITEMS } from '@/lib/menuData';
import { X, Sparkles, Maximize2, MessageSquare, Mail } from 'lucide-react';

interface TastingModalProps {
  selectedItem: MenuItem | null;
  isOpenFlightBuilder: boolean;
  onClose: () => void;
}

export const TastingModal: React.FC<TastingModalProps> = ({
  selectedItem,
  isOpenFlightBuilder,
  onClose,
}) => {
  if (!selectedItem && !isOpenFlightBuilder) return null;

  const activeItem = selectedItem || MENU_ITEMS[0];
  const isPackage = activeItem.id.startsWith('pkg-');

  // WhatsApp Pre-filled URL
  const whatsappMsg = encodeURIComponent(
    `Hi Modelix AI Studio!\n\nI would like to book the ${activeItem.name}.\nPrice: ${activeItem.price}\n\nPlease share theme customization and booking details!`
  );
  const whatsappUrl = `https://wa.me/94751670510?text=${whatsappMsg}`;

  // Email Pre-filled Mailto
  const emailSubject = encodeURIComponent(`Modelix AI Photoshoot Booking: ${activeItem.name}`);
  const emailBody = encodeURIComponent(
    `Hi Modelix AI Studio,\n\nI would like to book the ${activeItem.name}.\nPrice: ${activeItem.price}\n\nPlease send me theme customization options and delivery details.\n\nThank you!`
  );
  const mailtoUrl = `mailto:hellopixelpiestudio@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Darkened Cinema Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/92 backdrop-blur-2xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          className="relative z-10 flex items-center justify-center max-w-[95vw] max-h-[92vh]"
        >
          {isPackage || isOpenFlightBuilder ? (
            /* PACKAGE DIRECT CONTACT SELECTOR (WhatsApp vs. Email) */
            <div className="relative w-full max-w-2xl bg-[#121212] border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl text-[#F9FAFB]">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 p-2 sm:p-2.5 rounded-full bg-[#0A0A0A]/90 border border-white/20 text-[#9CA3AF] hover:text-[#FFFFFF] transition-colors shadow-2xl cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex flex-col items-center text-center py-1 sm:py-2">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-[#B026FF]/20 text-[#B026FF] mb-3 sm:mb-4 border border-[#B026FF]/30">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <span className="text-[10px] sm:text-xs font-mono text-[#B026FF] uppercase tracking-widest block mb-1 font-bold">
                  MODELIX AI STUDIO BOOKING
                </span>

                <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-[#F9FAFB] tracking-tight mb-2">
                  {activeItem.name}
                </h2>

                <p className="text-xs text-[#9CA3AF] max-w-md mb-6 sm:mb-8">
                  Choose how you would like to contact Modelix AI Studio to confirm your photoshoot theme & booking:
                </p>

                {/* 2 Big Direct Contact Choice Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                  
                  {/* WhatsApp Choice */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-4 sm:p-5 rounded-2xl border border-emerald-500/40 hover:border-emerald-500 bg-emerald-950/20 hover:bg-emerald-950/40 flex flex-col items-center text-center group transition-all cursor-pointer shadow-xl"
                  >
                    <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500 text-white mb-2 sm:mb-3 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-[#F9FAFB] tracking-wider uppercase mb-0.5 sm:mb-1">
                      WhatsApp Chat
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 font-bold">
                      Pre-filled package details
                    </span>
                  </a>

                  {/* Email Choice */}
                  <a
                    href={mailtoUrl}
                    className="glass-panel p-4 sm:p-5 rounded-2xl border border-[#B026FF]/40 hover:border-[#B026FF] bg-[#B026FF]/10 hover:bg-[#B026FF]/20 flex flex-col items-center text-center group transition-all cursor-pointer shadow-xl"
                  >
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#B026FF] text-white mb-2 sm:mb-3 shadow-lg shadow-[#B026FF]/40 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-[#F9FAFB] tracking-wider uppercase mb-0.5 sm:mb-1">
                      Send Email
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#E2B3FF] font-bold">
                      Pre-filled subject & body
                    </span>
                  </a>

                </div>
              </div>
            </div>
          ) : (
            /* PERFECTLY-FITTING IMAGE LIGHTBOX (Zero Empty Black Space, Mobile Optimized) */
            <div className="relative inline-block max-w-[94vw] max-h-[88vh] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 bg-[#0A0A0A] shadow-2xl group">
              {/* Close Button on Top-Right Corner of Image */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full bg-black/75 hover:bg-black border border-white/30 text-white transition-colors shadow-2xl cursor-pointer backdrop-blur-md"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Dynamic Image with Natural Aspect Ratio Matching */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="max-w-[94vw] max-h-[85vh] w-auto h-auto object-contain rounded-2xl sm:rounded-3xl block"
              />

              {/* Title Badge on Bottom-Left Corner of Image */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/75 text-[#F9FAFB] font-mono text-[10px] sm:text-xs border border-white/30 backdrop-blur-md shadow-xl font-bold flex items-center gap-1.5 sm:gap-2 pointer-events-none">
                <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B026FF]" /> {activeItem.name}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
