import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { uploadImageToCloudinary } from "../utils/Uploadimg";
//import { form } from "framer-motion/client";
import { SendEmail } from "../utils/SendEmail";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { Ciudades } from "../utils/Ciudades";

const schema = yup.object().shape({
  nombreCompleto: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  nombreProyecto: yup
    .string()
    .required("Debes indicar el nombre o descripción del proyecto"),
  descripcion: yup.string().required("La descripción es obligatoria"),
  estadoProyecto: yup.string().required("Selecciona un estado del proyecto"),
  tipoConstruccion: yup.string().required("Selecciona un tipo de construcción"),
  tiempo: yup.string().required("Selecciona un tiempo estimado"),
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
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState(null);
  const [phone, setPhone] = useState("");
  const [ciudad, setCiudad] = useState([]);
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
    setIsSending(true);
    const formData = new FormData(formRef.current);
    const file = formData.get("archivos");
    console.log(phone);
    console.log(ciudad.value);
    formData.append("ubicacion", ciudad.value);
    formData.append("telefono", phone);
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("El archivo es demasiado grande. Máximo 10MB.");
        setIsSending(false);
        return;
      }
      formData.delete("archivos");
      formData.append("archivoURL", await uploadImageToCloudinary(file));
    }

    try {
      const responseMessage = await SendEmail(formData);
      setMessage(responseMessage);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setMessage("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="py-30">
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl mx-auto p-6 flex flex-col rounded-lg shadow-md"
        >
          <h2 className="text-red-600 text-center text-2xl font-bold">
            Hablemos de tu proyecto
          </h2>
          <h3 className=" p-4 ">
            Comparte los detalles de tu proyecto con nosotros y sube tus planos.
            Nos pondremos en contacto contigo para asesorarte y ofrecerte la
            mejor solución en steel framing.
          </h3>

          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            <div className="col-start-1 row-start-1">
              <label className="block font-semibold text-red-600">
                Nombre y Apellido
              </label>
              <input
                {...register("nombreCompleto")}
                className="border w-full p-2 rounded"
              />
              <p className="text-red-500">{errors.nombreCompleto?.message}</p>
            </div>
            <div className="col-start-1 row-start-2">
              <label className="block font-semibold text-red-600 mt-4">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                className="border w-full p-2 rounded"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="col-start-1 row-start-3">
              <label className="block font-semibold text-red-600 mt-4">
                Número de contacto
              </label>
              <PhoneInput
                country={"ar"} // Establece un país por defecto (Argentina en este caso)
                value={phone}
                onChange={setPhone}
                containerStyle={{ width: "100%" }}
                inputStyle={{ width: "100%", border: "1px solid" }}
                fullWidth={true}
                enableSearch={true} // Habilita búsqueda de países
                placeholder="Ingresa tu número"
              />
            </div>
            <div className=" row-span-3 col-start-2 row-start-1">
              <label className="block font-semibold text-red-600 ">
                Nombre del Proyecto o Descripción breve
              </label>
              <textarea
                {...register("nombreProyecto")}
                className="border w-full  rounded "
                rows={10}
              />
              <p className="text-red-500">{errors.nombreProyecto?.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            <div>
              <label className="block font-semibold text-red-600 mt-4">
                Ubicación
              </label>
              <Select
                value={ciudad}
                onChange={setCiudad}
                options={Ciudades}
                placeholder="Selecciona una ciudad"
                isSearchable
              />
              <p className="text-red-500">{errors.ubicacion?.message}</p>
            </div>

            <div className="col-start-1 row-start-2">
              <label className="block font-semibold text-red-600 mt-4">
                Área Aproximada (m²)
              </label>
              <input
                {...register("area")}
                type="number"
                className="border w-full p-2 rounded"
              />
              <p className="text-red-500">{errors.area?.message}</p>
            </div>
            <div className="col-span-2 col-start-2 row-start-1">
              <label className="block font-semibold text-red-600 mt-4">
                ¿En qué etapa se encuentra el proyecto?
              </label>
              <select
                {...register("estadoProyecto")}
                className="border w-full p-2 rounded"
              >
                <option value="">Selecciona...</option>
                <option value="Idea inicial/Concepto">
                  Idea inicial / Concepto
                </option>
                <option value="Diseño en desarrollo">
                  Diseño en desarrollo
                </option>
                <option value="Ampliación/Remodelación">
                  Ampliación/Remodelación
                </option>
                <option value="Proyecto finalizado">
                  Proyecto finalizado (listo para construir)
                </option>
                <option value="En construcción">En construcción</option>
              </select>
              <p className="text-red-500">{errors.estadoProyecto?.message}</p>
            </div>
            <div className="col-span-2  row-start-2">
              <label className="block font-semibold text-red-600 mt-4">
                ¿Cuáles son tus principales necesidades o dudas sobre el
                proyecto?
              </label>
              <input
                {...register("descripcion")}
                className="border w-full p-2 rounded"
              />
              <p className="text-red-500">{errors.descripcion?.message}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
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
            </div>
            <div>
              <label className="block font-semibold text-red-600 mt-4">
                Tiempo estimado para iniciar el proyecto
              </label>
              <select
                {...register("tiempo")}
                className="border w-full p-2 rounded"
              >
                <option value="">Selecciona...</option>
                <option value="Inmediatamente">Inmediatamente</option>
                <option value="1-3-meses">1-3 meses </option>
                <option value="3-6-meses">3-6 meses</option>
                <option value="Aún no definido">Aún no definido</option>
              </select>
              <p className="text-red-500">{errors.tiempo?.message}</p>
            </div>
          </div>
          {/* Tipo de Construcción */}

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
            Confirmo que la información proporcionada es correcta y autorizo a
            <span className="text-red-500 font-semibold">
              {" "}
              Ares Steel Frame
            </span>{" "}
            a contactarme para discutir mi proyecto.
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

          {isSending ? (
            <p className="text-green-500 text-center mt-4">
              Enviando correo...
            </p>
          ) : (
            <button
              type="submit"
              className="bg-red-600 cursor-pointer text-white w-full py-2 mt-4 rounded"
            >
              {isSending ? "....." : "Enviar"}
            </button>
          )}
        </form>
      </div>
      {message && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center  backdrop-brightness-75">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm text-center animate-fade-in">
            <p>{message}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setMessage(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contacto2;
