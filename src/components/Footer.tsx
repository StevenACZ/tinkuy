import { Facebook, Instagram, X, Mail, Phone, MapPin } from 'lucide-react';

import logo from '/assets/logos/logo-full.png';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Tinkuy Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plataforma de inscripción a cursos municipales. Facilitamos el
              acceso a la educación y el desarrollo personal en tu comunidad.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <X className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#cursos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Precios y pagos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Convocatoria de instructores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#preguntas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de reembolsos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-tinkuy-turquoise" />
                <span className="text-gray-400">
                  Av. Larco 123, Miraflores, Lima
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-tinkuy-turquoise" />
                <a
                  href="mailto:contacto@tinkuy.pe"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contacto@tinkuy.pe
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-tinkuy-turquoise" />
                <span className="text-gray-400">(01) 234-5678</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tinkuy — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
