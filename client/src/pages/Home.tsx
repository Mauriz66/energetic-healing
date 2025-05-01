import React from 'react';
import { Link } from 'wouter';
import { services } from '../data/services';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Terapias Oraculares e Energéticas
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Encontre clareza, direção e bem-estar através de consultas oraculares e terapias energéticas personalizadas.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nossos Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">
                    A partir de R${service.price}
                  </span>
                  <Link href={service.path}>
                    <a className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                      Saiba mais
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
