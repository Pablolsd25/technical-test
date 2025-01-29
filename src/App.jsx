// src/App.js
import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Calculadora from "./utils/calculadora";

function App() {
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (n) => {
    const result = Calculadora.calcular(Number(n));
    setResultado(result);
  };

  return (
    <div>
      <h1>Calculadora de Serie</h1>
      <Formulario onSubmit={handleSubmit} />
      {resultado !== null && <Resultado resultado={resultado} />}
    </div>
  );
}

export default App;
