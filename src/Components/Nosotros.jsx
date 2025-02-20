import { useEffect, useState, useRef } from "react";

const vid = [
  "/ejemplo-vid.mp4",
  "/ejemplo-vid2.mp4",
  "/ejemplo-vid3.mp4",
  "/ejemplo-vid4.mp4",
];

const Nosotros = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % vid.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // 🔥 Recarga el video
    }
  }, [videoIndex]);

  return (
    <section className="my-16 bg-white z-10 mx-auto w-full">
      <h1 className="mx-auto w-fit text-4xl font-bold mb-6">
        Por Qué Elegirnos
      </h1>
      <div className="mx-auto flex flex-row gap-2 max-w-7xl items-center justify-baseline">
        <div className="mx-auto flex flex-col gap-24 w-[400px] items-center justify-center">
          <div
            className={`transition-all duration-500 ${videoIndex === 0 ? "opacity-100 scale-110" : "opacity-40 scale-90"}`}
          >
            <h2 className="text-2xl font-bold text-red-500">Eficiencia</h2>
            <p className="text-gray-600">
              Optimizamos tiempos de construcción con materiales innovadores.
            </p>
            <div className="w-full h-1 bg-gray-300 mt-2 overflow-hidden">
              <div
                className={`h-full w-0 bg-red-500 transition-all duration-[5000ms] ${
                  videoIndex === 0 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${videoIndex === 1 ? "opacity-100 scale-110" : "opacity-40 scale-90"}`}
          >
            <h2 className="text-2xl font-bold text-red-500">
              Calidad garantizada
            </h2>
            <p className="text-gray-600">
              Cumplimos con los más altos estándares constructivos.
            </p>
            <div className="w-full h-1 bg-gray-300 mt-2 overflow-hidden">
              <div
                className={`h-full w-0 bg-red-500 transition-all duration-[5000ms] ${
                  videoIndex === 1 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${videoIndex === 2 ? "opacity-100 scale-110" : "opacity-40 scale-90"}`}
          >
            <h2 className="text-2xl font-bold text-red-500">Experiencia</h2>
            <p className="text-gray-600">
              Contamos con un equipo técnico especializado y amplia trayectoria.
            </p>
            <div className="w-full h-1 bg-gray-300 mt-2 overflow-hidden">
              <div
                className={`h-full w-0 bg-red-500 transition-all duration-[5000ms] ${
                  videoIndex === 2 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${videoIndex === 3 ? "opacity-100 scale-110" : "opacity-40 scale-90"}`}
          >
            <h2 className="text-2xl font-bold text-red-500">Sostenibilidad</h2>
            <p className="text-gray-600">
              Construcciones más livianas y energéticamente eficientes
            </p>
            <div className="w-full h-1 bg-gray-300 mt-2 overflow-hidden">
              <div
                className={`h-full w-0 bg-red-500 transition-all duration-[5000ms] ${
                  videoIndex === 3 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${videoIndex === 4 ? "opacity-100 scale-110" : "opacity-40 scale-90"}`}
          >
            <h2 className="text-2xl font-bold text-red-500">
              Cobertura nacional
            </h2>
            <p className="text-gray-600">
              Trabajamos en Tandil y en cualquier ciudad de Argentina.
            </p>
            <div className="w-full h-1 bg-gray-300 mt-2 overflow-hidden">
              <div
                className={`h-full w-0 bg-red-500 transition-all duration-[5000ms] ${
                  videoIndex === 4 ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div>
          <video
            ref={videoRef}
            className="h-[80vh] w-[430px] shadow-2xl rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={vid[videoIndex]} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
