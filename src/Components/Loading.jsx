const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-md z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-black mt-4 text-lg font-semibold">Cargando...</p>
      </div>
    </div>
  );
};

export default Loading;
