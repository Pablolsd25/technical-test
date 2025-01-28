import Serie from "../utils/serie";

function Calculador({ n }) {
  const serie = new Serie();
  const resultado = serie.calcularTermino(n);

  return (
    <div>
      El término {n} de la serie es: {resultado}
    </div>
  );
}

export default Calculador;
