'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { OfferingsGrid } from '@/components/OfferingsGrid';
import { PackagesSection } from '@/components/PackagesSection';
import { TastingModal } from '@/components/TastingModal';
import { Footer } from '@/components/Footer';
import { MenuItem } from '@/lib/menuData';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isOpenFlightBuilder, setIsOpenFlightBuilder] = useState<boolean>(false);

  const handleOpenFlightCustomizer = () => {
    setSelectedItem(null);
    setIsOpenFlightBuilder(true);
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setIsOpenFlightBuilder(false);
  };

  const handleSelectPackage = (packageName: string, price: string) => {
    // Open the photoshoot inquiry drawer pre-filled with selected package info
    setSelectedItem({
      id: `pkg-${packageName.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${packageName} Package (${price})`,
      category: 'birthdays',
      price: price,
      notes: ['24h Delivery', '8K Resolution', 'Custom Theme'],
      origin: 'Modelix AI Studio',
      description: `Includes photoshoot theme customization, 24-hour delivery, and 8K ultra-HD quality for ${packageName} (${price}).`,
      image: 'https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786185045/Changing_girl_face_realistic_cre__202608081554_kntkp4.jpg',
    });
    setIsOpenFlightBuilder(false);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsOpenFlightBuilder(false);
  };

  const handleExploreClick = () => {
    const offeringsSection = document.getElementById('offerings');
    if (offeringsSection) {
      offeringsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-[#F9FAFB] selection:bg-[#B026FF] selection:text-[#FFFFFF] overflow-x-hidden">
      {/* [Section 1: The Immersive Zoom-Out Hero] */}
      <HeroSection onExploreClick={handleExploreClick} />

      {/* [Section 2: The Manifesto] */}
      <PhilosophySection />

      {/* [Section 3: The 3-Row Motion Gallery] */}
      <OfferingsGrid
        onSelectItem={handleSelectItem}
        onOpenCustomFlight={handleOpenFlightCustomizer}
      />

      {/* [Section 4: Packages & Pricing] */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* [Section 5: The Footer] */}
      <Footer />

      {/* Interactive Lightbox & Booking Drawer Modal */}
      <TastingModal
        selectedItem={selectedItem}
        isOpenFlightBuilder={isOpenFlightBuilder}
        onClose={handleCloseModal}
      />
    </main>
  );
}
