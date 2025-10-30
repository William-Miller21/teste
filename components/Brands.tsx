import React from 'react';

const brands = [
  { name: 'Samsung', logoUrl: 'https://i.imgur.com/Tp5OcuA.png' },
  { name: 'LG', logoUrl: 'https://i.imgur.com/CX1PlCw.png' },
  { name: 'Fujitsu', logoUrl: 'https://i.imgur.com/J7C62Q4.png' },
  { name: 'Gree', logoUrl: 'https://i.imgur.com/n8ddITz.png' },
  { name: 'Carrier', logoUrl: 'https://i.imgur.com/Gi0SQco.png' },
  { name: 'Midea', logoUrl: 'https://i.imgur.com/nr9hXFk.png' },
];

const Brands: React.FC = () => {
    const phoneNumber = "5511941572655";
    const message = "Olá! Vi o site de vocês e gostaria de solicitar um orçamento.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="marcas" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-gray-600 mb-4">Trabalhamos com as principais marcas do mercado</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 my-10 min-h-[48px]">
          {brands.map(brand => (
            <img key={brand.name} src={brand.logoUrl} alt={brand.name} className="h-10 md:h-12 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          ))}
        </div>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#003366] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors text-lg"
        >
          Solicite o seu Orçamento
        </a>
      </div>
    </section>
  );
};

export default Brands;