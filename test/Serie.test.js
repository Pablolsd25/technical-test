const { fibonacci, triangular, primo, serie } = require("../src/utils/serie");

test("fibonacci function", () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(10)).toBe(55);
});

test("triangular function", () => {
  expect(triangular(0)).toBe(0);
  expect(triangular(1)).toBe(1);
  expect(triangular(10)).toBe(55);
});

test("primo function", () => {
  expect(primo(0)).toBe(2);
  expect(primo(1)).toBe(2);
  expect(primo(10)).toBe(29);
});

test("serie function", () => {
  expect(serie(0)).toBe(2);
  expect(serie(1)).toBe(1);
  expect(serie(2)).toBe(-2);
  expect(serie(3)).toBe(-5);
  expect(serie(4)).toBe(-10);
  expect(serie(5)).toBe(-14);
  expect(serie(6)).toBe(-21);
  expect(serie(7)).toBe(-26);
  expect(serie(8)).toBe(-32);
  expect(serie(9)).toBe(-33);
});
