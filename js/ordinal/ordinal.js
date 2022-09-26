const ordinal = value => {
  // we will only care about last 2 digit
  const twoLastDigitNumber = value % 100;
  // ends with 1 but special case
  if ([11, 12, 13].includes(twoLastDigitNumber)) return value + "th";
  // extract last digit
  const lastDigit = twoLastDigitNumber >= 10 ? twoLastDigitNumber % 10 : twoLastDigitNumber;

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

export { ordinal };
