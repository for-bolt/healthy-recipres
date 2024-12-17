import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative max-w-md w-full">
      <input
        type="text"
        placeholder="Find healthy recipes..."
        className="w-full pl-12 pr-4 py-3 rounded-xl border-0 bg-gray-100/80 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  );
}