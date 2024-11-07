import React from 'react';
import { Pizza, MapPin } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pizza className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-serif font-bold text-red-600">Pizza Cézar</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home">Accueil</Link>
            <Link href="#menu">Menu</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          
          <Link href="#contact">
            <button className="flex items-center gap-2 text-red-600 hover:text-red-700 transition">
              <MapPin className="h-5 w-5" />
              <span>Nous trouver</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}