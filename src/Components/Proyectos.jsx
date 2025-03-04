import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { media } from "../utils/ImagenesGaleria";
import { useMemo } from "react";
const cld = new Cloudinary({
  cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME }, // 🔹 Reemplaza con tu cloud_name
});

const Proyectos = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const cachedMedia = useMemo(() => {
    return media.map((item) =>
      cld[item.type](item.id)
        .resize(fill().width(500).height(500))
        .delivery(format("auto"))
        .delivery(quality("auto"))
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextMedia = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % media.length);
  }, []);

  const prevMedia = useCallback(() => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );
  }, []);

  return (
    <section id="proyectos" className="py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Proyectos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl gap-4 px-4 mx-auto auto-rows-[150px] md:auto-rows-[200px] grid-flow-dense">
        {media.map((item, index) => {
          const cloudinaryMedia = cachedMedia[index];

          return (
            <motion.div
              key={index}
              className={`w-full h-full cursor-pointer rounded-lg overflow-hidden shadow-lg ${item.span || ""}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(index)}
            >
              {item.type === "image" ? (
                <AdvancedImage
                  cldImg={cloudinaryMedia}
                  className="w-full h-full object-cover"
                  attributes={{ alt: `imagen galeria n ${index}` }}
                />
              ) : (
                <AdvancedVideo
                  cldVid={cloudinaryMedia}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && media[selectedIndex] && (
          <motion.div
            className="fixed inset-0 backdrop-brightness-20 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              aria-label="Cerrar galería"
              className="absolute top-5 right-5 rounded-full text-white text-3xl"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes />
            </button>
            <button
              aria-label="Imagen Anterior"
              className="absolute lg:left-52 left-5 z-20 rounded-full text-white text-3xl"
              onClick={prevMedia}
            >
              <FaArrowLeft />
            </button>
            {media[selectedIndex].type === "image" ? (
              <img
                src={media[selectedIndex].src}
                alt={`Proyecto ${selectedIndex + 1}`}
                className="max-w-3xl max-h-[80vh] rounded-lg"
              />
            ) : (
              <video
                src={media[selectedIndex].src}
                autoPlay
                muted
                preload="none"
                className="max-w-3xl max-h-[80vh] rounded-lg"
              ></video>
            )}
            <button
              aria-label="Imagen Siguiente"
              className="absolute lg:right-52 right-5 z-20 rounded-full text-white text-3xl"
              onClick={nextMedia}
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
