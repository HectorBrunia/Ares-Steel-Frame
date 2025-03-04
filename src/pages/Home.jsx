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
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ares Steel Frame" />
        <meta
          name="keywords"
          content="steel frame, construcciones, casas de acero, construcciones moderna, steel frame Argentina"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Ares Steel Frame" />
        <title>Ares Steel Frame - Construcción Moderna</title>
        <meta
          name="description"
          content="Construcción Moderna, Eficiente y Confiable"
        />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn, etc.) */}
        <meta property="og:title" content="Ares Steel Frame" />
        <meta
          property="og:description"
          content="Construcción Moderna, Eficiente y Confiable"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dquci1gzf/image/upload/v1740990703/yxagaxbyhmadpibqxkgl.jpg"
        />
        <meta property="og:url" content="https://aressteelframe.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ares Steel Frame" />
        <meta
          name="twitter:description"
          content="Construcción Moderna, Eficiente y Confiable"
        />
        <meta
          name="twitter:image"
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
