import randomIndex from './random-index.js'
import swapDelete from './swap-delete.js'

/**
 * Deletes and returns random element. Removed element is replaced by last element.
 * @throws {TypeError} if `values` array is empty.
 * @returns deleted element.
 */
const deleteSwapRandom =
  <T>(values: T[]): T =>
    swapDelete(values, randomIndex(values.length))

export default deleteSwapRandom
