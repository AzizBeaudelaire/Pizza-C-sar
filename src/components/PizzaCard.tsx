import React from 'react';

interface PizzaCardProps {
  name: string;
  description: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  };
  image: string;
}

export function PizzaCard({ name, description, prices, image }: PizzaCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <p className="text-sm">Petite: {prices.small}€</p>
          <p className="text-sm">Moyenne: {prices.medium}€</p>
          <p className="text-sm">Grande: {prices.large}€</p>
        </div>
      </div>
    </div>
  );
}