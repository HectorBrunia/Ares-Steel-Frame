import { useEffect, useRef, useState } from "react";

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
    <section className="py-20 h-[1200px] bg-gray-100 nosotros">
      <h1 className="text-center text-5xl font-bold my-20">
        Por qué elegirnos
      </h1>
      <div className="cont mx-auto">
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
        <div className="cards">
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
                    className="h-[50vh] object-cover rounded-2xl shadow-2xl mx-auto"
                    src={video.video}
                    loop
                    muted
                  />
                </div>
                <div className="text-center p-6">
                  <p className="text-3xl text-red-500 p-4">{video.title}</p>
                  <p className="text-2xl text-white">{video.description}</p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
