const _truncate = (input, sizeToTruncate) => {
  return input.replace(RegExp(`([a-zA-Z]{${sizeToTruncate}})[a-zA-Z]*`, "gi"), "$1");
};

const truncate = (input, sizeToTruncate) => {
  let result = [];
  let counter = 0;

  input.split("").forEach(char => {
    if (!checkIsLetter(char)) {
      result.push(char);
      counter = 0;
    } else {
      if (isUnderSizeToTruncate(counter)) {
        result.push(char);
      }
      counter++;
    }
  });

  function isUnderSizeToTruncate(counter) {
    return counter < sizeToTruncate;
  }
  function checkIsLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
  }

  return result.join("");
};

export { truncate };
