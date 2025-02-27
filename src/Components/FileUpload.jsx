/* eslint-disable react/prop-types */
const FileUpload = ({
  register,
  filePreviews,
  handleFileChange,
  removeFile,
  error,
}) => {
  return (
    <div className="mt-4">
      <label className="block font-semibold text-red-600">
        Sube tus planos o documentos
      </label>

      <div className="relative border border-gray-300 bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition">
        <input
          {...register("archivos")}
          type="file"
          multiple
          accept=".pdf,.dwg,.jpg,.png,.zip"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v10M8 7h8M6 16h12M6 20h12" />
        </svg>
        <p className="text-gray-700 text-sm">Haz clic para subir archivos</p>
        <p className="text-xs text-gray-500">
          Formatos permitidos: PDF, DWG, JPG, PNG, ZIP
        </p>
      </div>

      {filePreviews.length > 0 && (
        <div className="mt-2 p-2 bg-gray-50 border rounded">
          <p className="text-sm font-medium text-gray-600">
            Archivos seleccionados:
          </p>
          <ul className="list-disc pl-4 text-sm text-gray-700">
            {filePreviews.map((file, index) => (
              <li
                key={index}
                className="flex items-center gap-2 justify-between p-1"
              >
                <div className="flex items-center gap-2">
                  {file.url && (
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-12 h-12 object-cover rounded-md border"
                    />
                  )}
                  <span>{file.name}</span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-700 transition"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-red-500">{error?.message}</p>
    </div>
  );
};

export default FileUpload;
