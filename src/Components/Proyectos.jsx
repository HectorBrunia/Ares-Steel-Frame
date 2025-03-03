import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

const cld = new Cloudinary({
  cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME }, // 🔹 Reemplaza con tu cloud_name
});
const media = [
  {
    id: "xu3wluum1t7hug7md7hu",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990693/xu3wluum1t7hug7md7hu.jpg",
    span: "row-span-3 col-span-2",
  },
  {
    id: "otj7gghxr3gtrovjll03",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990681/otj7gghxr3gtrovjll03.jpg",
  },
  {
    id: "i3fj6viva2g5qkxzlpoq",
    type: "video",
    src: "https://res.cloudinary.com/dquci1gzf/video/upload/v1740990696/i3fj6viva2g5qkxzlpoq.mp4",
    span: "row-span-3",
  },
  {
    id: "n4rp8qfbp5zrouhz7daw",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990683/n4rp8qfbp5zrouhz7daw.jpg",
  },
  {
    id: "rveiurux8uzaaacyguud",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990686/rveiurux8uzaaacyguud.jpg",
  },
  {
    id: "i5gkb9vsjfsrfoob5tfu",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990685/i5gkb9vsjfsrfoob5tfu.jpg",
  },
  {
    id: "uupneyu1uuduqnqvkiut",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990684/uupneyu1uuduqnqvkiut.jpg",
    span: "row-span-2",
  },
  {
    id: "rmfk4yjj7ktqnabulpwj",
    type: "video",
    src: "https://res.cloudinary.com/dquci1gzf/video/upload/v1740990701/rmfk4yjj7ktqnabulpwj.mp4",
  },
  {
    id: "swoguez0rcfrz1pecnb7",
    type: "video",
    src: "https://res.cloudinary.com/dquci1gzf/video/upload/v1740990657/swoguez0rcfrz1pecnb7.mp4",
    span: "row-span-2",
  },
  {
    id: "oc5z11bgbsup7m8ojfvf",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990688/oc5z11bgbsup7m8ojfvf.jpg",
  },
  {
    id: "qz3c2kaoser4ueznn3ok",
    type: "video",
    src: "https://res.cloudinary.com/dquci1gzf/video/upload/v1740990670/qz3c2kaoser4ueznn3ok.mp4",
  },
  {
    id: "lnuguamzitgczvj4s2v8",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990690/lnuguamzitgczvj4s2v8.jpg",
  },
  {
    id: "s9vbq6wthipy1u52pwbm",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990693/s9vbq6wthipy1u52pwbm.jpg",
  },
  {
    id: "l1h13ut5lvaobalinux3",
    type: "video",
    src: "https://res.cloudinary.com/dquci1gzf/video/upload/v1740990680/l1h13ut5lvaobalinux3.mp4",
  },
  {
    id: "h3hk3ccgn9er8rj12s3j",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990686/h3hk3ccgn9er8rj12s3j.jpg",
    span: "col-span-2 row-span-2",
  },
  {
    id: "zq9xpciug9kd2u1kseln",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990686/zq9xpciug9kd2u1kseln.jpg",
    span: "col-span-2",
  },
  {
    id: "h7kuyikbxedupmc1ixvu",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990688/h7kuyikbxedupmc1ixvu.jpg",
    span: "col-span-2",
  },
  {
    id: "sq7lyyfwjdq2teiawtq9",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990691/sq7lyyfwjdq2teiawtq9.jpg",
  },
  {
    id: "gxycx7b7jie74pwataoj",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990693/gxycx7b7jie74pwataoj.jpg",
  },
  {
    id: "vmxwrkm6mtk53jdk94uv",
    type: "video",
    src: "https://res.cloudinary.com/dquci1gzf/video/upload/v1740990661/vmxwrkm6mtk53jdk94uv.mp4",
  },
  {
    id: "xu3wluum1t7hug7md7hu",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990693/xu3wluum1t7hug7md7hu.jpg",
  },
  {
    id: "mlsfl3rxi5ljrivi9elv",
    type: "video",
    src: "https://res.cloudinary.com/dquci1gzf/video/upload/v1740990681/mlsfl3rxi5ljrivi9elv.mp4",
    span: "row-span-2 ",
  },
  {
    id: "xgcz6bm1xwihwdgg8exl",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990696/xgcz6bm1xwihwdgg8exl.jpg",
  },
  {
    id: "zgigga8bnfayibfhtlfd",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990696/zgigga8bnfayibfhtlfd.jpg",
  },
  {
    id: "xzedifpmyvliolco6r4l",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990700/xzedifpmyvliolco6r4l.jpg",
  },
  {
    id: "frkjiqvwzr62kfpfyxry",
    type: "video",
    src: "https://res.cloudinary.com/dquci1gzf/video/upload/v1740990669/frkjiqvwzr62kfpfyxry.mp4",
  },
  {
    id: "zuasmkvhty1krx2fioof",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990702/zuasmkvhty1krx2fioof.jpg",
    span: "col-span-2 row-span-2",
  },
  {
    id: "efu5hr48zgdw0bx48mzg",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990703/efu5hr48zgdw0bx48mzg.jpg",
  },
  {
    id: "igfda3m1sulyhyvzfhva",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990700/igfda3m1sulyhyvzfhva.jpg",
  },
  {
    id: "rcqck0pijwbux3zdjadf",
    type: "image",
    src: "https://res.cloudinary.com/dquci1gzf/image/upload/v1740990706/rcqck0pijwbux3zdjadf.jpg",
  },
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
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl gap-4 px-4 mx-auto auto-rows-[150px] md:auto-rows-[200px] grid-flow-dense">
        {media.map((item, index) => {
          const cloudinaryMedia = cld[item.type](item.id)
            .resize(fill().width(500).height(500))
            .delivery(format("auto"))
            .delivery(quality("auto"));

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
              className="absolute top-5 right-5 bg-red-500 rounded-full text-white text-3xl"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes />
            </button>
            <button
              aria-label="Cerrar galería"
              className="absolute lg:left-52 left-5 bg-red-500 rounded-full text-white text-3xl"
              onClick={prevMedia}
            >
              <FaArrowLeft />
            </button>
            {media[selectedIndex].type === "image" ? (
              <AdvancedImage
                cldImg={cld.image(media[selectedIndex].id)}
                className="max-w-3xl max-h-[80vh] rounded-lg"
                loading="lazy"
              />
            ) : (
              <AdvancedVideo
                cldVid={cld.video(media[selectedIndex].id)}
                className="max-w-3xl max-h-[80vh] rounded-lg"
                autoOptimize={true}
              />
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
