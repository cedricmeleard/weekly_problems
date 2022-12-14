const CLOSED = 1,
  OPEN = 0;

export default function passDoors(numberOfDoors, numberOfPasses) {
  let result = initClosedDoors(numberOfDoors);
  for (let currentPass = 1; currentPass <= numberOfPasses; currentPass++) {
    result = toggleDoors(result, currentPass);
  }
  return result.join(" ");

  function initClosedDoors(numberOfDoors) {
    return new Array(numberOfDoors).fill(CLOSED);
  }

  function toggleDoors(tab, currentPass) {
    return tab.map((cell, index) => doPassDoors(cell, index, currentPass));
  }

  function doPassDoors(cell, index, currentPass) {
    return candidateForCurrentPass(currentPass, index) ? toggle(cell) : cell;
  }

  function candidateForCurrentPass(currentPass, index) {
    return (index + 1) % currentPass === 0;
  }

  function toggle(cell) {
    return cell === CLOSED ? OPEN : CLOSED;
  }
}
