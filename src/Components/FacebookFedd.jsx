import { useEffect } from "react";

const FacebookFedd = () => {
  useEffect(() => {
    // Cargar el script de Elfsight
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="galeria-redes"
      style={{ padding: "2rem", backgroundColor: "#ffffff" }}
    >
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}
      >
        Galería de FaceBook
      </h2>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        {/* Div del widget de Elfsight */}
        <div
          className="elfsight-app-fb568171-5cbd-4cf6-a245-7000d3bfea98"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default FacebookFedd;
