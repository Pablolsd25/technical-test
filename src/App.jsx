import { useState } from "react";
import Formulario from "./components/Formulario";
import Calculador from "./components/Calculador";
import Resultado from "./components/Resultado";

function App() {
  const [resultado, setResultado] = useState(null);

  const handleCalcular = (n) => {
    setResultado(n);
  };

  return (
    <div>
      <Formulario onCalcular={handleCalcular} />
      {resultado !== null && <Calculador n={resultado} />}
      {resultado !== null && <Resultado resultado={resultado} />}
    </div>
  );
}

export default App;
