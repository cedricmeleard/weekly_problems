/**
 * will swap the adjacent elements of a list
 * @param {*} arrayToSwap 
 * @returns the swapped array
 */
export default function swapPairs(arrayToSwap) {
  const result = arrayToSwap.slice();
  for (let i = 0; i <= result.length - 2; i += 2) {
    const temp = result[i];
    result[i] = result[i + 1];
    result[i + 1] = temp;
  }
  return result;
}
