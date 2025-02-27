/* eslint-disable react/prop-types */
const SelectField = ({
  label,
  name,
  options,
  register,
  error,
  placeholder,
}) => {
  return (
    <div>
      <label className="block font-semibold text-red-600">{label}</label>
      <select {...register(name)} className="border w-full p-2 rounded">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="text-red-500">{error?.message}</p>
    </div>
  );
};

export default SelectField;
