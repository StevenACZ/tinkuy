import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const scrollToCatalog = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const catalogSection = document.getElementById('courses-catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const howItWorksSection = document.getElementById('como-funciona');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const background = document.querySelector(
        '.hero-background'
      ) as HTMLElement;
      if (background) {
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="min-h-[90vh] flex items-center relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="hero-background absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: `url('/assets/images/course-hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-up">
            <div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mx-auto animate-pulse-subtle"
              role="status"
            >
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-ping-subtle" />
              <span className="text-white/90 text-sm font-medium">
                Inscripciones abiertas 2025
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Reserva los mejores{' '}
              <span className="bg-gradient-to-r from-white via-tinkuy-turquoise to-tinkuy-purple bg-clip-text text-transparent animate-gradient">
                cursos municipales
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl opacity-90">
                sin colas, sin papeleo.
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Inscríbete en un par de clics: deporte, arte y desarrollo personal
              para todas las edades.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={scrollToCatalog}
                className={cn(
                  'bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise',
                  'hover:from-tinkuy-purple-dark hover:to-tinkuy-turquoise-dark',
                  'text-white px-8 py-6 text-lg group shadow-lg',
                  'transition-all duration-300 ease-out hover:scale-105',
                  'rounded-xl'
                )}
                aria-label="Explorar cursos presenciales disponibles"
              >
                Explorar cursos presenciales
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToHowItWorks}
                aria-label="Ver cómo funciona la plataforma"
                className={cn(
                  'border-white/30 text-white bg-white/10',
                  'hover:bg-white/20 backdrop-blur-sm',
                  'px-8 py-6 text-lg group',
                  'transition-all duration-300 hover:scale-105'
                )}
              >
                ¿Cómo funciona?
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Button>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/90 backdrop-blur-sm bg-white/5 p-4 rounded-xl max-w-fit mx-auto"
              role="complementary"
              aria-label="Estadísticas de cursos"
            >
              <div
                className="flex text-yellow-400 gap-1"
                aria-label="Calificación de 5 estrellas"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current animate-pulse-subtle"
                    style={{ animationDelay: `${i * 400}ms` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-center sm:text-left">
                <strong>+50 talleres activos</strong> cada temporada
                <br className="sm:hidden" />
                <span className="text-tinkuy-turquoise">
                  {' '}
                  validados por la municipalidad
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
