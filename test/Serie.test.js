// test/Serie.test.js
const Serie = require("../src/utils/Serie"); // Cambiar import por require

describe("Serie", () => {
  let serie;

  beforeEach(() => {
    serie = new Serie();
  });

  test("calcula Fibonacci correctamente", () => {
    expect(serie.fibonacci(0)).toBe(0);
    expect(serie.fibonacci(1)).toBe(1);
    expect(serie.fibonacci(2)).toBe(1);
    expect(serie.fibonacci(3)).toBe(2);
  });

  test("calcula Triangular correctamente", () => {
    expect(serie.triangular(1)).toBe(1);
    expect(serie.triangular(2)).toBe(3);
    expect(serie.triangular(3)).toBe(6);
  });

  test("verifica si un número es primo", () => {
    expect(serie.esPrimo(1)).toBe(false);
    expect(serie.esPrimo(2)).toBe(true);
    expect(serie.esPrimo(3)).toBe(true);
    expect(serie.esPrimo(4)).toBe(false);
  });
});
