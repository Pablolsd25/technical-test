function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

function triangular(n) {
  return (n * (n + 1)) / 2;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primo(n) {
  let count = 0,
    num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}

function serie(n) {
  return fibonacci(n) - 2 * triangular(n) + primo(n);
}

module.exports = { fibonacci, triangular, primo, serie };
