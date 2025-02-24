import NavBar from "./Components/NavBar";
import Contacto from "./Components/Contacto";
import Nosotros from "./Components/Nosotros";
import Presentacion from "./Components/Presentacion";
import Servicios from "./Components/Servicio";
import SestemasConstructivos from "./Components/SistemasConstructivos";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./Components/Footer";

import "leaflet/dist/leaflet.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Proyectos from "./Components/Proyectos";

function App() {
  return (
    <>
      <NavBar />
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
        <Footer />
      </div>
    </>
  );
}

export default App;
