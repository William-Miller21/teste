
import React from 'react';

// Using a text-based logo as a placeholder for the user's image logo.
// The user should replace this with their actual <img /> tag pointing to their logo file.
export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`font-black text-white ${className}`}>
    <span className="text-3xl md:text-4xl">DED REFRIAR</span>
    <span className="block text-sm md:text-base text-yellow-500 -mt-2 tracking-widest">CLIMATIZAÇÃO</span>
  </div>
);
