import React from 'react';
import { useRecipes } from '../../context/RecipeContext';

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Desserts'];

export default function CategoryTabs() {
  const { selectedCategory, setSelectedCategory } = useRecipes();

  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors
            ${selectedCategory === category
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}