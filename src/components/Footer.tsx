import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold mb-2">Pizza Cézar</h3>
            <p className="text-gray-400">Le goût de l'Italie depuis 1990</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-500 transition">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Pizza Cézar. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition">Mentions légales</a>
            {' • '}
            <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
}