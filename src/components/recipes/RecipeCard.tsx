import React from 'react';
import { Clock, Heart, Star } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  image: string;
  time: string;
  rating: number;
  author: string;
  authorImage: string;
}

export default function RecipeCard({ 
  title, 
  image, 
  time, 
  rating, 
  author, 
  authorImage 
}: RecipeCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <img 
            src={authorImage} 
            alt={author} 
            className="w-8 h-8 rounded-full object-cover" 
          />
          <span className="text-sm text-gray-600">by {author}</span>
        </div>
        <h3 className="font-bold text-xl mb-2 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </article>
  );
}