const SistemasConstructivos = () => {
  return (
    <section
      id="Sistemas Constructivos"
      className="py-32 px-8 bg-[#2E2E2E] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Sistemas Constructivos
      </h2>
      <div className="space-y-12 max-w-5xl mx-auto">
        {/* Sistema In Situ */}
        <div className="bg-[#B71C1C] p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Sistema In Situ (Construcción en Obra)
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#B0BEC5]">
            <li>
              Se ensamblan los perfiles de acero galvanizado directamente en el
              lugar de la obra.
            </li>
            <li>
              Se cortan y fijan los montantes y soleras en el sitio según el
              diseño estructural.
            </li>
            <li>
              Se colocan los paneles estructurales, aislamientos y
              revestimientos sobre la estructura ya montada.
            </li>
            <li>
              Ideal para obras que requieren flexibilidad en el montaje o
              ajustes en el terreno.
            </li>
          </ul>
        </div>

        {/* Sistema Prefabricado */}
        <div className="bg-[#333333] p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Sistema Prefabricado (Panelizado)
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#B0BEC5]">
            <li>
              Los paneles estructurales se fabrican en taller o fábrica según
              los planos del proyecto.
            </li>
            <li>
              Se trasladan al sitio de la obra ya ensamblados para su
              instalación rápida.
            </li>
            <li>
              Reduce tiempos de ejecución y mejora la precisión en la
              construcción.
            </li>
            <li>
              Muy utilizado en construcciones modulares y proyectos con plazos
              ajustados.
            </li>
          </ul>
        </div>

        {/* Sistema Modular */}
        <div className="bg-[#B71C1C] p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Sistema Modular</h3>
          <ul className="list-disc list-inside space-y-2 text-[#B0BEC5]">
            <li>
              Se construyen módulos completos en fábrica, con revestimientos y
              terminaciones incluidas.
            </li>
            <li>
              Los módulos son transportados al sitio y ensamblados como un
              rompecabezas.
            </li>
            <li>
              Se usa en viviendas prefabricadas, oficinas y edificios modulares.
            </li>
            <li>
              Aporta rapidez extrema en la ejecución con mínimo trabajo en obra.
            </li>
          </ul>
        </div>

        {/* Steel Framing Híbrido */}
        <div className="bg-[#333333] p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Steel Framing Híbrido</h3>
          <ul className="list-disc list-inside space-y-2 text-[#B0BEC5]">
            <li>
              Combinación de steel framing con otros sistemas constructivos como
              estructura de hormigón o madera.
            </li>
            <li>
              Se usa cuando se requiere mayor resistencia estructural en ciertos
              sectores de la obra.
            </li>
            <li>
              Frecuente en edificios de varias plantas o construcciones que
              combinan materiales tradicionales con steel framing.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SistemasConstructivos;
