const Presentacion = () => {
  return (
    <div className="w-full presentacion m-auto w-[100hv] gap-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl">Ares Steel Frame</h1>
      <p className="text-3xl text-red-500">
        Construcción Moderna, Eficiente y Confiable
      </p>
      <p className="w-[50%] text-center">
        Somos una empresa constructora especializada en{" "}
        <span className="text-red-500">Steel Framing</span>, con un equipo
        propio de trabajo altamente capacitado. Nuestro enfoque está en la
        eficiencia,{" "}
        <span className="text-red-500"> calidad y rapidez en cada obra</span>,
        brindando soluciones modernas y personalizadas en toda Argentina.
      </p>
    </div>
  );
};

export default Presentacion;
