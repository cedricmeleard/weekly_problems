const _truncate = (input, sizeToTruncate) => {
  return input.replace(RegExp(`([a-zA-Z]{${sizeToTruncate}})[a-zA-Z]*`, "gi"), "$1");
};

const truncate = (input, sizeToTruncate) => {
  let counter = 0;
  const NOTHING = "";
  const isNotALetter = char => char.toLowerCase() === char.toUpperCase();
  const isUnderTheSizeToTruncate = () => counter < sizeToTruncate;

  return input
    .split("")
    .map(char => {
      if (isNotALetter(char)) counter = 0;
      else if (isUnderTheSizeToTruncate()) counter++;
      else char = NOTHING; //not adding when over size limit

      return char;
    })
    .join("");
};

export { truncate, _truncate };
