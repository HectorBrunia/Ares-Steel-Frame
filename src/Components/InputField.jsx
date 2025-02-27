/* eslint-disable react/prop-types */
const InputField = ({
  label,
  name,
  type = "text",
  register,
  error,
  isTextArea = false,
}) => {
  return (
    <div>
      <label className="block font-semibold text-red-600">{label}</label>
      {isTextArea ? (
        <textarea
          {...register(name)}
          className="border w-full rounded"
          rows={10}
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          className="border w-full p-2 rounded"
        />
      )}
      <p className="text-red-500">{error?.message}</p>
    </div>
  );
};

export default InputField;
