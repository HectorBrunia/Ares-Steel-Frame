import emailjs from "@emailjs/browser";

export const SendEmail = async (formData) => {
  const emailData = {
    to_name: "Ares Steel Frame",
    nombreCompleto: formData.get("nombreCompleto"),
    email: formData.get("email"),
    telefono: formData.get("telefono"),
    estadoProyecto: formData.get("estadoProyecto"),
    proyecto: formData.get("nombreProyecto"),
    ubicacion: formData.get("ubicacion"),
    tipoConstruccion: formData.get("tipoConstruccion"),
    tiempo: formData.get("tiempo"),
    descripcion: formData.get("descripcion"),
    area: formData.get("area"),
    contactoPreferido: formData.getAll("contactoPreferido").join(", "),
    consentimiento: formData.get("consentimiento"),
    message: `<ul>${formData.get("archivoURL")}</ul>`,
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

export const sendEmailTrabajo = async (formData) => {
  const emailData = {
    to_name: "Ares Steel Frame",
    nombreCompleto: formData.get("nombreCompleto"),
    email: formData.get("email"),
    telefono: formData.get("telefono"),
    ubicacion: formData.get("ubicacion"),
    puesto: formData.getAll("puesto").join(", "),
    experiencia: formData.get("experiencia"),
    trabajoAnterior: formData.get("trabajoAnterior"),
    experienciaLaboral: formData.get("experienciaLaboral"),
    disponibilidad: formData.get("disponibilidad"),
    viajar: formData.get("viajar"),
    disponibilidadInmediata: formData.get("disponibilidadInmediata"),
    certificaciones: formData.get("certificaciones"),
    consentimiento: formData.get("consentimiento"),
    message: `<ul>${formData.get("archivoURL")}</ul>`,
  };

  // Enviamos solo los datos sin archivos adjuntos
  try {
    await emailjs.send(
      "service_tve2nrj",
      "template_ggirzir",
      emailData,
      "MbiAbGPFHhaTGc8nN"
    );
    return "Correo enviado con éxito!"; // Ahora devuelve un mensaje
  } catch (error) {
    console.error("Error al enviar:", error);
    return "Error al enviar el correo. Intenta de nuevo.";
  }
};
