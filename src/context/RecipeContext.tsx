import React, { createContext, useContext, useState, useCallback } from 'react';
import { recipes as initialRecipes } from '../data/recipes';

interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  rating: number;
  author: string;
  authorImage: string;
  category: string;
  description: string;
}

interface RecipeContextType {
  recipes: Recipe[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredRecipes: Recipe[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: React.ReactNode }) {
  const [recipes] = useState<Recipe[]>(initialRecipes);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <RecipeContext.Provider value={{
      recipes,
      selectedCategory,
      setSelectedCategory,
      filteredRecipes,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
}