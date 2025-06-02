import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    containScroll: 'trimSnaps',
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);

    // Configurar el autoplay
    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // Volver al inicio si estamos al final
      }
    }, 5000); // 5 segundos entre cada slide

    return () => {
      clearInterval(autoplayInterval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const testimonials = [
    {
      name: 'Ana G.',
      role: 'Madre de familia',
      content:
        'Nunca había sido tan fácil inscribir a mis hijos en natación; pagué con Yape y me llegó la boleta al toque.',
      rating: 5,
    },
    {
      name: 'Sensei Luis C.',
      role: 'Instructor de Karate',
      content:
        'Publicar mis talleres de Karate es cuestión de minutos; veo quién pagó y quién no, todo en mi panel.',
      rating: 5,
    },
    {
      name: 'María R.',
      role: 'Estudiante de arte',
      content:
        'Los recordatorios automáticos me salvaron varias veces. Ya no me pierdo ninguna clase de acuarela.',
      rating: 5,
    },
    {
      name: 'Carlos P.',
      role: 'Participante de yoga',
      content:
        'La flexibilidad de horarios y la facilidad para cambiar clases cuando lo necesito es genial. ¡El soporte responde super rápido!',
      rating: 5,
    },
    {
      name: 'Diana M.',
      role: 'Instructora de baile',
      content:
        'Como instructora, puedo concentrarme en enseñar mientras la plataforma maneja los pagos y la comunicación con los alumnos.',
      rating: 5,
    },
    {
      name: 'Jorge V.',
      role: 'Padre de familia',
      content:
        'Mis tres hijos toman diferentes talleres y la app me ayuda a organizar sus horarios. Los recordatorios son muy útiles.',
      rating: 5,
    },
    {
      name: 'Patricia L.',
      role: 'Estudiante de música',
      content:
        'La plataforma me permitió descubrir talleres que ni sabía que existían en mi distrito. Ahora tomo clases de ukelele y me encanta.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de nuestra comunidad
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  className="flex-[0_0_calc(100%-2rem)] min-w-0 px-3 sm:flex-[0_0_calc(50%-2rem)] lg:flex-[0_0_calc(33.333%-2rem)]"
                  key={index}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>

                      <p className="text-gray-700 mb-4 italic">
                        "{testimonial.content}"
                      </p>

                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-100 rounded-full"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-100 rounded-full"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
