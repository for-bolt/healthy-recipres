import React from 'react';
import { useRecipes } from '../context/RecipeContext';
import CategoryTabs from '../components/recipes/CategoryTabs';
import RecipeGrid from '../components/recipes/RecipeGrid';

export default function RecipesPage() {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">All Recipes</h1>
        <CategoryTabs />
        <RecipeGrid />
      </div>
    </main>
  );
}