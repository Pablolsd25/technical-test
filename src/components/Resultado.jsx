function Resultado({ resultado }) {
  return (
    <div>
      <h2>Resultados</h2>
      <p>
        <strong>Fibonacci:</strong> F({resultado.fibonacci})
      </p>
      <p>
        <strong>Triangular:</strong> T({resultado.triangular})
      </p>
      <p>
        <strong>Es Primo:</strong> P({resultado.esPrimo})
      </p>
      <p>
        <strong>Ecuación:</strong> F({resultado.fibonacci}) - 2 × T(
        {resultado.triangular}) + P({resultado.esPrimo}) ={" "}
        <strong>{resultado.resultadoFinal}</strong>
      </p>
    </div>
  );
}

export default Resultado;
