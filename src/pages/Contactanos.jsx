import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contactanos = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const sanitizeFileName = (fileName) => {
    return fileName
      .normalize("NFD") // Elimina tildes
      .replace(/[\u0300-\u036f]/g, "") // Elimina diacríticos
      .replace(/ñ/g, "n") // Reemplaza ñ por n
      .replace(/[^a-zA-Z0-9.]/g, "_"); // Reemplaza caracteres no válidos por _
  };

  // Función para validar y subir archivo a Cloudinary
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const sanitizedFileName = sanitizeFileName(file.name);

    // Validar el formato
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/dwg",
    ];
    if (!allowedTypes.includes(file.type)) {
      alert("Formato no permitido. Solo PDF, DWG, JPG y PNG.");
      return;
    }

    // Validar el tamaño (máximo 10 MB)
    const maxSize = 10 * 1024 * 1024; // 10 MB
    if (file.size > maxSize) {
      alert("El archivo supera el tamaño máximo de 10 MB.");
      return;
    }

    // Subida a Cloudinary
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default"); // Tu preset en Cloudinary
    formData.append("public_id", sanitizedFileName); // Usar nombre limpio como public_id

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dtlrdlq98/auto/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.secure_url) {
        setFileUrl(data.secure_url);
        alert("Archivo subido con éxito!");
      } else {
        throw new Error("Error en la subida");
      }
    } catch (error) {
      console.error("Error al subir archivo:", error);
      alert("Error al subir el archivo.");
    } finally {
      setUploading(false);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

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
          attachment: fileUrl,
        },
        "MbiAbGPFHhaTGc8nN"
      )
      .then(() => alert("Correo enviado con imagen subida correctamente!"))
      .catch((err) => console.error(err));
  };
  return (
    <div className="md:w-1/3 mx-auto w-full p-8 h-full">
      <h1 className="mt-40 text-4xl text-red-500  text-center p-6">
        Hablemos de tu proyecto
      </h1>
      <p className="text-center text-xl p-6">
        Comparte los detalles de tu proyecto con nosotros y sube tus planos. Nos
        pondremos en contacto contigo para asesorarte y ofrecerte la mejor
        solución en steel framing.
      </p>
      <form onSubmit={sendEmail} className="flex  flex-col gap-4">
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

        <label className="text-2xl font-semibold text-red-500">Ciudad</label>
        <input
          name="ciudad"
          type="text"
          className="p-2 border border-gray-400 rounded-md text-black"
          placeholder="Tu ciudad"
        />

        <label className="text-2xl font-semibold text-red-500">Mensaje</label>
        <textarea
          name="mensaje"
          className="p-2 border border-gray-400 rounded-md text-black h-32 resize-none"
          placeholder="Escribe tu mensaje..."
        ></textarea>
        <label className="font-semibold">
          Adjunta tu archivo (PDF, DWG, JPG, PNG):
        </label>
        <input
          type="file"
          accept=".pdf,.dwg,.jpg,.jpeg,.png"
          onChange={handleFileUpload}
        />
        {uploading && <p className="text-blue-500">Subiendo archivo...</p>}
        {fileUrl && (
          <p className="text-green-500">Archivo listo para enviar ✅</p>
        )}

        <button className="mt-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md transition">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contactanos;
