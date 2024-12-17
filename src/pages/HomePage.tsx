import React from 'react';
import Hero from '../components/hero/Hero';
import RecipeGrid from '../components/recipes/RecipeGrid';
import Newsletter from '../components/newsletter/Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RecipeGrid />
      <Newsletter />
    </main>
  );
}