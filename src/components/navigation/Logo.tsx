import React from 'react';
import { Leaf } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Leaf className="h-6 w-6 text-emerald-500" />
      <span className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
        Fresh Bites
      </span>
    </div>
  );
}