import React from 'react';
import { Link } from './Link';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80"
          alt="Pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
          Bienvenue chez Pizza Cézar
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Le goût de l'Italie
        </p>
        <Link href="#menu">
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 transition">
            Voir le Menu
          </button>
        </Link>
      </div>
    </section>
  );
}