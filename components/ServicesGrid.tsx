import React from 'react';
import { CheckCircleIcon } from './Icons';

const services = [
  { name: 'Split Hi-wall' },
  { name: 'Multi Split' },
  { name: 'Duto' },
  { name: 'Higienização completa' },
];

const ServiceCard: React.FC<{ name: string }> = ({ name }) => (
  <div className="text-center p-4">
    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
      <CheckCircleIcon className="w-8 h-8 text-[#003366]" />
    </div>
    <h3 className="font-bold text-[#003366]">{name}</h3>
    <p className="text-xs text-gray-500 mt-1">Serviços completos de instalação e manutenção para seu equipamento.</p>
  </div>
);


const ServicesGrid: React.FC = () => {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {services.map(service => (
            <ServiceCard key={service.name} name={service.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;