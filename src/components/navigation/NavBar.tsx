import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import SearchButton from './SearchButton';
import { BookOpen, Heart, BookOpen as Blog } from 'lucide-react';

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-6">
            <NavLink 
              to="/recipes" 
              icon={<BookOpen className="h-5 w-5" />} 
              label="Recipes" 
              isActive={location.pathname === '/recipes'}
            />
            <NavLink 
              to="/blog" 
              icon={<Blog className="h-5 w-5" />} 
              label="Blog" 
              isActive={location.pathname === '/blog'}
            />
            <NavLink 
              to="/favorites" 
              icon={<Heart className="h-5 w-5" />} 
              label="Favorites" 
              isActive={location.pathname === '/favorites'}
            />
            <SearchButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

function NavLink({ to, icon, label, isActive }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 transition-colors
        ${isActive ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}