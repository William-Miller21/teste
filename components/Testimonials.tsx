
import React from 'react';
import { StarIcon, GoogleIcon } from './Icons';

const TestimonialCard: React.FC<{ name: string; review: string; time: string; }> = ({ name, review, time }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col h-full">
    <div className="flex items-center mb-2">
      <img src={`https://i.pravatar.cc/48?u=${name.replace(/\s/g, '')}`} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-bold text-[#003366]">{name}</h4>
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-500" />)}
            <span className="text-gray-500 text-sm ml-2">{time}</span>
        </div>
      </div>
    </div>
    <p className="text-gray-600 italic flex-grow mb-4">"{review}"</p>
    <div className="flex items-center text-sm text-gray-500 mt-auto">
       <GoogleIcon className="h-5 w-5 mr-2" />
       <span>Postado no Google</span>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Vanda Santos",
    review: "Contratei o serviço para limpeza e manutenção. Equipe pontual, educada e serviço de ótima qualidade.",
    time: "1 semana atrás"
  },
  {
    name: "Carlos Augusto Marques",
    review: "Trabalho rápido e seguro, ótima empresa. Recomendo.",
    time: "3 semanas atrás"
  },
  {
    name: "Mariana Lima",
    review: "Excelente atendimento desde o primeiro contato. A instalação foi rápida, limpa e o ar condicionado está funcionando perfeitamente.",
    time: "1 mês atrás"
  },
  {
    name: "Ricardo Alves",
    review: "Serviço impecável! Resolveram um problema complexo no meu ar condicionado que outra empresa não conseguiu. Muito profissionais.",
    time: "1 mês atrás"
  },
  {
    name: "Fernanda Costa",
    review: "Fizeram a instalação do ar condicionado no meu apartamento. Deixaram tudo limpo e organizado. O aparelho está gelando muito bem.",
    time: "2 meses atrás"
  },
  {
    name: "Júlio César",
    review: "Preço justo e serviço de primeira. Recomendo a Ded Refriar para todos que precisam de manutenção de confiança.",
    time: "3 meses atrás"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003366]">O QUE NOSSOS CLIENTES DIZEM</h2>
          <p className="text-xl text-gray-600 mt-2">Avaliações reais de clientes satisfeitos no Google.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              review={testimonial.review}
              time={testimonial.time}
            />
          ))}
        </div>
        <div className="text-center mt-12">
            <a 
                href="https://www.google.com/maps/search/?api=1&query=Ded+Refriar+Climatização+Mauá+SP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#003366] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors text-lg"
            >
                Ver todas as avaliações no Google
                <GoogleIcon className="w-5 h-5 ml-3" fill="white" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
