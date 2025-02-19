const services = [
  {
    title: "Construcción en seco",
    description:
      "Método innovador que reemplaza la albañilería tradicional con estructuras de acero galvanizado, logrando obras más rápidas, limpias y eficientes.",
    image: "/construccion-seco.jpeg",
  },
  {
    title: "Llave en mano",
    description:
      "Nos encargamos de todo el proceso, desde el diseño hasta la entrega final, asegurando calidad y cumplimiento de plazos.",
    image: "/llave-en-mano.jpeg",
  },
  {
    title: "Ampliaciones",
    description:
      "Expansión de viviendas y espacios comerciales con sistemas livianos y resistentes, sin demoliciones innecesarias y con mínima interrupción.",
    image: "/ampliaciones.jpeg",
  },
  {
    title: "Cielorrasos y tabiques en Drywall",
    description:
      "Solución versátil y moderna para interiores, con excelente aislamiento térmico y acústico.",
    image: "/drywall.jpeg",
  },
  {
    title: "Cielorrasos en PVC",
    description:
      "Opción estética y de bajo mantenimiento, ideal para ambientes húmedos y de alto tránsito.",
    image: "/cielorrasos-pvc.jpeg",
  },
  {
    title: "Decks",
    description:
      "Espacios exteriores resistentes y duraderos, perfectos para jardines, galerías y áreas recreativas.",
    image: "/decks.jpeg",
  },
];

const Servicios = () => {
  return (
    <section className="mx-auto py-16 backdrop-opacity-250 backdrop-blur-xs w-full">
      <h2 className="text-4xl font-bold text-center mb-12">Servicios</h2>
      <div className="mx-auto flex flex-col gap-12 max-w-7xl items-center justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-[600px] h-[350px] object-cover rounded-lg shadow-md"
            />
            <div className="max-w-lg md:text-left">
              <h3 className="text-2xl text-center font-semibold">
                {service.title}
              </h3>
              <div className="bg-red-500 my-6 w-[500px] mx-auto h-[2px]"></div>
              <p className="text-gray-600  text-center mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
