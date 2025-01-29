import { useState } from "react";

function Formulario({ onSubmit }) {
  const [n, setN] = useState("");

  const handleChange = (e) => setN(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(n);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingresa un número:
        <input
          type="number"
          value={n}
          onChange={handleChange}
          min="1"
          required
        />
      </label>
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Formulario;
