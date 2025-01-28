import Serie from "../src/Serie";

describe("Serie", () => {
  let serie;

  beforeEach(() => {
    serie = new Serie();
  });

  test("fibonacci de 5 debe ser 5", () => {
    expect(serie.fibonacci(5)).toBe(5);
  });

  test("triangular de 5 debe ser 15", () => {
    expect(serie.triangular(5)).toBe(15);
  });

  test("primo de 5 debe ser 11", () => {
    expect(serie.primo(5)).toBe(11);
  });

  test("calcularTermino de 5 debe ser -14", () => {
    expect(serie.calcularTermino(5)).toBe(-14);
  });
});
