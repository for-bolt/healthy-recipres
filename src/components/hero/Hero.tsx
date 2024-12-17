import React from 'react';
import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <HeroBackground />
      <div className="container relative mx-auto px-4 py-24">
        <HeroContent />
      </div>
    </section>
  );
}