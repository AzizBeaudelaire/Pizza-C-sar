import React, { useState } from 'react';
import { PizzaCard } from './PizzaCard';

const pizzas = [
  {
    name: 'Margherita',
    description: 'Sauce tomate, mozzarella, basilic frais',
    prices: { small: 8, medium: 12, large: 14 },
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80'
  },
  {
    name: 'Regina',
    description: 'Sauce tomate, mozzarella, jambon, champignons',
    prices: { small: 10, medium: 14, large: 16 },
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80'
  },
  {
    name: 'Quatre Fromages',
    description: 'Mozzarella, gorgonzola, parmesan, chèvre',
    prices: { small: 11, medium: 15, large: 17 },
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80'
  },
  {
    name: 'Calzone',
    description: 'Pizza pliée: tomate, mozzarella, jambon, œuf',
    prices: { small: 11, medium: 15, large: 17 },
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80'
  }
];

const salads = [
  {
    name: 'César',
    description: 'Laitue romaine, parmesan, croûtons, sauce césar',
    prices: { small: 6, medium: 8, large: 10 },
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80'
  },
  {
    name: 'Caprese',
    description: 'Tomates, mozzarella, basilic, huile d\'olive',
    prices: { small: 7, medium: 9, large: 11 },
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80'
  },
  {
    name: 'Grecque',
    description: 'Concombre, tomates, olives, feta, oignons rouges',
    prices: { small: 7, medium: 9, large: 11 },
    image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&q=80'
  },
  {
    name: 'Italienne',
    description: 'Roquette, tomates séchées, parmesan, pignons',
    prices: { small: 8, medium: 10, large: 12 },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80'
  }
];

const drinks = [
  {
    name: 'Coca-Cola',
    description: '33cl',
    prices: { small: 3, medium: 3, large: 3 },
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80'
  },
  {
    name: 'Fanta',
    description: '33cl',
    prices: { small: 3, medium: 3, large: 3 },
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&q=80'
  },
  {
    name: 'Sprite',
    description: '33cl',
    prices: { small: 3, medium: 3, large: 3 },
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80'
  },
  {
    name: 'San Pellegrino',
    description: 'Eau gazeuse italienne 50cl',
    prices: { small: 3, medium: 3, large: 3 },
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80'
  },
  {
    name: 'Vins Italiens',
    description: 'Sélection de vins rouges et blancs',
    prices: { small: 5, medium: 5, large: 5 },
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80'
  }
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('pizzas');

  const categories = [
    { id: 'pizzas', name: 'Pizzas', items: pizzas },
    { id: 'salads', name: 'Salades', items: salads },
    { id: 'drinks', name: 'Boissons', items: drinks }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-8">Notre Menu</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.find(c => c.id === activeCategory)?.items.map((item) => (
            <PizzaCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}