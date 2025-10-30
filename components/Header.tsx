import React from 'react';
import { PhoneIcon, EnvelopeIcon, FacebookIcon, InstagramIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="bg-yellow-500 h-1"></div>
      <div className="bg-[#003366] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4" />
              <span>(11) 94157-2655</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <EnvelopeIcon className="w-4 h-4" />
              <span>contato@dedrefriar.com.br</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/ded.refriar.7/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-500 transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/dedrefriar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-500 transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;