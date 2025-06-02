
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Calendar, CreditCard, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Explora",
      description: "Filtra por categoría, día o rango de edad"
    },
    {
      icon: Calendar,
      title: "Reserva tu cupo",
      description: "Solo necesitas una cuenta y 30 segundos"
    },
    {
      icon: CreditCard,
      title: "Paga online",
      description: "Elige tarjeta, Yape o Plin; recibe tu boleta al correo"
    },
    {
      icon: Star,
      title: "Disfruta tu clase",
      description: "Te enviaremos ubicación, materiales y recordatorios"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inscríbete en 4 pasos simples
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card 
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-8 w-8 text-white" />
                    <span className="absolute -top-2 -right-2 bg-white text-tinkuy-purple font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center border-2 border-tinkuy-purple">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
