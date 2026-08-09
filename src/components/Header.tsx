'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenFlightBuilder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenFlightBuilder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    if (!audioCtx) {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, ctx.currentTime);
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.012, ctx.currentTime);
      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      whiteNoise.start();
      setAudioCtx(ctx);
      setIsPlayingAudio(true);
    } else {
      if (audioCtx.state === 'running') {
        audioCtx.suspend();
        setIsPlayingAudio(false);
      } else {
        audioCtx.resume();
        setIsPlayingAudio(true);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-white/90 backdrop-blur-md border-b border-[#111111]/10 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Monogram */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full border border-[#111111] flex items-center justify-center bg-[#111111] text-white">
            <span className="font-serif text-sm font-bold">S</span>
          </div>
          <span className="font-serif text-lg tracking-widest text-[#111111] font-medium">SOLSTICE</span>
        </a>

        {/* Minimal Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-[#666666] font-medium">
          <a href="#philosophy" className="hover:text-[#111111] transition-colors py-1 relative group">
            Philosophy
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#111111] transition-all group-hover:w-full" />
          </a>
          <a href="#offerings" className="hover:text-[#111111] transition-colors py-1 relative group">
            Selection
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#111111] transition-all group-hover:w-full" />
          </a>
          <a href="#footer" className="hover:text-[#111111] transition-colors py-1 relative group">
            Atelier
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#111111] transition-all group-hover:w-full" />
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleAudio}
            className="p-2 rounded-full border border-[#111111]/20 text-[#666666] hover:text-[#111111] transition-colors text-xs flex items-center gap-1.5"
          >
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5 text-[#8C6D46]" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          <button onClick={onOpenFlightBuilder} className="btn-primary text-xs !py-2 !px-4">
            <Sparkles className="w-3.5 h-3.5" />
            Flight
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#111111] p-2"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-[#111111]/10"
          >
            <div className="flex flex-col p-6 space-y-4 text-sm font-serif text-[#111111]">
              <a href="#philosophy" onClick={() => setMobileMenuOpen(false)}>Philosophy</a>
              <a href="#offerings" onClick={() => setMobileMenuOpen(false)}>Selection</a>
              <a href="#footer" onClick={() => setMobileMenuOpen(false)}>Atelier</a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFlightBuilder();
                }}
                className="btn-primary w-full justify-center text-xs mt-4"
              >
                Build Flight
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
