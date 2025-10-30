import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "5511941572655";
  const message = "Olá! Gostaria de fazer um orçamento para instalação de ar condicionado.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  const imageUrl = "https://i.imgur.com/VfoKucA.png";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 w-16 h-16 rounded-full shadow-lg hover:opacity-90 transition-opacity z-50"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src={imageUrl} alt="Fale conosco pelo WhatsApp" className="w-full h-full object-cover rounded-full" />
    </a>
  );
};

export default FloatingWhatsApp;
