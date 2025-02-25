import { ParallaxProvider } from "react-scroll-parallax";
import Nosotros from "../Components/Nosotros";
import Presentacion from "../Components/Presentacion";
import Servicios from "../Components/Servicio";
import Proyectos from "../Components/Proyectos";
import Contacto from "../Components/Contacto";
import SestemasConstructivos from "../Components/SistemasConstructivos";

import "leaflet/dist/leaflet.css";
const Home = () => {
  return (
    <>
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
