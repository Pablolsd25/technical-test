// Calculador.jsx (ES Modules)
import React from "react";
import Serie from "../utils/serie"; // Importación correcta para ES Modules

function Calculador({ n, onResultadoCalculado }) {
  React.useEffect(() => {
    if (n !== null) {
      const resultado = Serie.calculoSerie(n); // Usa la clase Serie
      onResultadoCalculado(resultado);
    }
  }, [n, onResultadoCalculado]);

  return null; // No renderiza nada
}

export default Calculador;
