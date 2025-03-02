import * as yup from "yup";

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

export default schema;

export const schemaTrabajo = yup.object().shape({
  nombreCompleto: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  puesto: yup.array().min(1, "Elige al menos una opción de contacto"),
  experiencia: yup.string().required("Selecciona experiencia"),
  trabajoAnterior: yup.string().required("Selecciona experiencia"),
  experienciaLaboral: yup.string().required("Selecciona experiencia"),
  disponibilidad: yup.string().required("Selecciona disponibilidad"),
  viajar: yup.boolean(),
  disponibilidadInmediata: yup.boolean(),
  consentimiento: yup.boolean().oneOf([true], "Debes aceptar los términos"),
  certificaciones: yup.string().notRequired(),
  archivos: yup.mixed().notRequired(),
});
