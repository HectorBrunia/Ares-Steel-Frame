import { useState } from "react";
import emailjs from "@emailjs/browser";
import Mapa from "./Mapa";
import { uploadImageToCloudinary } from "../utils/Uploadimg";

const Contacto = () => {
  const [imageBase64, setImageBase64] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setImageBase64(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Por favor, selecciona un archivo de imagen válido.");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Subir imagen a Cloudinary primero
    const imageUrl = await uploadImageToCloudinary(imageBase64);

    if (!imageUrl) {
      alert("Error al subir la imagen. Inténtalo de nuevo.");
      return;
    }

    // Enviar el correo con la URL de la imagen
    emailjs
      .send(
        "service_tve2nrj",
        "template_m9hsmtd",
        {
          to_name: "Ares Steel Frame",
          name: formData.get("name"),
          email: formData.get("email"),
          numero: formData.get("numero"),
          ciudad: formData.get("ciudad"),
          message: "Aquí está la imagen adjunta:",
          image: imageUrl, // Usar la URL de Cloudinary
        },
        "MbiAbGPFHhaTGc8nN"
      )
      .then(() => alert("Correo enviado con imagen subida correctamente!"))
      .catch((err) => console.error(err));
  };
  return (
    <section className="mx-auto py-16 w-full bg-white text-black">
      <h1 className=" text-4xl text-red-500 font-bold text-center my-12">
        Contacta con Nosotros
      </h1>
      <div className="mx-auto w-full flex flex-col  md:flex-row items-center justify-center gap-4">
        <div className="md:w-1/3 w-full p-8 flex flex-col gap-10">
          <div>
            <h2 className="text-red-500 text-xl font-bold">Email</h2>
            <p>ares.steelframe@gmail.com</p>
          </div>
          <div>
            <h2 className="text-red-500 text-xl font-bold">Telefono</h2>
            <p>+54 2494-496161</p>
          </div>
          <div>
            <h2 className="text-red-500 text-xl font-bold">Síguenos</h2>
            <a
              href="https://www.instagram.com/ares.steelframe?igsh=ZG1mODRrNGdqeHNs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              Instagram: @ares.steelframe
            </a>
          </div>
          <div className="z-0">
            <h2 className="text-red-500 text-xl font-bold">Direccion</h2>
            <p>Sáenz Peña 863,</p>
            <p>B7000 Tandil, Provincia de Buenos Aires, Argentina</p>
            <Mapa />
          </div>
        </div>
        <div className="md:w-1 md:h-[70vh] w-[90%] h-1 md:flex bg-red-500"></div>
        <div className="md:w-1/3 w-full p-8 h-full">
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <label className="text-2xl font-semibold text-red-500">
              Nombre y Apellido
            </label>
            <input
              name="name"
              type="text"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="Tu nombre completo"
            />

            <label className="text-2xl font-semibold text-red-500">Email</label>
            <input
              name="email"
              type="email"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="ejemplo@email.com"
            />

            <label className="text-2xl text-red-500 font-semibold">
              Número de contacto
            </label>
            <input
              name="numero"
              type="tel"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="+54 123 456 7890"
            />

            <label className="text-2xl font-semibold text-red-500">
              Ciudad
            </label>
            <input
              name="ciudad"
              type="text"
              className="p-2 border border-gray-400 rounded-md text-black"
              placeholder="Tu ciudad"
            />

            <label className="text-2xl font-semibold text-red-500">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              className="p-2 border border-gray-400 rounded-md text-black h-32 resize-none"
              placeholder="Escribe tu mensaje..."
            ></textarea>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              name=""
              id=""
            />

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
