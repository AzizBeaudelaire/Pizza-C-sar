import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-red-600" />
              <p>123 Rue de la Pizza, 75001 Paris</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-red-600" />
              <p>01 23 45 67 89</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-red-600" />
              <p>contact@pizzacezar.fr</p>
            </div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874587123!5m2!1sfr!2sfr"
              className="w-full h-64 rounded-lg"
              loading="lazy"
            />
          </div>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nom"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}