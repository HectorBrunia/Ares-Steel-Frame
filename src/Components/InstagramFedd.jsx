import { useEffect } from "react";

const InstagramFeed = () => {
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
        Galería de Instagram
      </h2>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        {/* Div del widget de Elfsight */}
        <div
          className="elfsight-app-66479a57-d1bc-4167-aaeb-c6b0de06b0a7"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default InstagramFeed;
