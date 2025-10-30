
import React from 'react';
import { ClipboardDocumentCheckIcon, ClockIcon, WrenchScrewdriverIcon, DocumentTextIcon } from './Icons';

const MaintenanceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-white text-opacity-80">{description}</p>
  </div>
);

const Maintenance: React.FC = () => {
  return (
    <section id="manutencao" className="py-16 bg-green-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Contratos de Manutenção de Ar Condicionado em Mauá e Grande ABC</h2>
          <p className="text-white text-opacity-90 max-w-3xl mx-auto mt-4">Garanta o funcionamento perfeito do seu equipamento com nossos planos de manutenção. Atendemos residências, empresas e indústrias em toda a região.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <MaintenanceCard 
            icon={<ClipboardDocumentCheckIcon className="w-10 h-10 text-white" />} 
            title="Visita periódica" 
            description="Agendamento de visitas técnicas para verificação e manutenção preventiva." 
          />
          <MaintenanceCard 
            icon={<ClockIcon className="w-10 h-10 text-white" />} 
            title="Atendimento emergencial" 
            description="Suporte rápido para solucionar problemas inesperados e urgentes." 
          />
          <MaintenanceCard 
            icon={<WrenchScrewdriverIcon className="w-10 h-10 text-white" />} 
            title="Correções imediatas" 
            description="Reparos e substituição de peças com agilidade para minimizar o tempo de inatividade." 
          />
          <MaintenanceCard 
            icon={<DocumentTextIcon className="w-10 h-10 text-white" />} 
            title="PMOC" 
            description="Plano de Manutenção, Operação e Controle conforme a legislação vigente." 
          />
        </div>
      </div>
    </section>
  );
};

export default Maintenance;