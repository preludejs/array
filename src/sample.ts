import randomIndex from './random-index.js'

/**
 * @returns random element.
 * @throws if array is empty.
 */
export const sample =
  <T>(values: T[]): T =>
    values[randomIndex(values.length)]

export default sample
