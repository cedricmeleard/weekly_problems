function numberOfOnes(n) {
  // naive solution
  // create an array of all the numbers from 1 to n
  // remove those who does not have a 1 in them
  // foreach number in the array, count the number of 1s in it
  // reduce the array to a single number
  const numbers = Array.from(Array(n), (_, index) => index + 1);
  const numberstostrings = numbers.map(number => number.toString());
  const numbersCandidates = numberstostrings.filter(number => number.includes("1"));
  const numberOfOnes = numbersCandidates.map(number => number.match(/1/g).length);
  return numberOfOnes.reduce((a, b) => a + b, 0);
}

export default numberOfOnes;
