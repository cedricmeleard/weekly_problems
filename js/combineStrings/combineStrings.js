const combineStrings = (inputStrings, size) => {
  if (size <= 0) return [];

  let result = [""];
  inputStrings.filter(p => p.length <= size).forEach(element => {
    let current = result[result.length - 1];
    if (hasEnoughPlace(current, size, element)) {
      result[result.length - 1] = appendToString(current, element);
      return;
    }

    result.push(element);
  });

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
