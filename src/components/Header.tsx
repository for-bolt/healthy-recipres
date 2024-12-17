import React from 'react';
import { Salad, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-green-50 py-6 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Salad className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">NutriRecipes</h1>
          </div>
          <div className="relative flex-1 max-w-md mx-8">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Latest</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">About</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}