import { Link } from "wouter";
import { ciganoServices } from "@/data/services";
import { whatsappLinks } from "@/data/whatsapp-links";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function BaralhoCigano() {
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
          <Card key={key} className="flex flex-col">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">R$ {service.price}</p>
                <p className="text-sm text-muted-foreground">{service.duration}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="w-full"
              >
                <a
                  href={whatsappLinks[key as keyof typeof whatsappLinks]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/plano-conexao">
          <Button variant="outline">
            Conheça o Plano Conexão Cigana
          </Button>
        </Link>
      </div>
    </div>
  );
} 