import { useEffect } from "react";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
const images = ["/img-hero.jpeg", "/img-hero2.jpeg", "/img-hero3.jpeg"];
const Presentacion = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[90vh] flex text-white flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1.5s ease-in-out",
      }}
    >
      <div className="py-20 w-full h-[90vh] backdrop-blur-sm gap-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Ares Steel Frame</h1>
        <p className="text-3xl font-medium text-red-500">
          Construcción Moderna, Eficiente y Confiable
        </p>
        <p className="w-[50%] text-center text-xl">
          Somos una empresa constructora especializada en{" "}
          <span className="text-red-500 font-semibold">Steel Framing</span>, con
          un equipo propio de trabajo altamente capacitado. Nuestro enfoque está
          en la eficiencia,{" "}
          <span className="text-red-500 font-semibold">
            {" "}
            calidad y rapidez en cada obra
          </span>
          , brindando soluciones modernas y personalizadas en toda Argentina.
        </p>
      </div>
      <motion.div
        className="absolute bottom-14 w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center gap-4"
        initial={{ translateY: -10 }}
        animate={{ translateY: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <FaArrowDown size={30} color="white" />
      </motion.div>
    </div>
  );
};

export default Presentacion;
