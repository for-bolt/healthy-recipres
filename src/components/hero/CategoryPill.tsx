import React from 'react';

interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function CategoryPill({ label, isActive = false, onClick }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all
        ${isActive 
          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600' 
          : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'}`}
    >
      {label}
    </button>
  );
}