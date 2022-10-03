const fibonacci = (first, second, number) => {
  if (number < 1) return [];
  if (number === 1) return [first];

  return [first, ...fibonacci(second, first + second, number - 1)];
};

export { fibonacci };
