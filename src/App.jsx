import { useState } from "react";
import Formulario from "./components/Formulario";
import Calculador from "./components/Calculador";
import Resultado from "./components/Resultado";

function App() {
  const [n, setN] = useState(null);
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (n) => {
    setN(n); // Guarda el valor de n en el estado
  };

  const handleResultadoCalculado = (resultado) => {
    setResultado(resultado); // Guarda el resultado en el estado
  };

  return (
    <div>
      <h1>Calculadora de Serie</h1>
      <Formulario onSubmit={handleSubmit} />
      <Calculador n={n} onResultadoCalculado={handleResultadoCalculado} />
      {resultado !== null && <Resultado resultado={resultado} />}
    </div>
  );
}

export default App;
