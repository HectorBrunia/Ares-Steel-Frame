import NavBar from "./Components/NavBar";
import Contacto from "./Components/Contacto";
import Nosotros from "./Components/Nosotros";
import Presentacion from "./Components/Presentacion";
import Servicios from "./Components/Servicio";
import SestemasConstructivos from "./Components/SistemasConstructivos";

import "leaflet/dist/leaflet.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="felx-col items-center justify-center">
        <section id="nosotros">
          <Presentacion />

          <Nosotros />
        </section>

        <ParallaxProvider>
          <Servicios />
        </ParallaxProvider>

        <SestemasConstructivos />

        <section id="contacto">
          <Contacto />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
