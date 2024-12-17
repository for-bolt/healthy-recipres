import React from 'react';
import { Heart } from 'lucide-react';
import RecipeCard from '../components/recipes/RecipeCard';
import { useRecipes } from '../context/RecipeContext';

export default function FavoritesPage() {
  const { recipes } = useRecipes();
  // For demo purposes, showing first 2 recipes as favorites
  const favoriteRecipes = recipes.slice(0, 2);

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="h-8 w-8 text-rose-500" />
          <h1 className="text-4xl font-bold">Your Favorites</h1>
        </div>

        {favoriteRecipes.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              No favorites yet
            </h2>
            <p className="text-gray-500">
              Start saving your favorite recipes by clicking the heart icon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}