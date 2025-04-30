// Services data for homepage and other sections
export const services = [
  {
    title: "Baralho Cigano",
    description: "Consultas que revelam insights para momentos específicos ou questões pontuais",
    price: 107,
    image: "/images/baralho-cigano-card.jpg",
    path: "/baralho-cigano"
  },
  {
    title: "Leituras de Ciclos",
    description: "Análise profunda dos períodos mensais ou anuais para melhor planejamento",
    price: 107,
    image: "/images/leituras-card.jpg",
    path: "/leituras"
  },
  {
    title: "Terapias Energéticas",
    description: "Tratamentos que equilibram energias e promovem bem-estar interior",
    price: 250,
    image: "/images/terapias-card.jpg",
    path: "/terapias"
  }
];

// Services details for individual pages
export const ciganoServices = {
  perguntaAvulsa: {
    title: "Pergunta Específica",
    price: 15,
    duration: "15-20 minutos",
    description: "Consulta rápida para uma questão pontual com o baralho cigano",
    features: [
      "1 pergunta específica",
      "Resposta detalhada",
      "Orientação prática"
    ],
    image: "/images/baralho-cigano-avulso.jpg"
  },
  jogo5Cartas: {
    title: "Jogo de 5 Cartas",
    price: 107,
    duration: "40-50 minutos",
    description: "Leitura intermediária para análise de situação ou período",
    features: [
      "Visão geral da situação",
      "Análise de influências",
      "Orientações práticas",
      "Gravação em áudio"
    ],
    image: "/images/baralho-cigano-5-cartas.jpg"
  },
  jogoCompleto: {
    title: "Jogo Completo",
    price: 170,
    duration: "60-70 minutos",
    description: "Leitura aprofundada com o baralho cigano para múltiplos aspectos",
    features: [
      "Análise completa da situação",
      "Múltiplos aspectos da vida",
      "Orientações detalhadas",
      "Gravação em áudio",
      "Foto das cartas"
    ],
    image: "/images/baralho-cigano-completo.jpg"
  }
};

export const leituraServices = {
  leituraMensal: {
    title: "Leitura Mensal",
    price: 107,
    discountPrice: 96.30,
    duration: "40 minutos",
    description: "Panorama completo das energias e tendências para os próximos 30 dias.",
    features: [
      "Análise geral do mês",
      "Aspectos profissionais",
      "Situação financeira",
      "Área emocional",
      "Relacionamentos amorosos",
      "Conselho especial"
    ]
  },
  leituraAniversario: {
    title: "Leitura de Aniversário",
    price: 170,
    discountPrice: 153,
    duration: "1:20 horas",
    description: "Mapeamento completo do seu novo ciclo anual, com análise dos 12 meses.",
    features: [
      "Análise completa do novo ciclo",
      "Tendências para os 12 meses",
      "Aspectos profissionais e financeiros",
      "Relacionamentos e vida social",
      "Saúde e bem-estar",
      "Crescimento pessoal e espiritual",
      "Desafios e oportunidades",
      "Conselho para o novo ciclo"
    ]
  }
};

export const terapiaServices = {
  thetahealing: {
    title: "Thetahealing",
    price: 350,
    discountPrice: 315,
    duration: "1:30 horas",
    description: "Terapia para reprogramação de crenças limitantes e liberação de bloqueios emocionais.",
    features: [
      "Identificação de crenças limitantes",
      "Reprogramação de padrões negativos",
      "Cura energética em nível profundo",
      "Liberação de bloqueios emocionais",
      "Conexão com sua essência espiritual",
      "Transformação de traumas e memórias"
    ]
  },
  reiki: {
    title: "Reiki",
    price: 250,
    discountPrice: 225,
    duration: "1:30 horas",
    description: "Terapia energética para harmonização, equilíbrio e bem-estar.",
    features: [
      "Equilíbrio dos chakras",
      "Harmonização energética",
      "Relaxamento profundo",
      "Redução do estresse e ansiedade",
      "Aumento da vitalidade",
      "Suporte ao bem-estar físico e emocional"
    ]
  }
};
