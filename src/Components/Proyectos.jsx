import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const media = [
  { type: "image", src: "/img-hero3.jpeg", span: "row-span-3 col-span-2" },
  { type: "image", src: "/img-galeria-1.jpeg" },
  { type: "video", src: "/ejemplo-vid.mp4", span: "row-span-3" },
  { type: "image", src: "/img-galeria-2.jpeg" },
  { type: "image", src: "/img-galeria-3.jpeg" },
  { type: "image", src: "/img-galeria-4.jpeg" },
  { type: "image", src: "/img-galeria-5.jpeg", span: "row-span-2" },
  { type: "video", src: "/galeria-vid4.mp4" },
  { type: "video", src: "/ejemplo-vid2.mp4", span: "row-span-2" },
  { type: "image", src: "/img-galeria-9.jpeg" },
  { type: "video", src: "/galeria-vid.mp4" },
  { type: "image", src: "/img-galeria-10.jpeg" },
  { type: "image", src: "/img-galeria-11.jpeg" },
  { type: "video", src: "/galeria-vid6.mp4" },
  { type: "image", src: "/img-galeria-7.jpeg", span: "col-span-2 row-span-2" },
  { type: "image", src: "/img-galeria-6.jpeg", span: "col-span-2" },
  { type: "image", src: "/img-galeria-8.jpeg", span: "col-span-2" },
  { type: "image", src: "/img-galeria-12.jpeg" },
  { type: "image", src: "/img-galeria-13.jpeg" },
  { type: "video", src: "/galeria-vid2.mp4" },
  { type: "image", src: "/img-galeria-14.jpeg" },
  { type: "video", src: "/galeria-vid5.mp4", span: "row-span-2 " },
  { type: "image", src: "/img-galeria-15.jpeg" },
  { type: "image", src: "/img-galeria-16.jpeg" },
  { type: "image", src: "/img-galeria-17.jpeg" },
  { type: "video", src: "/galeria-vid3.mp4" },
  { type: "image", src: "/img-galeria-18.jpeg", span: "col-span-2 row-span-2" },
  { type: "image", src: "/img-galeria-19.jpeg" },
  { type: "image", src: "/img-galeria-20.jpeg" },
  { type: "image", src: "/img-galeria-21.jpeg" },
];

const Proyectos = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

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
    <section className="py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Proyectos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 md:max-w-7xl gap-4 px-4 mx-auto auto-rows-[150px] md:auto-rows-[200px] grid-flow-dense">
        {media.map((item, index) => (
          <motion.div
            key={index}
            className={`w-full h-full cursor-pointer rounded-lg overflow-hidden shadow-lg ${item.span || ""}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedIndex(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Proyecto ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                muted
                preload="metadata"
              />
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 backdrop-brightness-20 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-5 right-5 bg-red-500 rounded-full text-white text-3xl"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes />
            </button>
            <button
              className="absolute lg:left-52 left-5 bg-red-500 rounded-full text-white text-3xl"
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
              className="absolute lg:right-52 right-5 bg-red-500 rounded-full text-white text-3xl"
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
