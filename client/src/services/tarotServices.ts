import { Service } from '@/types/services';

export const tarotServices: Service[] = [
  {
    id: '1',
    title: 'Leitura de 3 Cartas',
    description: 'Uma leitura rápida e direta para questões específicas',
    duration: '15-20 minutos',
    price: 50.00,
    image: '/images/tarot-3-cards.jpg',
    features: [
      'Análise de situação atual',
      'Orientação para próximos passos',
      'Insights sobre desafios',
      'Resposta direta para sua pergunta'
    ]
  },
  {
    id: '2',
    title: 'Leitura Completa',
    description: 'Uma análise profunda e abrangente da sua situação',
    duration: '30-40 minutos',
    price: 100.00,
    image: '/images/tarot-complete.jpg',
    features: [
      'Análise detalhada do passado',
      'Compreensão do presente',
      'Projeções para o futuro',
      'Orientação para decisões importantes'
    ]
  },
  {
    id: '3',
    title: 'Leitura de Relacionamento',
    description: 'Foco em questões amorosas e relacionamentos',
    duration: '25-30 minutos',
    price: 80.00,
    image: '/images/tarot-love.jpg',
    features: [
      'Análise da dinâmica do relacionamento',
      'Compreensão de sentimentos',
      'Orientação para melhorias',
      'Insights sobre compatibilidade'
    ]
  }
]; 