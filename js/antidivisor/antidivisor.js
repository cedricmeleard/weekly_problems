// anti divisor formulas from https://oeis.org/A066272/a066272a.html
const antiDivisor = function(n) {
  var result = [];
  for (let k = 2; k < n; k++) {
    if (isAntiDivisor(k, n)) result.push(k);
  }
  return result;
};

const isAntiDivisor = (k, n) => isEvenAntidivisor(k, n) || isOddAntidivisor(k, n);

const isEvenAntidivisor = (k, n) => {
  let x = (n - k / 2) / k;
  return isEven(k) && Number.isInteger(x) && x >= 1;
};

const isOddAntidivisor = (k, n) => {
  let nmodk = n % k;
  return isOdd(k) && (nmodk === (k - 1) / 2 || nmodk === (k + 1) / 2);
};

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 !== 0;

export default antiDivisor;
