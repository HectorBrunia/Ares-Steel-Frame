/* eslint-disable react/prop-types */
const MessageModal = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-brightness-75">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm text-center animate-fade-in">
        {message == "Correo enviado con éxito!" ||
        message == "No se pudo analizar el archivo" ? (
          <div>
            <p>{message}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-black mt-4 text-lg font-semibold">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageModal;
