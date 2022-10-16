const _truncate = (input, sizeToTruncate) => {
  return input.replace(RegExp(`([a-zA-Z]{${sizeToTruncate}})[a-zA-Z]*`, "gi"), "$1");
};

const truncate = (input, sizeToTruncate) => {
  let consecutiveLetterCount = 0;
  const EMPTY = "";

  return [...input].reduce(
    (result, current) => (result += isALetter(current) && isOverTheSizeToTruncate() ? EMPTY : current),
    EMPTY
  );

  function isALetter(charToTest) {
    const isALetter = charToTest.toLowerCase() !== charToTest.toUpperCase();
    if (!isALetter) consecutiveLetterCount = 0;
    return isALetter;
  }
  function isOverTheSizeToTruncate() {
    consecutiveLetterCount++;
    return consecutiveLetterCount > sizeToTruncate;
  }
};

export { truncate, _truncate };
