import React from 'react';

const Projects: React.FC = () => {
  const images = [
    { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxHTzeEIghbQ1MDTbIPkGaq9mBOZKEmdTdmHypFSNIB0ZLrDzBqRD3XgJLQVrtA13BbYcQMSGLapwJdzQJ-WvjIJEw0hBf5Zp_vlSyTJ_1hfYzsGnABh5Ow5ZASrnywj1me2jx4=s680-w680-h510-rw", alt: "Projeto de instalação de ar condicionado em residência no ABC" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyI8v4RRIX_puOyrPNPyXL0x9xN9MvumO32IbIKVbUGaG1lUCppVszMa8y5ny62Hhv9rsA1xEyMaDz0CgH2e_J9xOhKg0ArkD77oQx5TjHiowASDy4tqw-NdRZUpzCj-WUFpg7g=s680-w680-h510-rw", alt: "Manutenção de sistema de ar condicionado comercial em Mauá" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyEaXERbFvT9oWyO1-nMgPrm7M4pAfsiABaXMqEw5UQ2HOYolxCxcNs7UR6co-ZNOJuTJmwvJ12mnh08iqrr2E4LqRKW8xE9q4dMR-ArM2Q-O-oEvTfbeBxLUjY0dHsz0JR_1UK=s680-w680-h510-rw", alt: "Instalação de Multi Split em apartamento em São Paulo" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyMkGRtJRJOLkuTW7MvMkMhX8QZu-rI0yfYIpfbVcdwiFK8PG3EkljmrhAVYdxavIixj_Na5Pewi7xP0nHWzpI7h4OOD0GJdNT39WuDAcNmKQmUyX9--7cZzpgOxScMq1DHWpsTyA=s680-w680-h510-rw", alt: "Climatização de ambiente industrial no Grande ABC" },
  ];

  const phoneNumber = "5511941572655";
  const message = "Olá! Vi os projetos no site e gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="projetos" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#003366] mb-2">VEJA ALGUNS DE NOSSOS</h2>
        <p className="text-xl font-bold text-gray-500 mb-8">PROJETOS</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
        <a 
          href={whatsappUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-[#003366] font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors text-lg"
        >
          QUERO UM ORÇAMENTO
        </a>
      </div>
    </section>
  );
};

export default Projects;