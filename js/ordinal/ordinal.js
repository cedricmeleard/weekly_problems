const ordinal = value => {
  // we will only care about last 2 digit
  const reducedNumber = value % 100;
  // ends with 1 but special case
  if (reducedNumber === 11) return value + "th";
  // extract last digit
  const lastDigit = reducedNumber >= 10 ? reducedNumber % 10 : reducedNumber;

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
