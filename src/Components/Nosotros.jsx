import { useEffect, useRef, useState } from "react";
import { FiWind } from "react-icons/fi";
import { GiInsectJaws } from "react-icons/gi";
import { PiVirusFill } from "react-icons/pi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiFluffyFlame } from "react-icons/gi";
import { IoWater } from "react-icons/io5";
const videos = [
  {
    title: "Eficiencia",
    description:
      "Optimizamos tiempos de construcción con materiales innovadores.",
    video: "/ejemplo-vid.mp4",
  },
  {
    title: "Calidad garantizada",
    description: "Cumplimos con los más altos estándares constructivos.",
    video: "/ejemplo-vid2.mp4",
  },
  {
    title: "Experiencia",
    description:
      "Contamos con un equipo técnico especializado y amplia trayectoria.",
    video: "/ejemplo-vid3.mp4",
  },
  {
    title: "Sostenibilidad",
    description: "Construcciones más livianas y energéticamente eficientes.",
    video: "/ejemplo-vid4.mp4",
  },
  {
    title: "Cobertura nacional",
    description: "Trabajamos en Tandil y en cualquier ciudad de Argentina.",
    video: "/ejemplo-vid5.mp4",
  },
];

const Nosotros = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]); // Referencias a los videos

  // Reproducir el primer video al cargar el componente
  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  // Cambiar el input marcado y reproducir el video correcto cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % videos.length;
      handleVideoChange(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Manejar el cambio de video (automático o por clic del usuario)
  const handleVideoChange = (index) => {
    setCurrentIndex(index);

    // Cambiar el input marcado
    const input = document.getElementById(`s${index + 1}`);
    if (input) {
      input.checked = true;
    }

    // Reproducir solo el video actual, pausar los demás
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  };

  return (
    <>
      <section className="py-20 h-[900px] md:h-[1250px] bg-gray-100 ">
        <h1 className="text-center text-4xl font-bold my-10">
          Por qué elegirnos
        </h1>
        <div className="cont mx-auto nosotros">
          {videos.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="slaider"
              id={`s${index + 1}`}
              defaultChecked={index === 0}
              onChange={() => handleVideoChange(index)} // Detectar el clic manual
            />
          ))}
          <div className="cards ">
            {videos.map((video, index) => (
              <label
                key={index}
                htmlFor={`s${index + 1}`}
                id={`slide${index + 1}`}
              >
                <div className="card">
                  <div className="image">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)} // Guardar la referencia
                      className="h-[300px] md:h-[50vh] md:mt-4 object-cover rounded-2xl shadow-2xl mx-auto"
                      src={video.video}
                      loop
                      muted
                    />
                  </div>
                  <div className="text-center md:p-6 w-[200px] md:w-[400px] ">
                    <p className="text-xl md:text-3xl text-red-500 p-4">
                      {video.title}
                    </p>
                    <p className="text-lg md:text-2xl w-full text-white">
                      {video.description}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-red-700 text-white mb-0 py-10 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¿Por qué Steel Framing?</h2>
          <p className="text-lg mb-8">
            El steel framing, también conocido como acero conformado en frío
            (CFS), es resistente, adaptable y duradero. No se degrada ni
            envejece tan rápido como otros materiales de construcción como la
            madera, reduciendo significativamente los costos de mantenimiento.
            Esto hace que el CFS sea una opción rentable y duradera para
            proyectos de construcción modernos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center">
              <FiWind size={50} />
              <p className="text-center font-semibold">
                Resiste fuertes vientos y sismos
              </p>
            </div>

            <div className="flex flex-col items-center">
              <GiInsectJaws size={50} />
              <p className="text-center font-semibold">
                Resiste termitas y plagas
              </p>
            </div>

            <div className="flex flex-col items-center">
              <PiVirusFill size={50} />
              <p className="text-center font-semibold">Resistente al moho</p>
            </div>

            <div className="flex flex-col items-center">
              <FaHandHoldingDollar size={50} />
              <p className="text-center font-semibold">Menores costos</p>
            </div>

            <div className="flex flex-col items-center">
              <GiFluffyFlame size={50} />
              <p className="text-center font-semibold">No es inflamable</p>
            </div>

            <div className="flex flex-col items-center">
              <IoWater size={50} />
              <p className="text-center font-semibold">
                Resistente a la corrosión
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
