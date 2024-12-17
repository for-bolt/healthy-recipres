import React from 'react';
import { Clock, Users } from 'lucide-react';

export default function FeaturedRecipe() {
  return (
    <div className="relative h-[500px] bg-cover bg-center" 
         style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80")' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-end pb-16">
          <div className="text-white max-w-2xl">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Featured Recipe</span>
            <h2 className="text-4xl font-bold mt-4 mb-3">Mediterranean Quinoa Bowl</h2>
            <p className="text-gray-200 mb-6">A vibrant, nutrient-rich bowl featuring quinoa, roasted vegetables, chickpeas, and a zesty lemon tahini dressing.</p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>25 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>4 servings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}