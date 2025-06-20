import { useState } from "react";

export default function EmoSyncApp() {
  const [entry, setEntry] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [projection, setProjection] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnalyze = () => {
    if (entry.toLowerCase().includes("miedo") || entry.toLowerCase().includes("amor")) {
      setDiagnosis("💡 Detectamos una desincronización entre cuerpo y mente. El amor está presente, pero hay temor anticipado al paso del tiempo.");
      setProjection("🧭 Imagina un mañana donde el amor se sienta. No se almacena: se vive. ¿Qué harías mañana si supieras que el amor solo existe ahora?");
    } else {
      setDiagnosis("✅ Tu entrada no indica conflicto significativo entre cuerpo y mente.");
      setProjection("🌿 Hoy estás en un estado de relativa sincronía.");
    }
    setShowResult(true);
  };

  const handleClear = () => {
    setEntry("");
    setDiagnosis("");
    setProjection("");
    setShowResult(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-indigo-700">🧠 EMO-SYNC</h1>
      <p className="text-sm text-center text-gray-600">Tu mapa emocional diario</p>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <textarea
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          rows="5"
          placeholder="¿Cómo fue tu día emocionalmente? Escribe aquí tu experiencia..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <div className="flex justify-between">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600" onClick={handleAnalyze}>
            Analizar
          </button>
          <button className="text-gray-500 hover:text-gray-700 text-sm" onClick={handleClear}>
            Limpiar entrada
          </button>
        </div>
      </div>

      {showResult && (
        <div className="bg-gray-50 border border-gray-200 p-4 rounded shadow space-y-4">
          <div>
            <h2 className="font-semibold text-lg mb-1 text-indigo-700">Resultado emocional</h2>
            <p className="text-gray-800">{diagnosis}</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-1 text-indigo-700">Proyección y guía</h2>
            <p className="text-gray-800">{projection}</p>
          </div>
          <p className="text-xs text-gray-400 text-right">❤️ El amor solo vive en el presente</p>
        </div>
      )}
    </div>
  );
}
