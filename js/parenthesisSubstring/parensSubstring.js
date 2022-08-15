const OPEN_PARENTHESIS = "(";

/**
   * find the length of the longest valid parenthesis substring.
   * @param {string} s string to be checked
   * @returns number of substrings with balanced parentheses
   */
export function parensSubstring(s) {
  s = cleanupParameter(s);

  if (!s) return 0;
  const stack = [...s];
  let completedParenthesisElementCount = 0;
  let currentMax = 0;
  let pairs = 0;

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === OPEN_PARENTHESIS) {
      completedParenthesisElementCount++;
    } else {
      completedParenthesisElementCount--;
      if (isInvalidExpression(completedParenthesisElementCount)) {
        break;
      }
      // we had a pair of parentheses here
      pairs++;
    }

    if (isCompletedExpression(completedParenthesisElementCount)) {
      currentMax = currentMax + 2 * pairs;
      pairs = 0;
    }
  }

  let nextResults = parensSubstring(s.substring(1));
  return currentMax < nextResults ? nextResults : currentMax;
}

/**
 * check if the expression is completed
 * @param {int} completedParenthesisElementCount 
 * @returns expression is completed
 */
function isCompletedExpression(completedParenthesisElementCount) {
  return completedParenthesisElementCount === 0;
}

/**
 * check if the expression is invalid
 * @param {int} completedParenthesisElementCount
 * @returns expression is invalid (when lower than 0)
 */
function isInvalidExpression(completedParenthesisElementCount) {
  return completedParenthesisElementCount < 0;
}

/**
 * remove closing paremethesis from the start and opening from the.
 * @param {*} string parameter to be checked 
 * return string without first and last parenthises
 * )))))()((((( will be ()
 */
function cleanupParameter(s) {
  s = s.trimStart(")").trimEnd("(");
  return s;
}
