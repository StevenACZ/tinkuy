import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, DollarSign, Users } from 'lucide-react';

const CoursesCatalog = () => {
  const courses = [
    {
      title: 'Básquet Inicial',
      description: 'Fundamentos y mini-torneos para todas las edades.',
      schedule: 'Lun & Mi 19:00-20:00',
      location: 'Coliseo Municipal',
      price: 'S/. 80 / mes',
      category: 'Deporte',
      spots: 12,
      ages: '8-16 años',
      image:
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Natación para Niños',
      description: 'Técnica de crol y seguridad acuática.',
      schedule: 'Sáb 10:00-12:00',
      location: 'Piscina Olímpica',
      price: 'S/. 150 / 5 ses.',
      category: 'Deporte',
      spots: 8,
      ages: '6-12 años',
      image:
        'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Guitarra Básica',
      description: 'Acordes, ritmo y primera canción en 8 sesiones.',
      schedule: 'Vie 17:00-19:00',
      location: 'Casa de la Juventud',
      price: 'S/. 90 / ciclo',
      category: 'Arte',
      spots: 15,
      ages: '12+ años',
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Acuarela Creativa',
      description: 'Mezclas de color y paisajes urbanos. Incluye materiales.',
      schedule: 'Mar & Jue 18:00-20:00',
      location: 'Centro Cultural',
      price: 'S/. 120 / 4 ses.',
      category: 'Arte',
      spots: 10,
      ages: '16+ años',
      image:
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Karate Juvenil',
      description: 'Katas y defensa personal.',
      schedule: 'Mar & Jue 17:00-18:00',
      location: 'Coliseo Municipal',
      price: 'S/. 85 / mes',
      category: 'Deporte',
      spots: 20,
      ages: '13-17 años',
      image:
        'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Yoga al Amanecer',
      description: 'Vinyasa suave y meditación. Trae tu mat.',
      schedule: 'Sáb 07:00-08:30',
      location: 'Parque Central',
      price: 'S/. 70 / mes',
      category: 'Bienestar',
      spots: 25,
      ages: '18+ años',
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Deporte':
        return 'bg-blue-100 text-blue-800';
      case 'Arte':
        return 'bg-purple-100 text-purple-800';
      case 'Bienestar':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="courses-catalog" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Catálogo de cursos presenciales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra el curso perfecto para ti y tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 animate-fade-in border-gray-200 hover:border-tinkuy-purple/30 overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getCategoryColor(course.category)}>
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-sm text-gray-700 font-medium">
                    {course.spots} cupos
                  </span>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-tinkuy-purple" />
                    {course.schedule}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-tinkuy-turquoise" />
                    {course.ages}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-tinkuy-turquoise" />
                    {course.location}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-gray-900">
                    <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                    {course.price}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise hover:from-tinkuy-purple-dark hover:to-tinkuy-turquoise-dark text-white mt-auto">
                  Inscribirme
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-tinkuy-purple text-tinkuy-purple hover:bg-tinkuy-purple hover:text-white"
          >
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesCatalog;
