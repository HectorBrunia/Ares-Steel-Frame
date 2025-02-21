import Mapa from "./Mapa";

const Contacto = () => {
  return (
    <section className="mx-auto py-16 w-full bg-white text-black">
      <h1 className=" text-4xl text-red-500 font-bold text-center my-12">
        Contacta con Nosotros
      </h1>
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="w-1/3 flex flex-col gap-10">
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Email</h2>
            <p>ares.steelframe@gmail.com</p>
          </div>
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Telefono</h2>
            <p>+54 2494-496161</p>
          </div>
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Síguenos</h2>
            <a
              href="https://www.instagram.com/ares.steelframe?igsh=ZG1mODRrNGdqeHNs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              Instagram: @ares.steelframe
            </a>
          </div>
          <div>
            <h2 className="text-red-500 text-2xl font-bold">Direccion</h2>
            <p>Sáenz Peña 863,</p>
            <p>B7000 Tandil, Provincia de Buenos Aires, Argentina</p>
            <Mapa />
          </div>
        </div>
        <div className="w-1 h-[70vh] bg-red-500"></div>
        <div className="w-1/3">
          <form className="flex flex-col gap-4">
            <label className="text-2xl font-semibold text-red-500">
              Nombre y Apellido
            </label>
            <input
              type="text"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="Tu nombre completo"
            />

            <label className="text-2xl font-semibold text-red-500">Email</label>
            <input
              type="email"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="ejemplo@email.com"
            />

            <label className="text-2xl text-red-500 font-semibold">
              Número de contacto
            </label>
            <input
              type="tel"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="+54 123 456 7890"
            />

            <label className="text-2xl font-semibold text-red-500">
              Ciudad
            </label>
            <input
              type="text"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="Tu ciudad"
            />

            <label className="text-2xl font-semibold text-red-500">
              Mensaje
            </label>
            <textarea
              className="p-2 border border-gray-400 rounded-md text-black h-32 resize-none"
              placeholder="Escribe tu mensaje..."
            ></textarea>

            <button className="mt-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md transition">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
