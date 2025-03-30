
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wellness-green/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-wellness-green">VidaSemFumo</h3>
            <p className="text-gray-600 mt-2">Ajudando você a deixar o cigarro para trás.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-wellness-green transition">
              Sobre Nós
            </a>
            <a href="#" className="text-gray-600 hover:text-wellness-green transition">
              Contato
            </a>
            <a href="#" className="text-gray-600 hover:text-wellness-green transition">
              Política de Privacidade
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> para uma vida mais saudável
          </p>
          <p className="mt-2">© {new Date().getFullYear()} VidaSemFumo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
