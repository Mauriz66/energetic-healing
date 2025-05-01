import { Link } from "wouter";
import { leituraServices } from "../data/services";

export default function Leituras() {
  // Função para criar link do WhatsApp
  const createWhatsAppLink = (service: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar uma ${service}.`);
    return `https://wa.me/5511999999999?text=${message}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Leituras de Ciclos</h1>
        <p className="text-lg text-gray-600">
          Análises profundas dos seus ciclos de vida para melhor planejamento e autoconhecimento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Object.entries(leituraServices).map(([key, service]) => (
          <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                {service.discountPrice && (
                  <span className="bg-yellow-400 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                    10% OFF
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="flex items-center mb-4">
                {service.discountPrice ? (
                  <div className="flex items-baseline">
                    <span className="text-gray-400 line-through mr-2">R${service.price}</span>
                    <span className="text-2xl font-bold text-purple-600">R${service.discountPrice}</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-purple-600">R${service.price}</span>
                )}
                <span className="ml-auto text-sm text-gray-500">{service.duration}</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Inclui:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={createWhatsAppLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 text-white text-center py-3 rounded-md hover:bg-purple-700 transition-colors"
              >
                Agendar Leitura
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/">
          <a className="inline-block border border-purple-600 text-purple-600 px-6 py-2 rounded-md hover:bg-purple-50 transition-colors">
            Voltar para Início
          </a>
        </Link>
      </div>
    </div>
  );
} 