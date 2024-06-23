import magnitude from './magnitude.js'
import scaled from './scaled.js'

/**
 * @returns unit vector.
 * @see {@link normalize} for mutable variant.
 */
export const normalized =
  (values: readonly number[]) =>
    scaled(values, 1 / Math.max(Number.EPSILON, magnitude(values)))

export default normalized
