import React from 'react';

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80"
          alt="Healthy Food Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
    </>
  );
}