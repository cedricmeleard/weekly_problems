/**
 * Produce value in range
 * @param {*} from number to start with
 * @param {*} to number to get value to
 * @returns 
 * @remarks can be written shorter but less readable
 */
const fromTo = (from, to) => {
  return () => {
    return from <= to ? from++ : undefined;
  };
};

export { fromTo };
