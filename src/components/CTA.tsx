import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-tinkuy-purple/10 via-white to-tinkuy-turquoise/10">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para aprender algo nuevo?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Crea tu cuenta gratis y reserva tu clase antes de que se llenen los
            cupos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise hover:from-tinkuy-purple-dark hover:to-tinkuy-turquoise-dark text-white px-8 py-4 text-lg group"
            >
              Crear cuenta gratis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-tinkuy-purple text-tinkuy-purple hover:bg-tinkuy-purple hover:text-white px-8 py-4 text-lg"
            >
              Explorar cursos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
