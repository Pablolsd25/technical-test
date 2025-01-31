import React from "react";
import Serie from "../utils/serie";

function Calculador({ n, onResultadoCalculado }) {
  React.useEffect(() => {
    if (n !== null) {
      const resultado = Serie.calculoSerie(n);
      onResultadoCalculado(resultado);
    }
  }, [n, onResultadoCalculado]);

  return null; // No renderiza nada
}

export default Calculador;
