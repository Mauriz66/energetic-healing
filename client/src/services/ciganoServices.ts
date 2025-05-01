import { Service } from '@/types/services';

export const ciganoServices: Service[] = [
  {
    id: "tiragem-basica",
    title: 'Tiragem Básica',
    description: 'Uma leitura simples e direta para suas dúvidas mais urgentes.',
    image: '/images/baralho-cigano/basico.jpg',
    price: 50,
    duration: '30 minutos',
    features: [
      '3 cartas',
      'Resposta direta',
      'Foco em uma questão específica'
    ]
  },
  {
    id: "tiragem-completa",
    title: 'Tiragem Completa',
    description: 'Uma leitura detalhada que abrange diferentes aspectos da sua vida.',
    image: '/images/baralho-cigano/completo.jpg',
    price: 80,
    duration: '45 minutos',
    features: [
      '7 cartas',
      'Análise completa',
      'Aspectos pessoais e profissionais'
    ]
  },
  {
    id: "tiragem-amor",
    title: 'Tiragem do Amor',
    description: 'Foco especial em questões amorosas e relacionamentos.',
    image: '/images/baralho-cigano/amor.jpg',
    price: 70,
    duration: '40 minutos',
    features: [
      '5 cartas',
      'Análise amorosa',
      'Perspectivas futuras'
    ]
  }
]; 