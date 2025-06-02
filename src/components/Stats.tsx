const Stats = () => {
  const stats = [
    {
      number: '1,500+',
      label: 'vecinos registrados en el piloto',
    },
    {
      number: '98%',
      label: 'de satisfacción en encuestas',
    },
    {
      number: '<3s',
      label: 'tiempo de carga promedio',
    },
    {
      number: '50+',
      label: 'cursos disponibles',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Impacto en cifras
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Los números que respaldan nuestra plataforma
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
