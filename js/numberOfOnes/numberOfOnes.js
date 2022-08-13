const ONE_NUMBER = "1";
/**
 * 
 * @param {*} n the number to count the number of 1s in
 * @returns {number} the number of 1s in the number
 * @description naive way to count the number of 1s in a number
 * @remarks 
 * - create an array of all the numbers from 1 to n
 * - remove those who does not have a 1 in them
 * - foreach number in the array, count the number of 1s in it (change match to custom count for perf)
 * - reduce the array to a single number
 */
export function numberOfOnes(n) {
  return create_filled_array_of_string(n)
    .filter(number => number.includes(ONE_NUMBER))
    .map(number => countOccurencesOf(number, ONE_NUMBER))
    .reduce((a, b) => a + b, 0);
}

/**
 * 
 * @param {*} n numbre to count the number of 1s in
 * @returns {number} the number of 1s in n
 * @remarks try optimizing the algorithm
 */
export function numberOfOnes_optimized(n) {
  let numbers = 0;
  let number = "";

  for (let i = 1; i <= n; i++) {
    number = i.toString();
    if (number.includes(ONE_NUMBER)) numbers += countOccurencesOf(number, ONE_NUMBER);
  }
  return numbers;
}

/**
 * Count number of occurences of a character in a string
 * @param {*} textEntry the text to search in
 * @param {*} charToCount the char to count in the text
 * @returns just the number of occurences of the char in the text
 */
function countOccurencesOf(textEntry, charToCount) {
  let result = 0;
  for (let i = 0; i < textEntry.length; i++) {
    if (textEntry[i] === charToCount) {
      result++;
    }
  }
  return result;
}

/**
 * Generate an array of strings of length n filled with numbers from 1 to n
 * @param {*} arraySize siez of the array to create
 * @returns an array of strings of size arraySize
 * Example: create_filled_array_of_string(3) => ["1", "2", "3"]
 */
function create_filled_array_of_string(arraySize) {
  return Array.from(Array(arraySize), (_, index) => (index + 1).toString());
}
