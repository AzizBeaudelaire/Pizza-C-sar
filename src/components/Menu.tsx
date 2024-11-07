import React from 'react';
import { PizzaCard } from './PizzaCard';

const pizzas = [
  {
    name: 'Margherita',
    description: 'Sauce tomate, mozzarella, basilic frais',
    prices: { small: 8, medium: 10, large: 12 },
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80'
  },
  {
    name: 'Regina',
    description: 'Sauce tomate, mozzarella, jambon, champignons',
    prices: { small: 10, medium: 12, large: 14 },
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80'
  },
  {
    name: 'Quatre Fromages',
    description: 'Mozzarella, gorgonzola, parmesan, chèvre',
    prices: { small: 11, medium: 13, large: 15 },
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80'
  },
  {
    name: 'Calzone',
    description: 'Pizza pliée: tomate, mozzarella, jambon, œuf',
    prices: { small: 11, medium: 13, large: 15 },
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80'
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Notre Menu</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.name} {...pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}