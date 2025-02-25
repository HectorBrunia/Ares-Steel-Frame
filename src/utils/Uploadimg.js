export const uploadImageToCloudinary = async (imageBase64) => {
  const cloudName = "dtlrdlq98"; // Reemplaza con tu Cloud Name
  const uploadPreset = "ml_default"; // Reemplaza con tu Upload Preset

  const formData = new FormData();
  formData.append("file", imageBase64);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    if (data.secure_url) {
      return data.secure_url; // URL pública de la imagen
    } else {
      throw new Error("Error al subir la imagen a Cloudinary");
    }
  } catch (error) {
    console.error("Error al subir imagen:", error);
    return null;
  }
};
