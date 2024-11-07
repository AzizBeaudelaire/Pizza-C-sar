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
      <div className="p-3">
        <h3 className="text-sm font-bold mb-1">{name}</h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
        <div className="flex flex-col gap-1 text-xs">
          {prices.small !== prices.medium && (
            <>
              <div className="flex justify-between">
                <span className="text-gray-600">29cm</span>
                <span className="font-medium text-red-600">{prices.medium}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">33cm</span>
                <span className="font-medium text-red-600">{prices.large}€</span>
              </div>
            </>
          )}
          {prices.small === prices.medium && (
            <span className="font-medium text-red-600">{prices.medium}€</span>
          )}
        </div>
      </div>
    </div>
  );
}