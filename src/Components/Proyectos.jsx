import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const images = [
  "/img-hero3.jpeg",
  "/img-galeria-1.jpeg",
  "/img-galeria-2.jpeg",
  "/img-galeria-3.jpeg",
  "/img-galeria-4.jpeg",
  "/img-galeria-5.jpeg",
  "/img-galeria-6.jpeg",
  "/img-galeria-7.jpeg",
  "/img-galeria-8.jpeg",
  "/img-galeria-9.jpeg",
  // Agrega más imágenes aquí
];

const Proyectos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Proyectos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 md:max-w-7xl gap-4 px-4 mx-auto">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Proyecto ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-5 bg-red-500 rounded-full right-5 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <button
              className="absolute left-5 text-white text-3xl bg-red-500 rounded-full"
              onClick={prevImage}
            >
              <FaArrowLeft />
            </button>
            <img
              src={images[selectedImage]}
              alt={`Proyecto ${selectedImage + 1}`}
              className="max-w-3xl max-h-[80vh] rounded-lg"
            />
            <button
              className="absolute right-5 text-white text-3xl bg-red-500 rounded-full"
              onClick={nextImage}
            >
              <FaArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Proyectos;
