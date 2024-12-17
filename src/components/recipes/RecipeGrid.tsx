import React from 'react';
import RecipeCard from './RecipeCard';
import { useRecipes } from '../../context/RecipeContext';

export default function RecipeGrid() {
  const { filteredRecipes } = useRecipes();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600">
              No recipes found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}