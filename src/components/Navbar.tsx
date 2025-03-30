
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { CigaretteOff } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CigaretteOff className="h-6 w-6 text-wellness-green" />
          <span className="text-xl font-bold text-wellness-green">VidaSemFumo</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-wellness-green font-medium" : "text-gray-600 hover:text-wellness-green transition"
            }
          >
            Início
          </NavLink>
          <NavLink 
            to="/dicas" 
            className={({ isActive }) => 
              isActive ? "text-wellness-green font-medium" : "text-gray-600 hover:text-wellness-green transition"
            }
          >
            Dicas
          </NavLink>
          <NavLink 
            to="/habitos" 
            className={({ isActive }) => 
              isActive ? "text-wellness-green font-medium" : "text-gray-600 hover:text-wellness-green transition"
            }
          >
            Hábitos
          </NavLink>
          <NavLink 
            to="/receitas" 
            className={({ isActive }) => 
              isActive ? "text-wellness-green font-medium" : "text-gray-600 hover:text-wellness-green transition"
            }
          >
            Receitas
          </NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button className="bg-wellness-green hover:bg-wellness-green/90">
            Comece Hoje
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
