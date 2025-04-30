import React from 'react';
import ServiceList from '@/components/ServiceList';
import { tarotServices } from '@/services/tarotServices';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ServiceList
        services={tarotServices}
        title="Serviços de Tarot"
        description="Descubra o poder da intuição através de nossas leituras de tarot personalizadas"
      />
    </div>
  );
};

export default Home;
