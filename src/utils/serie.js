class Serie {
  // Método para calcular el número de Fibonacci
  fibonacci(n) {
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

  // Método para calcular el número triangular
  triangular(n) {
    return (n * (n + 1)) / 2;
  }

  // Método para verificar si un número es primo
  esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

module.exports = Serie;
