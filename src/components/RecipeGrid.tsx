import React from 'react';
import RecipeCard from './RecipeCard';

const recipes = [
  {
    title: "Green Goddess Salad",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
    time: "15 mins",
    category: "Salads",
    description: "A refreshing mix of crisp vegetables, avocado, and herbs with a creamy tahini dressing."
  },
  {
    title: "Protein Power Bowl",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80",
    time: "20 mins",
    category: "Bowls",
    description: "Quinoa, grilled chicken, roasted sweet potatoes, and fresh vegetables."
  },
  {
    title: "Berry Breakfast Smoothie",
    image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?auto=format&fit=crop&q=80",
    time: "5 mins",
    category: "Beverages",
    description: "Mixed berries, banana, yogurt, and honey blended to perfection."
  },
  {
    title: "Baked Salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80",
    time: "25 mins",
    category: "Mains",
    description: "Herb-crusted salmon with roasted vegetables and quinoa."
  },
  {
    title: "Overnight Oats",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80",
    time: "8 hrs",
    category: "Breakfast",
    description: "Protein-packed overnight oats with chia seeds and fresh fruits."
  },
  {
    title: "Buddha Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    time: "30 mins",
    category: "Bowls",
    description: "A nourishing bowl of grains, vegetables, and plant-based protein."
  }
];

export default function RecipeGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Latest Healthy Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
}