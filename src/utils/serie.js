class Serie {
  fibonacci(n) {
    if (n <= 1) return n;
    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  }

  triangular(n) {
    return (n * (n + 1)) / 2;
  }

  isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  primo(n) {
    let count = 0,
      num = 2;
    while (count < n) {
      if (this.isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  }

  calcularTermino(n) {
    return this.fibonacci(n) - 2 * this.triangular(n) + this.primo(n);
  }
}

export default Serie;
