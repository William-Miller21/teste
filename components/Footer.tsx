import React from 'react';
import { Logo } from './Logo';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './Icons';

const Footer: React.FC = () => {
  const phoneNumber = "5511941572655";
  const message = "Olá! Vi o site de vocês e gostaria de entrar em contato.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-[#002244] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo className="h-16 mb-4" />
            <p className="text-gray-400 text-sm mb-4">
              Soluções completas em climatização para seu conforto e bem-estar.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ded.refriar.7/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500"><FacebookIcon className="w-6 h-6" /></a>
              <a href="https://www.instagram.com/dedrefriar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500"><InstagramIcon className="w-6 h-6" /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500"><WhatsAppIcon className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços que Oferecemos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicos" className="hover:text-yellow-500">Instalação de Ar Condicionado</a></li>
              <li><a href="#servicos" className="hover:text-yellow-500">Manutenção Preventiva</a></li>
              <li><a href="#servicos" className="hover:text-yellow-500">Manutenção Corretiva</a></li>
              <li><a href="#manutencao" className="hover:text-yellow-500">Contratos e PMOC</a></li>
              <li><a href="#servicos" className="hover:text-yellow-500">Higienização Completa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Nossos Contatos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(11) 94157-2655</li>
              <li>contato@dedrefriar.com.br</li>
              <li>R. Carlos Aparecido Liberato, 50 - Mauá, SP</li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-lg mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda a Sexta: 08:00–18:00</li>
              <li>Sábado: Fechado</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#001122] py-4 text-center text-gray-500 text-sm">
        <p>© 2024 Ded Refriar Climatização. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;