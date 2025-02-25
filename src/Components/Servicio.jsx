import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
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
    <section
      id="servicios"
      className="relative -z-0 h-[3400px] lg:h-[3000px]  overflow-hidden"
    >
      <Parallax speed={-300}>
        <div
          className="h-[150vh] absolute -z-10 w-full top-[-320px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/fonde-servicos.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </Parallax>
      <Parallax speed={30}>
        <div className="mx-auto backdrop-blur-sm pt-60 absolute top-60 z-10 w-full">
          <h2 className="mx-auto text-4xl w-fit font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="mx-auto flex flex-col gap-28 max-w-7xl items-center justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, scale: 0 }} // Inicialmente invisible y más abajo
                whileInView={{ opacity: 1, scale: 1 }} // Se hace visible al entrar en pantalla
                viewport={{ once: false, amount: 0.8 }} // Se activa cuando el 30% del elemento es visible
                transition={{ duration: 1.5, ease: "easeOut" }} // Duración y suavidad de la animación
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="lg:w-[500px] lg:h-[350px] w-[400px] h-[250px] object-cover rounded-lg shadow-md"
                />
                <div className="max-w-lg md:text-left">
                  <h3 className="text-2xl text-center font-semibold">
                    {service.title}
                  </h3>
                  <div className="bg-red-500 my-6 md:w-[500px] mx-auto h-[2px]"></div>
                  <p className="text-gray-800  text-center mt-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Servicios;
