import Mapa from "./Mapa";

const Contacto = () => {
  return (
    <section className="mx-auto py-16 w-full bg-gray-500 ">
      <h1 className=" text-4xl font-bold text-center my-12">
        Contacta con Nosotros
      </h1>
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="w-1/3 flex flex-col gap-20">
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Direccion</h2>
            <p>Sáenz Peña 863,</p>
            <p>B7000 Tandil, Provincia de Buenos Aires, Argentina</p>
            <Mapa />
          </div>
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Email</h2>
            <p>ares.steelframe@gmail.com</p>
          </div>
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Telefono</h2>
            <p>+54 2494-496161</p>
          </div>
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Redes Sociales</h2>
            <p>@ares.steelframe</p>
          </div>
        </div>
        <div className="w-1 h-[70vh] bg-red-500"></div>
        <div className="w-1/3">
          <form className="flex flex-col gap-4">
            <label className="text-sm font-semibold">Nombre y Apellido</label>
            <input
              type="text"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="Tu nombre completo"
            />

            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="ejemplo@email.com"
            />

            <label className="text-sm font-semibold">Número de contacto</label>
            <input
              type="tel"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="+54 123 456 7890"
            />

            <label className="text-sm font-semibold">Ciudad</label>
            <input
              type="text"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="Tu ciudad"
            />

            <label className="text-sm font-semibold">Mensaje</label>
            <textarea
              className="p-2 border border-gray-400 rounded-md text-black h-32 resize-none"
              placeholder="Escribe tu mensaje..."
            ></textarea>

            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md transition">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
