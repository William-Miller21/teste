import React from 'react';
import { LocationMarkerIcon, PhoneIcon, EnvelopeIcon, WhatsAppIcon } from './Icons';

const Contact: React.FC = () => {
  const phoneNumber = "5511941572655";
  const message = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Entre em Contato</h2>
            <p className="text-gray-600 mb-8">
              Tem alguma dúvida ou precisa de um orçamento? Fale conosco! Nossa equipe está pronta para te atender.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <LocationMarkerIcon className="w-7 h-7 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Endereço</h3>
                  <p>R. Carlos Aparecido Liberato, 50 - Vila Emilio, Mauá - SP, 09320-031</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-7 h-7 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Telefone / WhatsApp</h3>
                  <p>(11) 94157-2655</p>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="w-7 h-7 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">E-mail</h3>
                  <p>contato@dedrefriar.com.br</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Solicite seu orçamento</h3>
              <p className="text-gray-600 mb-6">Clique no botão abaixo para nos enviar uma mensagem diretamente no WhatsApp.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Enviar Mensagem via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;