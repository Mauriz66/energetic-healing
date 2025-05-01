import { Link } from "wouter";
import { ciganoServices } from "../data/services";
import { Button } from "../components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function BaralhoCigano() {
  // Função para criar link do WhatsApp
  const createWhatsAppLink = (service: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar uma consulta de ${service}.`);
    return `https://wa.me/5511999999999?text=${message}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Baralho Cigano</h1>
        <p className="text-lg text-muted-foreground">
          Consultas que revelam insights para momentos específicos ou questões pontuais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(ciganoServices).map(([key, service]) => (
          <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-gray-900">
                  R$ {service.price}
                </span>
                <span className="text-sm text-gray-500">
                  {service.duration}
                </span>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={createWhatsAppLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300 inline-block text-center"
              >
                Agendar Consulta
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