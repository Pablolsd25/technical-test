import Serie from "./serie";
const serie = new Serie();

function calcularSerie(n) {
  return (
    serie.fibonacci(n) - 2 * serie.triangular(n) + (serie.esPrimo(n) ? 1 : 0)
  );
}

export default calcularSerie;
