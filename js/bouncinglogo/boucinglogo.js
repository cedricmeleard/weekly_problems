const cornerHit = (dimensions, initialCoordinates, screenSize) => {
  let angleLogo = getAngleToTestCollision(initialCoordinates, dimensions);
  return checkAngleisAligned(angleLogo, screenSize);
};

/**
 * On first try we can get only right bottom corner
 * @param {*} initialCoordinates 
 * @param {*} dimensions 
 * @returns 
 */
const getAngleToTestCollision = (initialCoordinates, dimensions) => {
  return [initialCoordinates[0] + dimensions[0], initialCoordinates[1] + dimensions[1]];
};

/**
 * Since logo is going southeast by 1, only check we have same distance from borders
 * @param {*} from 
 * @param {*} to 
 * @returns 
 */
const checkAngleisAligned = (from, to) => {
  return to[0] - from[0] === to[1] - from[1];
};

export { cornerHit };
