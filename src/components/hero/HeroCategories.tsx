import React from 'react';
import CategoryPill from './CategoryPill';
import { useRecipes } from '../../context/RecipeContext';

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Desserts'];

export default function HeroCategories() {
  const { selectedCategory, setSelectedCategory } = useRecipes();

  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((category) => (
        <CategoryPill 
          key={category} 
          label={category} 
          isActive={category === selectedCategory}
          onClick={() => setSelectedCategory(category)}
        />
      ))}
    </div>
  );
}