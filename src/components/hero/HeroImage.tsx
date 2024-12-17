import React from 'react';

export default function HeroImage() {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <img
        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
        alt="Healthy Food Preparation"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
    </div>
  );
}