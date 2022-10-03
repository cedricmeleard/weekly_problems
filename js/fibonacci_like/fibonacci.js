const fibonacci = (first, second, number) => {
  if (number < 1) return [];
  if (number === 1) return [first];

  return [first, ...fibonacci(second, first + second, number - 1)];
};

const isFibonacci = suite => {
  if (suite.length < 3) return true;

  const [beforebeforeLast, beforeLast, last] = suite.slice(-3);
  if (!checkSumIsFibonacciCompatible()) return false;

  return isFibonacci(suite.slice(-1));

  function checkSumIsFibonacciCompatible() {
    return beforebeforeLast + beforeLast === last;
  }
};
export { fibonacci, isFibonacci };
