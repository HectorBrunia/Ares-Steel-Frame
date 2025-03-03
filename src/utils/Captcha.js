export const verificarCaptcha = async (token) => {
  try {
    const response = await fetch(
      "https://ares-steel-frame-backend.onrender.com/verify-recaptcha",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      }
    );

    const data = await response.json();

    return data.success ? true : false;
  } catch (error) {
    console.error("Error al verificar el CAPTCHA:", error);
    return false; // Retornar false en caso de error
  }
};
