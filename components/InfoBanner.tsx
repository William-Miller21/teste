import React from 'react';

const InfoBanner: React.FC = () => {
  const phoneNumber = "5511941572655";
  const message = "Olá! Vi o site de vocês e gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-[#002244] text-white pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center -mt-8 relative z-10">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-yellow-500 text-[#003366] font-bold py-4 px-8 rounded-lg hover:bg-yellow-600 transition-colors text-lg shadow-lg inline-block"
            >
              Solicite um Orçamento
            </a>
        </div>
        
        <div className="text-center pt-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Atendimento em São Paulo e Região
            </h2>
            <p className="text-yellow-500 font-semibold text-lg md:text-xl mt-2">
              Qualidade e Garantia que você pode confiar
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-gray-300">
              Equipe com técnicos certificados, equipamentos de ponta e com garantia na instalação.
            </p>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;