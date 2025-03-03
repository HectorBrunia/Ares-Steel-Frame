const VIRUSTOTAL_API_KEY =
  "a7a72b5f9088c8a3cbf18acb083c5ae9563bed4e41a8f6283869b8b191a639d7";

export const scanFileWithVirusTotal = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("https://www.virustotal.com/api/v3/files", {
      method: "POST",
      headers: { "x-apikey": VIRUSTOTAL_API_KEY },
      body: formData,
    });

    const data = await response.json();
    return data.data.id; // ID del análisis
  } catch (error) {
    console.error("Error al subir archivo a VirusTotal:", error);
    return null;
  }
};

export const getAnalysisReport = async (analysisId) => {
  try {
    const response = await fetch(
      `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
      {
        method: "GET",
        headers: { "x-apikey": VIRUSTOTAL_API_KEY },
      }
    );

    const data = await response.json();
    return data.data.attributes.stats; // Devuelve estadísticas del análisis
  } catch (error) {
    console.error("Error al obtener reporte de VirusTotal:", error);
    return null;
  }
};
