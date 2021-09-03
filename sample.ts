import randomIndex from './random-index'

/**
 * @returns random element.
 * @throws if array is empty.
 */
const sample =
  <T>(values: T[]): T =>
    values[randomIndex(values.length)]

export default sample
