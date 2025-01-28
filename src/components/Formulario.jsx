import React, { useState } from "react";

function Formulario({ onCalcular }) {
  const [n, setN] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalcular(Number(n));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(e.target.value)}
        placeholder="Introduce un número"
      />
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Formulario;
