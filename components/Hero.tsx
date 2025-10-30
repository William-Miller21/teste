import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://i.imgur.com/5O6SFgO.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 pt-12 pb-52 md:pt-16 md:pb-80 relative z-10 flex flex-col justify-start items-start">
        <h1 className="sr-only">
          Instalação de Ar Condicionado em Mauá e ABC
        </h1>
        <div className="font-black text-white text-shadow-lg text-left">
            <span className="block text-4xl md:text-6xl uppercase tracking-wider">DED REFRIAR</span>
            <span className="block text-lg md:text-2xl text-yellow-500 tracking-[0.2em] uppercase">Climatização</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;