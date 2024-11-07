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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition group">
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-2">
            <span className="font-medium text-red-600">{prices.medium}€</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Ø 30cm</span>
          </div>
        </div>
      </div>
    </div>
  );
}