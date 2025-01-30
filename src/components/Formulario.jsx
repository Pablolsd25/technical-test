import { useState } from "react";

function Formulario({ onSubmit }) {
  const [n, setN] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parseInt(n, 10)); // Envía el valor de n al componente padre
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(e.target.value)}
        placeholder="Introduce un número"
        min="0"
        required
      />
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Formulario;
