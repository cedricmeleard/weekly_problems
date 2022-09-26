const ordinal = value => {
  ThrowIfInvalidParams(value);
  // we will only care about last 2 digit
  const twoLastDigitNumber = value % 100;
  if (isSpecialCaseNumber(twoLastDigitNumber)) return value + "th";
  const lastDigit = reduceToRevelantDigit(twoLastDigitNumber);

  switch (lastDigit) {
    case 1:
      return value + "st";
    case 2:
      return value + "nd";
    case 3:
      return value + "rd";
    default:
      return value + "th";
  }
};

function ThrowIfInvalidParams(value) {
  if (value <= 0) throw new Error("invalid number");
}

function reduceToRevelantDigit(twoLastDigitNumber) {
  return twoLastDigitNumber >= 10 ? twoLastDigitNumber % 10 : twoLastDigitNumber;
}

/**
 * Check for numbers that should not use st, nd or rd
 * @param {*} numberToCheck 
 * @returns if number is 11, 12 or 13
 */
function isSpecialCaseNumber(numberToCheck) {
  return [11, 12, 13].includes(numberToCheck);
}

export { ordinal };
