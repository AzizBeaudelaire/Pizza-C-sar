import React from 'react';

const testimonials = [
  { name: 'Sophie L.', text: 'Meilleure pizza de la ville !' },
  { name: 'Marc D.', text: 'Un goût authentiquement italien.' },
  { name: 'Julie M.', text: 'Service impeccable et pizzas délicieuses.' }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Avis Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow text-center">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-medium text-red-600">– {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}