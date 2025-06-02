import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

import logo from '/assets/logos/logo-full.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Tinkuy Logo" className="h-10 w-auto" />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#cursos"
            className="text-gray-600 hover:text-tinkuy-purple transition-colors"
          >
            Cursos
          </a>
          <a
            href="#como-funciona"
            className="text-gray-600 hover:text-tinkuy-purple transition-colors"
          >
            Cómo funciona
          </a>
          <a
            href="#preguntas"
            className="text-gray-600 hover:text-tinkuy-purple transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contacto"
            className="text-gray-600 hover:text-tinkuy-purple transition-colors"
          >
            Contacto
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-tinkuy-purple text-tinkuy-purple hover:bg-tinkuy-purple hover:text-white"
          >
            Iniciar Sesión
          </Button>
          <Button className="bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise hover:from-tinkuy-purple-dark hover:to-tinkuy-turquoise-dark text-white">
            Registrarse
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#cursos" className="text-gray-600">
              Cursos
            </a>
            <a href="#como-funciona" className="text-gray-600">
              Cómo funciona
            </a>
            <a href="#preguntas" className="text-gray-600">
              FAQ
            </a>
            <a href="#contacto" className="text-gray-600">
              Contacto
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                variant="outline"
                className="border-tinkuy-purple text-tinkuy-purple"
              >
                Iniciar Sesión
              </Button>
              <Button className="bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise text-white">
                Registrarse
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
