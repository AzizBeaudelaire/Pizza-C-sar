import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Nous Trouver</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Adresse</h3>
                <p className="text-gray-600">123 Rue de la Pizza, 75001 Paris</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Téléphone</h3>
                <p className="text-gray-600">01 23 45 67 89</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Horaires</h3>
                <p className="text-gray-600">Mardi - Dimanche</p>
                <p className="text-gray-600">11h30 - 14h30 | 18h30 - 22h30</p>
                <p className="text-gray-600">Fermé le Lundi</p>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874587123!5m2!1sfr!2sfr"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}