import unsafeSwap from './unsafe-swap.js'

/**
 * Swaps inplace elements at provided indices.
 * @throws {Error} when provided indices are out of bounds or not safe integers.
 */
export const swap =
  <T>(mutableValues: T[], i: number, j: number): T[] => {
    if (i < 0) {
      throw new Error(`Expected non-negative index, got ${i}.`)
    }
    if (j < 0) {
      throw new Error(`Expected non-negative index, got ${j}.`)
    }
    if (i >= mutableValues.length) {
      throw new Error(`Expected index less than ${mutableValues.length}, got ${i}.`)
    }
    if (j >= mutableValues.length) {
      throw new Error(`Expected index less than ${mutableValues.length}, got ${j}.`)
    }
    if (!Number.isSafeInteger(i)) {
      throw new Error(`Expected safe integer index, got ${i}.`)
    }
    if (!Number.isSafeInteger(j)) {
      throw new Error(`Expected safe integer index, got ${j}.`)
    }
    return unsafeSwap(mutableValues, i, j)
  }

export default swap
