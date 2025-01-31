import Serie from "../src/utils/Serie.js";

test("fibonacci function", () => {
  const expectedFibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  for (let i = 0; i <= 10; i++) {
    expect(Serie.fibonacci(i)).toBe(expectedFibonacci[i]);
  }
});

// Pruebas para la función triangular
test("triangular function", () => {
  const expectedTriangular = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
  for (let i = 0; i <= 10; i++) {
    expect(Serie.triangular(i)).toBe(expectedTriangular[i]);
  }
});

// Pruebas para la función esPrimo
test("esPrimo function", () => {
  const expectedPrimos = [0, 0, 2, 3, 0, 5, 0, 7, 0, 0, 0];
  for (let i = 0; i <= 10; i++) {
    expect(Serie.esPrimo(i)).toBe(expectedPrimos[i]);
  }
});

test("calculoSerie function", () => {
  const expectedCalculoSerie = [
    0, -1, -3, -7, -17, -20, -34, -36, -51, -56, -55,
  ];
  for (let i = 0; i <= 10; i++) {
    const { resultadoFinal } = Serie.calculoSerie(i); // Desestructurando solo resultadoFinal
    expect(resultadoFinal).toBe(expectedCalculoSerie[i]);
  }
});
