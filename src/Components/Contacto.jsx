import Mapa from "./Mapa";

const Contacto = () => {
  return (
    <section className="mx-auto py-16 md:max-w-7xl w-full bg-white text-black">
      <div className=" w-full p-8 flex flex-row gap-10">
        <div className="w-1/2">
          <h2 className="text-red-500 text-xl font-bold">Email</h2>
          <p>ares.steelframe@gmail.com</p>
          <h2 className="text-red-500 text-xl font-bold">Telefono</h2>
          <p>+54 2494-496161</p>
          <h2 className="text-red-500 text-xl font-bold">Síguenos</h2>
          <a
            href="https://www.instagram.com/ares.steelframe?igsh=ZG1mODRrNGdqeHNs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            Instagram: @ares.steelframe
          </a>
          <h2 className="text-red-500 text-xl font-bold">Direccion</h2>
          <p>Sáenz Peña 863,</p>
          <p>B7000 Tandil, Provincia de Buenos Aires, Argentina</p>
        </div>
        <div className="w-1/2 h-full z-0">
          <Mapa />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
