import React from 'react';
import { CheckCircleIcon, WrenchIcon, BoltIcon, BuildingOfficeIcon } from './Icons';

const StatsCard: React.FC<{ number: string; text: string; }> = ({ number, text }) => (
    <div className="bg-[#003366] text-white p-4 rounded-lg text-center shadow-lg">
        <p className="text-4xl font-black text-yellow-500">{number}</p>
        <p className="font-medium text-sm">{text}</p>
    </div>
);

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyp5y40jbTpJ56zxXTLCy3xTIRNEVDs_7NyXq67EUZeoctUw5_yxBMwIJhYqGWXFFEqkswufBu92kFkhtBDGQIvIMuDmeVpg6RuyQm96a0u381dEY_Y-p4mLdasubRDKsVF4xAZ_Q=s680-w680-h510-rw" alt="Instalação de ar condicionado split em ambiente interno por técnico da Ded Refriar" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
            <div className="mt-8 grid grid-cols-3 gap-4 md:absolute md:mt-0 md:-bottom-8 md:-left-8 md:w-4/5">
              <StatsCard number="+5" text="Anos de experiência" />
              <StatsCard number="+100" text="Projetos concluídos" />
              <StatsCard number="+200" text="Clientes satisfeitos" />
            </div>
          </div>
          <div className="md:pl-10">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Especialistas em Instalação e Manutenção de Ar Condicionado</h2>
            <p className="text-gray-600 mb-6">
              Com mais de 5 anos de mercado, a Ded Refriar Climatização oferece soluções completas em climatização para residências, comércios e indústrias, garantindo conforto e bem-estar o ano todo.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" /><span>Equipe de técnicos certificados e experientes.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" /><span>Utilização de equipamentos e materiais de ponta.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" /><span>Garantia em todos os serviços.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" /><span>Atendimento rápido e personalizado.</span></li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <WrenchIcon className="w-10 h-10 mx-auto text-[#003366] mb-2"/>
                    <h3 className="font-bold">Manutenção</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <BoltIcon className="w-10 h-10 mx-auto text-[#003366] mb-2"/>
                    <h3 className="font-bold">Instalação</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <BuildingOfficeIcon className="w-10 h-10 mx-auto text-[#003366] mb-2"/>
                    <h3 className="font-bold">Venda</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;