import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { uploadImageToCloudinary } from "../utils/Uploadimg";

const schema = yup.object().shape({
  nombreCompleto: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  telefono: yup.string().matches(/^\d+$/, "Solo números").notRequired(),
  nombreProyecto: yup
    .string()
    .required("Debes indicar el nombre o descripción del proyecto"),
  ubicacion: yup.string().required("La ubicación es obligatoria"),
  tipoConstruccion: yup.string().required("Selecciona un tipo de construcción"),
  area: yup
    .number()
    .positive("Debe ser un número positivo")
    .required("El área es obligatoria"),
  contactoPreferido: yup
    .array()
    .min(1, "Elige al menos una opción de contacto"),
  consentimiento: yup.boolean().oneOf([true], "Debes aceptar los términos"),
  archivos: yup.mixed().notRequired(),
});

const Contacto2 = () => {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const file = formData.get("archivos");

    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        // Límite de 10MB
        alert("El archivo es demasiado grande. Máximo 10MB.");
        return;
      }
      formData.delete("archivos");
      formData.append("archivoURL", await uploadImageToCloudinary(file));
    }
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
    emailjs
      .send(
        "service_tve2nrj",
        "template_m9hsmtd",
        emailData,
        "MbiAbGPFHhaTGc8nN"
      )
      .then(() => alert("Correo enviado con éxito!"))
      .catch((err) => console.error("Error al enviar:", err));
  };

  return (
    <div className="py-30">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto p-6  rounded-lg shadow-md"
      >
        <h2 className="text-red-600 text-center text-2xl font-bold">
          Hablemos de tu proyecto
        </h2>

        {/* Nombre Completo */}
        <label className="block font-semibold text-red-600">
          Nombre y Apellido
        </label>
        <input
          {...register("nombreCompleto")}
          className="border w-full p-2 rounded"
        />
        <p className="text-red-500">{errors.nombreCompleto?.message}</p>

        {/* Email */}
        <label className="block font-semibold text-red-600 mt-4">Email</label>
        <input
          {...register("email")}
          type="email"
          className="border w-full p-2 rounded"
        />
        <p className="text-red-500">{errors.email?.message}</p>

        {/* Teléfono */}
        <label className="block font-semibold text-red-600 mt-4">
          Número de contacto
        </label>
        <input
          {...register("telefono")}
          type="text"
          className="border w-full p-2 rounded"
        />
        <p className="text-red-500">{errors.telefono?.message}</p>

        {/* Nombre del Proyecto */}
        <label className="block font-semibold text-red-600 mt-4">
          Nombre del Proyecto o Descripción breve
        </label>
        <input
          {...register("nombreProyecto")}
          className="border w-full p-2 rounded"
        />
        <p className="text-red-500">{errors.nombreProyecto?.message}</p>

        {/* Ubicación */}
        <label className="block font-semibold text-red-600 mt-4">
          Ubicación
        </label>
        <input
          {...register("ubicacion")}
          className="border w-full p-2 rounded"
        />
        <p className="text-red-500">{errors.ubicacion?.message}</p>

        {/* Área */}
        <label className="block font-semibold text-red-600 mt-4">
          Área Aproximada (m²)
        </label>
        <input
          {...register("area")}
          type="number"
          className="border w-full p-2 rounded"
        />
        <p className="text-red-500">{errors.area?.message}</p>

        {/* Tipo de Construcción */}
        <label className="block font-semibold text-red-600 mt-4">
          Tipo de Construcción
        </label>
        <select
          {...register("tipoConstruccion")}
          className="border w-full p-2 rounded"
        >
          <option value="">Selecciona...</option>
          <option value="unifamiliar">Vivienda Unifamiliar</option>
          <option value="multifamiliar">Vivienda Multifamiliar</option>
          <option value="remodelacion">Ampliación/Remodelación</option>
          <option value="comercial">Local Comercial</option>
          <option value="industrial">Nave Industrial</option>
          <option value="otro">Otro</option>
        </select>
        <p className="text-red-500">{errors.tipoConstruccion?.message}</p>

        {/* Preferencia de Contacto */}
        <label className="block font-semibold text-red-600 mt-4">
          ¿Cómo prefieres que te contactemos?
        </label>
        <div className="flex gap-4">
          <label>
            <input
              type="checkbox"
              {...register("contactoPreferido")}
              value="email"
            />{" "}
            Email
          </label>
          <label>
            <input
              type="checkbox"
              {...register("contactoPreferido")}
              value="telefono"
            />{" "}
            Teléfono
          </label>
          <label>
            <input
              type="checkbox"
              {...register("contactoPreferido")}
              value="whatsapp"
            />{" "}
            WhatsApp
          </label>
        </div>
        <p className="text-red-500">{errors.contactoPreferido?.message}</p>

        {/* Consentimiento */}
        <label className="block mt-4">
          <input type="checkbox" {...register("consentimiento")} /> Acepto los
          términos y condiciones
        </label>
        <p className="text-red-500">{errors.consentimiento?.message}</p>

        {/* Subida de Archivos */}
        <label className="block font-semibold text-red-600 mt-4">
          Sube tus planos o documentos
        </label>
        <input
          {...register("archivos")}
          type="file"
          multiple
          accept=".pdf,.dwg,.jpg,.png,.zip"
          className="border w-full p-2 rounded"
        />
        <p className="text-red-500">{errors.archivos?.message}</p>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className="bg-red-600 text-white w-full py-2 mt-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto2;
