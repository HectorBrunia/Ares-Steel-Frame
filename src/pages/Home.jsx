import { ParallaxProvider } from "react-scroll-parallax";
import Nosotros from "../Components/Nosotros";
import Presentacion from "../Components/Presentacion";
import Servicios from "../Components/Servicio";
import Proyectos from "../Components/Proyectos";
import Contacto from "../Components/Contacto";
import SestemasConstructivos from "../Components/SistemasConstructivos";

import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Ares Steel Frame - Construcciónes Moderna, Eficiente y Confiable
        </title>
        <meta
          name="description"
          content="Somos una empresa constructora especializada en Steel Framing, con un equipo propio de trabajo altamente capacitado. Nuestro enfoque está en la eficiencia, calidad y rapidez en cada obra, brindando soluciones modernas y personalizadas en toda Argentina."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dquci1gzf/image/upload/v1740990703/yxagaxbyhmadpibqxkgl.jpg"
        />
      </Helmet>
      <div className="felx-col overflow-hidden items-center justify-center">
        <section id="nosotros">
          <Presentacion />

          <Nosotros />
        </section>

        <ParallaxProvider>
          <Servicios />
        </ParallaxProvider>

        <SestemasConstructivos />
        <Proyectos />
        <section id="contacto">
          <Contacto />
        </section>
      </div>
    </>
  );
};

export default Home;
