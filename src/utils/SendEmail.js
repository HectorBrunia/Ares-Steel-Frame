import emailjs from "@emailjs/browser";

export const SendEmail = async (formData) => {
  const emailData = {
    to_name: "Ares Steel Frame",
    nombreCompleto: formData.get("nombreCompleto"),
    email: formData.get("email"),
    telefono: formData.get("telefono"),
    proyecto: formData.get("nombreProyecto"),
    ubicacion: formData.get("ubicacion"),
    tipoConstruccion: formData.get("tipoConstruccion"),
    area: formData.get("area"),
    contactoPreferido: formData.getAll("contactoPreferido").join(", "),
    consentimiento: formData.get("consentimiento"),
    message: formData.get("archivoURL")
      ? `Aquí está el archivo adjunto: ${formData.get("archivoURL")}`
      : "No se adjuntó archivo.",
  };

  // Enviamos solo los datos sin archivos adjuntos
  try {
    await emailjs.send(
      "service_tve2nrj",
      "template_m9hsmtd",
      emailData,
      "MbiAbGPFHhaTGc8nN"
    );
    return "Correo enviado con éxito!"; // Ahora devuelve un mensaje
  } catch (error) {
    console.error("Error al enviar:", error);
    return "Error al enviar el correo. Intenta de nuevo.";
  }
};
