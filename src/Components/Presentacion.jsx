import { useEffect } from "react";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
const images = [
  "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990649/fux5zyq4rjqkpkanlhca.jpg",
  "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990702/o7sf6h9khp1iodsz6neq.jpg",
  "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990701/usns0jivuc6nmhcqzirx.jpg",
];
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
      <div className="py-20 mt-10 w-full h-[90vh] backdrop-blur-sm gap-10 z-20 p-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Ares Steel Frame
        </h1>
        <p className="md:text-3xl text-2xl font-medium text-red-500 text-center">
          Construcción Moderna, Eficiente y Confiable
        </p>
        <p className="lg:w-[50%] text-center text-lg md:text-xl">
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
      <div className="absolute bg-black h-[90vh] w-full opacity-30 z-10"></div>
      <motion.div
        className="absolute bottom-[5%] w-20 h-20 z-30 bg-gray-800 rounded-full flex items-center justify-center gap-4"
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
