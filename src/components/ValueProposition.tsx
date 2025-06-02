import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, X } from 'lucide-react';

const ValueProposition = () => {
  const comparisons = [
    {
      problem: '📄 Trámites presenciales, listas en papel y llamadas infinitas',
      solution:
        '💻 Inscripciones digitales con pasarela de pago y boleta electrónica',
    },
    {
      problem: '🔍 Información dispersa en carteles o WhatsApp',
      solution: '📚 Catálogo único con filtros por tipo, día y edad',
    },
    {
      problem: '💵 Pagos solo en efectivo o ventanilla',
      solution: '📱 Yape, Plin o tarjeta, con confirmación instantánea',
    },
    {
      problem: '❌ Recordatorios manuales o nulos',
      solution: '⏰ Correos automáticos 24 h antes de cada clase',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es{' '}
            <span className="bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise bg-clip-text text-transparent">
              Tinkuy
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos la manera en que te inscribes a cursos municipales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="animate-slide-in-left bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                <X className="h-5 w-5 mr-2" />
                Hoy (problema)
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="text-gray-700">
                    {item.problem}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className="animate-slide-in-left bg-green-50 border-green-200"
            style={{ animationDelay: '0.2s' }}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Con Tinkuy (solución)
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="text-gray-700">
                    {item.solution}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
