
import React from 'react';
import { BoltIcon, WrenchIcon, BuildingOfficeIcon } from './Icons';

const ProcessCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-[#003366] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="processo" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003366]">Atendimento Completo em Instalação de Ar Condicionado</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ProcessCard 
            icon={<BoltIcon className="w-8 h-8 text-[#003366]" />} 
            title="Instalação" 
            description="Realizamos instalações de acordo com as normas técnicas, garantindo o melhor desempenho e vida útil do seu aparelho." 
          />
          <ProcessCard 
            icon={<WrenchIcon className="w-8 h-8 text-[#003366]" />} 
            title="Manutenção" 
            description="Manutenção preventiva e corretiva para garantir a qualidade do ar e a eficiência energética do seu ar condicionado." 
          />
          <ProcessCard 
            icon={<BuildingOfficeIcon className="w-8 h-8 text-[#003366]" />} 
            title="Indústrias e grandes prédios" 
            description="Soluções personalizadas para climatização de grandes ambientes, comércios, indústrias e edifícios comerciais." 
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
