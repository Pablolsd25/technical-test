// src/utils/serie.js
class Serie {
  static fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0,
      b = 1,
      temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  static triangular(n) {
    return (n * (n + 1)) / 2;
  }

  static esPrimo(n) {
    if (n <= 1) return 0;
    for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
      if (n % i === 0) return 0;
    }
    return n;
  }

  static calculoSerie(n) {
    return this.fibonacci(n) - 2 * this.triangular(n) + this.esPrimo(n);
  }
}

// Exportación en ES Modules
export default Serie;
