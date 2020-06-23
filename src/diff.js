/* For finding difference between two angles. */
const diff = (angl1, angl2) => {
  if (typeof (angl1) !== 'number' || typeof (angl2) !== 'number') {
    return NaN;
  }
  const difference = Math.abs(angl1 - angl2);
  const res = difference > 180 ? 360 - difference : difference;
  return res;
};
export default diff;
