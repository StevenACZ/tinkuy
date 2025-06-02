
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Tengo que registrarme para explorar los cursos?",
      answer: "No es obligatorio. El catálogo es público y puedes filtrar libremente. Solo te pediremos crear una cuenta cuando desees reservar un cupo, de modo que podamos vincular tu inscripción, enviarte recordatorios y guardar tu historial de pagos."
    },
    {
      question: "¿Qué métodos de pago aceptan y cómo sé que el pago fue exitoso?",
      answer: "La plataforma usa una pasarela certificada que procesa tarjetas Visa/Mastercard, Yape y Plin. Al completar la transacción verás una pantalla de confirmación, tu estado cambiará a 'Pagado' en el panel 'Mis cursos' y recibirás la boleta electrónica en tu correo en menos de dos minutos."
    },
    {
      question: "¿Puedo cancelar mi inscripción y pedir reembolso?",
      answer: "Sí. Cada curso define una fecha límite de cancelación, visible en su ficha. Si solicitas la baja antes de ese día, el sistema libera tu cupo y genera automáticamente la devolución al mismo medio de pago en un plazo máximo de 5 días hábiles."
    },
    {
      question: "¿Mis datos y los de mi tarjeta están seguros?",
      answer: "Cumplimos con PCI-DSS a través de la pasarela; Tinkuy nunca almacena tu número de tarjeta. Todos los datos viajan cifrados (HTTPS) y los accesos a la base están auditados. Además, aplicamos copias de seguridad diarias."
    },
    {
      question: "Soy instructor municipal, ¿cómo publico un nuevo taller?",
      answer: "Solicita un perfil de instructor en la opción 'Quiero dictar un curso'. Tras la verificación de tu área municipal, recibirás acceso a un panel donde puedes cargar título, descripción, fotos, costo y cupos."
    }
  ];

  return (
    <section id="preguntas" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Encuentra respuestas a las dudas más comunes
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <AccordionTrigger className="text-left text-lg font-medium hover:text-tinkuy-purple">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
