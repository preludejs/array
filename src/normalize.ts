import magnitude from './magnitude.js'
import scale from './scale.js'

/** Converts `values` vector into unit vector inplace. */
export const normalize =
  (values: number[]) =>
    scale(values, 1 / Math.max(Number.EPSILON, magnitude(values)))

export default normalize
