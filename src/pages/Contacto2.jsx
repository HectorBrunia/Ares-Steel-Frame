import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { uploadImageToCloudinary } from "../utils/Uploadimg";
import { SendEmail } from "../utils/SendEmail";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import { Ciudades } from "../utils/Ciudades";
import "react-phone-input-2/lib/style.css";
import schema from "../utils/validationSchema";
import MessageModal from "../Components/MessageModal";
import FileUpload from "../Components/FileUpload";
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";
import ReCAPTCHA from "react-google-recaptcha";
//6Lf5zOUqAAAAADxQ5kw7-OBGijF65MTT0Vv7CuNE
//6Lf5zOUqAAAAAASLmYtIQ65tI-9akQuNHtVRffTS
const Contacto2 = () => {
  const [filePreviews, setFilePreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      name: file.name,
      url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
      file,
    }));

    setFilePreviews(previews);
  };

  const removeFile = (index) => {
    const newFiles = filePreviews.filter((_, i) => i !== index);
    setFilePreviews(newFiles);
  };

  const [captchaValido, setCaptchaValido] = useState(null);
  const recaptchaRef = useRef(null);

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
    if (!captchaValido) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(formRef.current);
    const files = formData.getAll("archivos");
    console.log(phone);
    console.log(ciudad.value);
    console.log(files);
    formData.append("ubicacion", ciudad.value);
    formData.append("telefono", phone);
    let urls = [];
    if (files.length > 0) {
      for (const file of files) {
        if (file.size > 10 * 1024 * 1024) {
          alert(`El archivo ${file.name} es demasiado grande. Máximo 10MB.`);
          setIsSending(false);
          return;
        }

        const uploadedUrl = await uploadImageToCloudinary(file);
        if (uploadedUrl) {
          urls.push(
            `<li><a href="${uploadedUrl}" target="_blank">${uploadedUrl}</a></li>`
          );
        }
      }
    }

    formData.delete("archivos");
    formData.append("archivoURL", urls.join(", "));

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
          className="max-w-4xl mx-auto p-6 flex flex-col rounded-lg gap-4 shadow-md"
        >
          <h2 className="text-red-600 text-center text-2xl font-bold">
            Hablemos de tu proyecto
          </h2>
          <h3 className=" p-4 ">
            Comparte los detalles de tu proyecto con nosotros y sube tus planos.
            Nos pondremos en contacto contigo para asesorarte y ofrecerte la
            mejor solución en steel framing.
          </h3>

          <div className="sm:grid grid-cols-2 grid-rows-3 gap-2">
            <InputField
              label="Nombre y Apellido"
              name="nombreCompleto"
              register={register}
              error={errors.nombreCompleto}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              register={register}
              error={errors.email}
            />
            <div className="col-start-1 row-start-3">
              <label className="block font-semibold text-red-600 mt-4">
                Número de contacto
              </label>
              <PhoneInput
                country={"ar"}
                value={phone}
                onChange={setPhone}
                containerStyle={{ width: "100%" }}
                inputStyle={{ width: "100%", border: "1px solid" }}
                fullWidth={true}
                enableSearch={true}
                placeholder="Ingresa tu número"
              />
            </div>
            <div className="row-span-3 col-start-2 row-start-1">
              <InputField
                label="Nombre del Proyecto o Descripción breve"
                name="nombreProyecto"
                register={register}
                error={errors.nombreProyecto}
                isTextArea
              />
            </div>
          </div>

          <div className="sm:grid grid-cols-3 grid-rows-2 gap-2 justify-center items-center">
            <div className=" col-start-1 row-start-1 -mt-2">
              <label className="block font-semibold text-red-600 mt-2">
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
              <InputField
                label="Área Aproximada (m²)"
                name="area"
                type="number"
                register={register}
                error={errors.area}
              />
            </div>
            <div className="col-span-2 col-start-2 row-start-1">
              <SelectField
                label="¿En qué etapa se encuentra el proyecto?"
                name="estadoProyecto"
                options={[
                  {
                    value: "Idea inicial/Concepto",
                    label: "Idea inicial / Concepto",
                  },
                  {
                    value: "Diseño en desarrollo",
                    label: "Diseño en desarrollo",
                  },
                  {
                    value: "Ampliación/Remodelación",
                    label: "Ampliación/Remodelación",
                  },
                  {
                    value: "Proyecto finalizado",
                    label: "Proyecto finalizado (listo para construir)",
                  },
                  { value: "En construcción", label: "En construcción" },
                ]}
                register={register}
                error={errors.estadoProyecto}
              />
            </div>
            <div className="col-span-2  row-start-2">
              <InputField
                label="¿Cuáles son tus principales necesidades o dudas sobre el proyecto?"
                name="descripcion"
                register={register}
                error={errors.descripcion}
              />
              <p className="text-red-500">{errors.descripcion?.message}</p>
            </div>
          </div>
          <div className="sm:grid grid-cols-2 gap-2">
            <SelectField
              label="Tipo de Construcción"
              name="tipoConstruccion"
              options={[
                { value: "unifamiliar", label: "Vivienda Unifamiliar" },
                { value: "multifamiliar", label: "Vivienda Multifamiliar" },
                { value: "remodelacion", label: "Ampliación/Remodelación" },
                { value: "comercial", label: "Local Comercial" },
                { value: "industrial", label: "Nave Industrial" },
                { value: "otro", label: "Otro" },
              ]}
              register={register}
              error={errors.tipoConstruccion}
            />
            <SelectField
              label="Tiempo estimado para iniciar el proyecto"
              name="tiempo"
              options={[
                { value: "Inmediatamente", label: "Inmediatamente" },
                { value: "1-3-meses", label: "1-3 meses" },
                { value: "3-6-meses", label: "3-6 meses" },
                { value: "Aún no definido", label: "Aún no definido" },
              ]}
              register={register}
              error={errors.tiempo}
            />
          </div>

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
          <FileUpload
            register={register}
            filePreviews={filePreviews}
            handleFileChange={handleFileChange}
            removeFile={removeFile}
            error={errors.archivos}
          />
          <ReCAPTCHA
            sitekey="6Lf5zOUqAAAAADxQ5kw7-OBGijF65MTT0Vv7CuNE"
            onChange={(value) => setCaptchaValido(value)}
            ref={recaptchaRef}
          />

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
        <MessageModal message={message} onClose={() => setMessage(null)} />
      )}
    </>
  );
};

export default Contacto2;
