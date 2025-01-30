// test/Serie.test.js
const Serie = require("../src/utils/serie");

// Pruebas para la función fibonacci
test("fibonacci function", () => {
  expect(Serie.fibonacci(0)).toBe(0); // Fibonacci(0) = 0
  expect(Serie.fibonacci(1)).toBe(1); // Fibonacci(1) = 1
  expect(Serie.fibonacci(10)).toBe(55); // Fibonacci(10) = 55
});

// Pruebas para la función triangular
test("triangular function", () => {
  expect(Serie.triangular(0)).toBe(0); // Triangular(0) = 0
  expect(Serie.triangular(1)).toBe(1); // Triangular(1) = 1
  expect(Serie.triangular(10)).toBe(55); // Triangular(10) = 55
});

// Pruebas para la función esPrimo
test("esPrimo function", () => {
  expect(Serie.esPrimo(0)).toBe(0); // 0 no es primo
  expect(Serie.esPrimo(1)).toBe(0); // 1 no es primo
  expect(Serie.esPrimo(2)).toBe(2); // 2 es primo
  expect(Serie.esPrimo(4)).toBe(0); // 4 no es primo
  expect(Serie.esPrimo(7)).toBe(7); // 7 es primo
});

// Pruebas para la función calculoSerie
test("calculoSerie function", () => {
  expect(Serie.calculoSerie(0)).toBe(0); // Fibonacci(0) - 2*Triangular(0) + EsPrimo(0) = 0 - 0 + 0 = 0
  expect(Serie.calculoSerie(1)).toBe(-1); // Fibonacci(1) - 2*Triangular(1) + EsPrimo(1) = 1 - 2 + 0 = -1
  expect(Serie.calculoSerie(2)).toBe(-3); // Fibonacci(2) - 2*Triangular(2) + EsPrimo(2) = 1 - 6 + 2 = -3
  expect(Serie.calculoSerie(3)).toBe(-7); // Fibonacci(3) - 2*Triangular(3) + EsPrimo(3) = 2 - 12 + 3 = -7
  expect(Serie.calculoSerie(4)).toBe(-17); // Fibonacci(4) - 2*Triangular(4) + EsPrimo(4) = 3 - 20 + 0 = -17
  expect(Serie.calculoSerie(5)).toBe(-20); // Fibonacci(5) - 2*Triangular(5) + EsPrimo(5) = 5 - 30 + 5 = -20
  expect(Serie.calculoSerie(6)).toBe(-34); // Fibonacci(6) - 2*Triangular(6) + EsPrimo(6) = 8 - 42 + 0 = -34
  expect(Serie.calculoSerie(7)).toBe(-36); // Fibonacci(7) - 2*Triangular(7) + EsPrimo(7) = 13 - 56 + 7 = -36
  expect(Serie.calculoSerie(8)).toBe(-51); // Fibonacci(8) - 2*Triangular(8) + EsPrimo(8) = 21 - 72 + 0 = -51
  expect(Serie.calculoSerie(9)).toBe(-56); // Fibonacci(9) - 2*Triangular(9) + EsPrimo(9) = 34 - 90 + 0 = -56
  expect(Serie.calculoSerie(10)).toBe(-55); // Fibonacci(10) - 2*Triangular(10) + EsPrimo(10) = 55 - 110 + 0 = -55
});
