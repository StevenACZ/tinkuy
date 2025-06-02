
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, CreditCard, Bell, Calendar, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Cero filas, cero papeles",
      description: "Reserva desde tu celu o laptop"
    },
    {
      icon: CreditCard,
      title: "Pagos seguros",
      description: "Procesamos con Stripe/Yape/Plin y emitimos boleta al instante"
    },
    {
      icon: Bell,
      title: "Recordatorios inteligentes",
      description: "Correo y notificaciones antes de cada sesión"
    },
    {
      icon: Calendar,
      title: "Información transparente",
      description: "Cupos y horarios siempre actualizados"
    },
    {
      icon: Shield,
      title: "Apoyo al desarrollo local",
      description: "Clases dictadas en instalaciones municipales certificadas"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Beneficios principales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre por qué miles de vecinos ya confían en Tinkuy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in border-gray-200 hover:border-tinkuy-purple/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
