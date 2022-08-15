const OPEN_PARENTHESIS = "(",
  CLOSE_PARENTHESIS = ")";

/**
   * find the length of the longest valid parenthesis substring.
   * @param {string} s string to be checked
   * @returns number of substrings with balanced parentheses
   */
export function parensSubstring(s) {
  if (!s) return 0;
  const stack = [...s];

  let results = [];
  let opened = 0;
  let count = 0;

  while (stack.length) {
    const current = stack.shift();

    if (current === OPEN_PARENTHESIS) {
      opened++;
    } else if (current === CLOSE_PARENTHESIS) {
      opened--;
      if (opened < 0) {
        // error detected, reset & save current value
        results = addNewSubstringCount(results, count);
        opened = 0;
        count = 0;

        continue;
      } else {
        count++;
      }
    } else {
      throw new Error("Invalid input");
    }
  }
  // save last value if no error detected
  results = addNewSubstringCount(results, count);

  return results.reduce((a, b) => (a < b ? b : a), 0);
}

/**
 * Push new substring count to results array and return it.
 * @param {*} results table to push new value to
 * @param {*} count current parenthises pairs to push to table
 * @returns [...results, count * 2]
 */
function addNewSubstringCount(results, count) {
  return [...results, count * 2];
}
