const cornerHit = (dimensions, initialCoordinates, screenSize) => {
  let angleLogo = getAngleToTestCollision(initialCoordinates, dimensions);

  return checkIsOnLineToCorner(angleLogo, screenSize);
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
const checkIsOnLineToCorner = (from, to) => {
  return to[0] - from[0] === to[1] - from[1];
};

const direction = {
  SOUTHEAST: [1, 1],
  NORTHWEST: [-1, -1],
  SOUTHWEST: [-1, 1],
  NORTHEAST: [1, -1]
};
class BouncingLogo {
  constructor() {
    this.screenSize = [100, 100];
    this.dimensions = [5, 5];
    // top left coordinates
    this.initialCoordinates = [0, 0];
    this.direction = direction.SOUTHEAST;
  }

  withScreenSize(screenSize) {
    this.screenSize = screenSize;
    return this;
  }
  withStartPosition(initialCoordinates) {
    this.initialCoordinates = initialCoordinates;
    return this;
  }
  withDimensions(dimensions) {
    this.dimensions = dimensions;
    return this;
  }

  getNumberOfMove() {
    let count = 1;
    // this can lead to infinite loop, therefore we limit to 100 bouncing round
    while (!this.checkIsOnLineToCorner() && count < 100) {
      count++;
    }
    return count;
  }

  getAngleToTestCollision() {
    switch (this.direction) {
      case direction.SOUTHEAST:
        return [this.initialCoordinates[0] + this.dimensions[0], this.initialCoordinates[1] + this.dimensions[1]];
      default:
        throw Error("getAngleToTestCollision - pas bon");
    }
  }

  checkIsOnLineToCorner() {
    var actualPosition = this.getAngleToTestCollision();
    switch (this.direction) {
      case direction.SOUTHEAST:
        return this.screenSize[0] - actualPosition[0] === this.screenSize[1] - actualPosition[1];
      default:
        throw Error("checkIsOnLineToCorner - pas bon");
    }
  }
}

export { cornerHit, BouncingLogo };
