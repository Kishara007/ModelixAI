'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Sparkles, ArrowDown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  onExploreClick: () => void;
}

/* Direct Frame Cross-Dissolve Video Loop (Zero Black Dip) */
const SeamlessVideoLoop: React.FC<{ src: string }> = ({ src }) => {
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);
  const isFadingRef = useRef(false);

  useEffect(() => {
    if (v1Ref.current) {
      v1Ref.current.play().catch(() => {});
    }
  }, []);

  const handleTimeUpdate1 = () => {
    const v1 = v1Ref.current;
    const v2 = v2Ref.current;
    if (!v1 || !v2 || isFadingRef.current) return;

    if (v1.duration && v1.currentTime >= v1.duration - 1.2) {
      isFadingRef.current = true;
      v2.currentTime = 0;
      v2.style.opacity = '0';
      v2.play().catch(() => {});

      gsap.to(v2, {
        opacity: 1,
        duration: 1.0,
        ease: 'none',
        onComplete: () => {
          v1.currentTime = 0;
          v1.play().catch(() => {});
          isFadingRef.current = false;
        },
      });
    }
  };

  const handleTimeUpdate2 = () => {
    const v1 = v1Ref.current;
    const v2 = v2Ref.current;
    if (!v1 || !v2 || isFadingRef.current) return;

    if (v2.duration && v2.currentTime >= v2.duration - 1.2) {
      isFadingRef.current = true;
      v1.currentTime = 0;
      v1.play().catch(() => {});

      gsap.to(v2, {
        opacity: 0,
        duration: 1.0,
        ease: 'none',
        onComplete: () => {
          v2.pause();
          isFadingRef.current = false;
        },
      });
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0A0A0A]">
      <video
        ref={v1Ref}
        src={src}
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate1}
        className="grid-image-inner absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-85 scale-[1.6] z-10 opacity-100"
      />
      <video
        ref={v2Ref}
        src={src}
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate2}
        className="grid-image-inner absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-85 scale-[1.6] z-20 opacity-0"
      />
    </div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);
  const gridCanvasRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const middleContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !gridCanvasRef.current || !stickyWrapperRef.current) return;

      const innerImages = gsap.utils.toArray<HTMLElement>('.grid-image-inner');
      const wordItems = gsap.utils.toArray<HTMLElement>('.word-item');

      ScrollTrigger.matchMedia({
        // Mobile (< 640px)
        '(max-width: 639px)': function () {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.2,
              pin: stickyWrapperRef.current,
              pinSpacing: false,
              invalidateOnRefresh: true,
            },
          });

          tl.to(
            gridCanvasRef.current,
            {
              scale: 1.05,
              duration: 2.5,
              ease: 'power2.inOut',
            },
            0
          )
            .to(
              innerImages,
              {
                scale: 1.0,
                duration: 2.5,
                ease: 'power2.inOut',
              },
              0
            )
            .to(
              logoTextRef.current,
              {
                top: '16px',
                left: '16px',
                bottom: 'auto',
                scale: 0.32,
                transformOrigin: 'top left',
                color: '#FFFFFF',
                duration: 2.5,
                ease: 'power2.inOut',
              },
              0
            )
            .to(
              subtextRef.current,
              {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power1.out',
              },
              0
            )
            .to(
              middleContentRef.current,
              {
                opacity: 1,
                duration: 0.5,
              },
              1.3
            )
            .to(
              wordItems,
              {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 1.0,
                ease: 'power2.out',
              },
              1.3
            );
        },

        // Tablet & Desktop (>= 640px)
        '(min-width: 640px)': function () {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.2,
              pin: stickyWrapperRef.current,
              pinSpacing: false,
              invalidateOnRefresh: true,
            },
          });

          tl.to(
            gridCanvasRef.current,
            {
              scale: 1.28,
              duration: 2.5,
              ease: 'power2.inOut',
            },
            0
          )
            .to(
              innerImages,
              {
                scale: 1.0,
                duration: 2.5,
                ease: 'power2.inOut',
              },
              0
            )
            .to(
              logoTextRef.current,
              {
                top: '24px',
                left: '32px',
                bottom: 'auto',
                scale: 0.28,
                transformOrigin: 'top left',
                color: '#FFFFFF',
                duration: 2.5,
                ease: 'power2.inOut',
              },
              0
            )
            .to(
              subtextRef.current,
              {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power1.out',
              },
              0
            )
            .to(
              middleContentRef.current,
              {
                opacity: 1,
                duration: 0.5,
              },
              1.3
            )
            .to(
              wordItems,
              {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 1.0,
                ease: 'power2.out',
              },
              1.3
            );
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full h-[320vh] bg-[#0A0A0A]">
      {/* Sticky Viewport Wrapper */}
      <div
        ref={stickyWrapperRef}
        style={{ position: 'sticky', top: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}
        className="flex items-center justify-center bg-[#0A0A0A] z-10"
      >
        {/* Unified 3x3 Combined Grid Canvas */}
        <div
          ref={gridCanvasRef}
          style={{ position: 'relative', width: '100vw', height: '100vh', transformOrigin: 'center center' }}
          className="grid grid-cols-3 grid-rows-3 gap-1 sm:gap-1.5 md:gap-2 p-1 sm:p-2 z-20 bg-[#0A0A0A] scale-[3.8]"
        >
          {/* Tile 0: Top-Left */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }} className="group rounded-md sm:rounded-xl overflow-hidden bg-[#121212] transition-all duration-500 border border-white/5 hover:border-[#B026FF]/60 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185045/Changing_girl_face_realistic_cre__202608081554_kntkp4.jpg"
              alt="Modelix AI Personal Photo Memory 1"
              fill
              sizes="(max-width: 640px) 33vw, 33vw"
              className="grid-image-inner object-cover brightness-[0.68] opacity-80 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 scale-[1.6]"
            />
          </div>

          {/* Tile 1: Top-Center */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }} className="group rounded-md sm:rounded-xl overflow-hidden bg-[#121212] transition-all duration-500 border border-white/5 hover:border-[#B026FF]/60 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185029/Change_girl_face_2K_202608081555_2_c7wghs.jpg"
              alt="Modelix AI Personal Photo Memory 2"
              fill
              sizes="(max-width: 640px) 33vw, 33vw"
              className="grid-image-inner object-cover brightness-[0.68] opacity-80 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 scale-[1.6]"
            />
          </div>

          {/* Tile 2: Top-Right */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }} className="group rounded-md sm:rounded-xl overflow-hidden bg-[#121212] transition-all duration-500 border border-white/5 hover:border-[#B026FF]/60 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185033/Change_man_face_2K_202608081555_igy0oy.jpg"
              alt="Modelix AI Personal Photo Memory 3"
              fill
              sizes="(max-width: 640px) 33vw, 33vw"
              className="grid-image-inner object-cover brightness-[0.68] opacity-80 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 scale-[1.6]"
            />
          </div>

          {/* Tile 3: Middle-Left */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }} className="group rounded-md sm:rounded-xl overflow-hidden bg-[#121212] transition-all duration-500 border border-white/5 hover:border-[#B026FF]/60 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185037/Change_girl_face_2K_202608081555_1_buta99.jpg"
              alt="Modelix AI Personal Photo Memory 4"
              fill
              sizes="(max-width: 640px) 33vw, 33vw"
              className="grid-image-inner object-cover brightness-[0.68] opacity-80 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 scale-[1.6]"
            />
          </div>

          {/* Tile 4: Main Center Focus Hero */}
          <div
            ref={centerCardRef}
            style={{ position: 'relative', width: '100%', height: '100%' }}
            className="col-start-2 row-start-2 z-30 rounded-md sm:rounded-xl overflow-visible bg-[#000] shadow-2xl border-2 border-[#B026FF]/50"
          >
            <SeamlessVideoLoop src="https://res.cloudinary.com/dpx6w78bt/video/upload/q_auto,f_auto/v1786185618/Create_looping_animation_1080p_202608081555_ivg9as.mp4" />
            <div className="absolute inset-0 bg-[#0A0A0A]/40 pointer-events-none z-30" />

            <div
              ref={middleContentRef}
              className="absolute inset-0 flex flex-col items-center justify-center z-40 px-2 sm:px-4 text-center opacity-0 pointer-events-auto overflow-visible"
            >
              <div className="w-[92vw] sm:w-[85vw] md:w-[75vw] max-w-4xl px-2">
                <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F9FAFB] leading-snug sm:leading-tight tracking-tight hero-middle-3d-text drop-shadow-2xl">
                  <span className="word-item inline-block opacity-0 translate-y-3 mr-1.5 sm:mr-3">Hyper-realistic</span>
                  <span className="word-item inline-block opacity-0 translate-y-3 mr-1.5 sm:mr-3 text-[#B026FF] font-black drop-shadow-[0_0_20px_rgba(176,38,255,0.8)]">AI photoshoots</span>
                  <span className="word-item inline-block opacity-0 translate-y-3 mr-1.5 sm:mr-3">for your</span>
                  <span className="word-item inline-block opacity-0 translate-y-3">best memories.</span>
                </h2>

                <div className="word-item opacity-0 translate-y-3 mt-4 sm:mt-8 flex justify-center">
                  <button
                    onClick={onExploreClick}
                    className="px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-[#B026FF] hover:bg-[#C246FF] text-[#FFFFFF] font-heading font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl shadow-[#B026FF]/50 flex items-center gap-2 sm:gap-3 cursor-pointer border border-white/20"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFFFF]" />
                    CREATE YOUR MEMORY
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 5: Middle-Right */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }} className="group rounded-md sm:rounded-xl overflow-hidden bg-[#121212] transition-all duration-500 border border-white/5 hover:border-[#B026FF]/60 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185038/Change_girl_face_2K_202608081555_oyn5hc.jpg"
              alt="Modelix AI Personal Photo Memory 5"
              fill
              sizes="(max-width: 640px) 33vw, 33vw"
              className="grid-image-inner object-cover brightness-[0.68] opacity-80 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 scale-[1.6]"
            />
          </div>

          {/* Tile 6: Bottom-Left */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }} className="group rounded-md sm:rounded-xl overflow-hidden bg-[#121212] transition-all duration-500 border border-white/5 hover:border-[#B026FF]/60 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185047/Change_girl_face_2K_202608081554_si7mmr.jpg"
              alt="Modelix AI Personal Photo Memory 6"
              fill
              sizes="(max-width: 640px) 33vw, 33vw"
              className="grid-image-inner object-cover brightness-[0.68] opacity-80 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 scale-[1.6]"
            />
          </div>

          {/* Tile 7: Bottom-Center */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }} className="group rounded-md sm:rounded-xl overflow-hidden bg-[#121212] transition-all duration-500 border border-white/5 hover:border-[#B026FF]/60 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185048/Change_girl_face_2K_202608081555_3_zfqef4.jpg"
              alt="Modelix AI Personal Photo Memory 7"
              fill
              sizes="(max-width: 640px) 33vw, 33vw"
              className="grid-image-inner object-cover brightness-[0.68] opacity-80 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 scale-[1.6]"
            />
          </div>

          {/* Tile 8: Bottom-Right */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }} className="group rounded-md sm:rounded-xl overflow-hidden bg-[#121212] transition-all duration-500 border border-white/5 hover:border-[#B026FF]/60 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185052/Changing_man_face_2K_202608081555_doypey.jpg"
              alt="Modelix AI Personal Photo Memory 8"
              fill
              sizes="(max-width: 640px) 33vw, 33vw"
              className="grid-image-inner object-cover brightness-[0.68] opacity-80 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 scale-[1.6]"
            />
          </div>
        </div>

        {/* Brand Name "MODELIX AI" — Exact Previous Text-Only Design */}
        <h1
          ref={logoTextRef}
          className="fixed bottom-4 left-4 sm:bottom-8 sm:left-10 z-50 font-heading text-5xl sm:text-7xl md:text-9xl font-extrabold text-[#FFFFFF] tracking-tight uppercase pointer-events-none select-none logo-white-purple-glow origin-left text-left whitespace-nowrap leading-none"
        >
          MODELIX AI
        </h1>

        {/* Scroll Badge Widget — Shows ARROW ONLY on Mobile & Tablet (<1024px) */}
        <div
          ref={subtextRef}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center gap-2 sm:gap-3.5 pointer-events-auto"
        >
          {/* Studio Text Pill (Hidden on Mobile & Tablet <1024px, Visible on Desktop lg+) */}
          <div className="hidden lg:flex flex-col text-right select-none glass-panel px-5 py-3 rounded-full border border-white/20 backdrop-blur-xl">
            <span className="font-heading font-extrabold text-sm text-[#F9FAFB] uppercase tracking-wider">
              MODELIX AI STUDIO
            </span>
            <span className="font-mono text-[10px] text-[#E2B3FF] font-extrabold uppercase tracking-widest">
              Personal AI Memories
            </span>
          </div>

          {/* Bouncing Arrow Button */}
          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 1.5,
                behavior: 'smooth',
              });
            }}
            aria-label="Scroll to explore"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#B026FF] hover:bg-[#C246FF] text-white shadow-xl shadow-[#B026FF]/50 transition-all transform hover:scale-110 cursor-pointer overflow-hidden shrink-0 border border-white/20"
          >
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-40 pointer-events-none" />
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-bounce relative z-10 font-bold" />
          </button>
        </div>

      </div>
    </div>
  );
};
