class Serie {
  static fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  }

  static triangular(n) {
    return (n * (n + 1)) / 2;
  }

  static esPrimo(n) {
    if (n < 2) return 0;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return 0;
    }
    return n;
  }

  static calculoSerie(n) {
    const fib = Serie.fibonacci(n);
    const tri = Serie.triangular(n);
    const primo = Serie.esPrimo(n);
    return fib - 2 * tri + primo;
  }
}

export default Serie;
