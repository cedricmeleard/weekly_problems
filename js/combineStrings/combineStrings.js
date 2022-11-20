const combineStrings = (inputStrings, size) => {
  let result = [],
    current = "";
  if (size <= 0) return result;

  inputStrings.filter(p => p.length <= size).forEach(element => {
    if (hasEnoughPlace(current, size, element)) {
      current = appendToString(current, element);
      return;
    }

    result.push(current);
    current = element;
  });
  if (current) result.push(current);
  return result.filter(p => p);
};

function appendToString(current, element) {
  return `${current} ${element}`.trim();
}

function hasEnoughPlace(existing, maxSize, elementToAdd) {
  const separatorSize = 1;
  return existing.length + elementToAdd.length + separatorSize <= maxSize;
}

export { combineStrings };
