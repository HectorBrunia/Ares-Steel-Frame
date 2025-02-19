import NavBar from "./Components/NavBar";
import Contacto from "./Components/Contacto";
import Nosotros from "./Components/Nosotros";
import Presentacion from "./Components/Presentacion";
import Servicios from "./Components/Servicio";

import "leaflet/dist/leaflet.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="felx-col items-center justify-center">
        <section>
          <Presentacion />
        </section>
        <section>
          <Nosotros />
        </section>
        <section
          className="h-[80vh] w-full bg-gray-200 overflow-y-scroll "
          style={{
            backgroundImage: `/fonde-servicos.jpeg`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Servicios />
        </section>
        <Contacto />
      </div>
    </>
  );
}

export default App;
