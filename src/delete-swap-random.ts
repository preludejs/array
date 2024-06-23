import randomIndex from './random-index.js'
import swapDeleteAt from './swap-delete-at.js'

/**
 * Deletes and returns random element. Removed element is replaced by last element.
 * @throws {TypeError} if `values` array is empty.
 * @returns deleted element.
 */
export const deleteSwapRandom =
  <T>(values: T[]): T =>
    swapDeleteAt(values, randomIndex(values.length))

export default deleteSwapRandom
