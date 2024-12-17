import React from 'react';
import HeroCategories from './HeroCategories';
import HeroHeading from './HeroHeading';

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroHeading />
      <HeroCategories />
    </div>
  );
}