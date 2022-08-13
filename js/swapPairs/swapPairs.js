/**
 * will swap the adjacent elements of a list
 * @param {*} arrayToSwap 
 * @returns the swapped array
 */
const STEP_INCREMENT = 2;

export default function swapPairs(arrayToSwap) {
  if (!arrayToSwap) return [];
  // copy array locally to prevent side effects
  const result = [...arrayToSwap];
  for (let position = 0; position <= result.length - STEP_INCREMENT; position += STEP_INCREMENT) {
    swapPairAtIndex.call(result, position);
  }
  return result;

  /**
   * invert the elements n & n+1 at the given position n
   * @param {*} firstIndexToSwap index to start swapping from
   * @returns void
   */
  function swapPairAtIndex(firstIndexToSwap) {
    const temp = this[firstIndexToSwap];
    this[firstIndexToSwap] = this[firstIndexToSwap + 1];
    this[firstIndexToSwap + 1] = temp;
  }
}
