import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { uploadImageToCloudinary } from "../utils/Uploadimg";
import { sendEmailTrabajo } from "../utils/SendEmail";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import { Ciudades } from "../utils/Ciudades";
import "react-phone-input-2/lib/style.css";
import { schemaTrabajo } from "../utils/validationSchema";
import MessageModal from "../Components/MessageModal";
import FileUpload from "../Components/FileUpload";
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";
import ReCAPTCHA from "react-google-recaptcha";

const TrabajaConNos = () => {
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
    resolver: yupResolver(schemaTrabajo),
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
      const responseMessage = await sendEmailTrabajo(formData);
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
            Trabaja con Nosotros
          </h2>
          <h3 className=" p-4 ">
            ¿Te gustaría formar parte de nuestro equipo? Completa el siguiente
            formulario para postularte a futuras oportunidades laborales en
            nuestra empresa de steel framing.
          </h3>

          <div className="sm:grid grid-cols-2 grid-rows-2 gap-2">
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
            <div className="col-start-1 row-start-2">
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
            <div className=" col-start-2 row-start-2 mt-2">
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
          </div>

          <div className="sm:grid grid-cols-2 grid-rows-3 gap-2 justify-center items-center">
            <div className="col-span-2 col-start-1 row-start-1">
              <label className="block font-semibold text-red-600 mt-4">
                ¿A qué puesto deseas postularte?
              </label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="checkbox"
                    {...register("puesto")}
                    value="Oficial en steel framing"
                  />
                  Oficial en steel framing
                </label>
                <label>
                  <input
                    type="checkbox"
                    {...register("puesto")}
                    value="Ayudante de obra"
                  />
                  Ayudante de obra
                </label>
                <label>
                  <input
                    type="checkbox"
                    {...register("puesto")}
                    value="Supervisor de obra"
                  />
                  Supervisor de obra
                </label>
                <label>
                  <input
                    type="checkbox"
                    {...register("puesto")}
                    value="Diseñador de planos (CAD, BIM, etc.)"
                  />
                  Diseñador de planos (CAD, BIM, etc.)
                </label>
                <label>
                  <input
                    type="checkbox"
                    {...register("puesto")}
                    value="Otro "
                  />
                  Otro
                </label>
              </div>
              <p className="text-red-500">{errors.puesto?.message}</p>
            </div>
            <div className="row-start-2">
              <SelectField
                label="¿Cuántos años de experiencia tienes en el sector de construcción/steel framing?"
                name="experiencia"
                options={[
                  { value: "Sin experiencia", label: "Sin experiencia" },
                  { value: "Menos de 1 año", label: "Menos de 1 año" },
                  { value: "1-3 años", label: "1-3 años" },
                  { value: "3-5 años", label: "3-5 años" },
                  { value: "Más de 5 años", label: "Más de 5 años" },
                ]}
                register={register}
                error={errors.experiencia}
              />
            </div>
            <div className=" row-start-3">
              <SelectField
                label="¿Has trabajado en obras anteriores?"
                name="trabajoAnterior"
                options={[
                  {
                    value: "Sí, en obras de steel framing",
                    label: "Sí, en obras de steel framing",
                  },
                  {
                    value: "Sí, en construcción tradicional",
                    label: "Sí, en construcción tradicional",
                  },
                  {
                    value: "No, pero quiero aprender",
                    label: "No, pero quiero aprender",
                  },
                ]}
                register={register}
                error={errors.trabajoAnterior}
              />
            </div>
            <div className="row-span-2 col-start-2">
              <InputField
                label="Descripción breve de tu experiencia laboral anterior: "
                name="experienciaLaboral"
                type="text"
                register={register}
                isTextArea={true}
                error={errors.experienciaLaboral}
              />
            </div>
          </div>
          <div className="sm:grid col-span-2 grid-cols-2 gap-2">
            <div className="col-span-2 col-start-1">
              <SelectField
                label="Disponibilidad horaria"
                name="disponibilidad"
                options={[
                  {
                    value: "Jornada completa",
                    label: "Jornada completa",
                  },
                  {
                    value: "Medio tiempo",
                    label: "Medio tiempo",
                  },
                  {
                    value: "Fines de semana",
                    label: "Fines de semana",
                  },
                ]}
                register={register}
                error={errors.disponibilidad}
              />
            </div>
            <div>
              <label className="block mt-4">
                <input type="checkbox" {...register("viajar")} />
                Disponible para viajar
              </label>
              <p className="text-red-500">{errors.viajar?.message}</p>
            </div>
            <div>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  {...register("disponibilidadInmediata")}
                />
                Tengo disponibilidad inmediata
              </label>
              <p className="text-red-500">
                {errors.disponibilidadInmediata?.message}
              </p>
            </div>
            <div className="col-span-2 col-start-1">
              <InputField
                label="¿Posees certificaciones o cursos relacionados con construcción/steel framing?"
                name="certificaciones"
                type="text"
                register={register}
                isTextArea={true}
                error={errors.certificaciones}
              />
            </div>
          </div>
          <label className="block mt-4">
            <input type="checkbox" {...register("consentimiento")} /> Acepto los
            Confirmo que la información proporcionada es correcta y autorizo a
            <span className="text-red-500 font-semibold">
              {" "}
              Ares Steel Frame
            </span>{" "}
            a contactarme en caso de que haya oportunidades laborales
            disponibles
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
              Enviar
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

export default TrabajaConNos;
