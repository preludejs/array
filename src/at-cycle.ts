/**
 * Like `at` but wraps using modulo on length.
 * @throws {Error} if array is empty or index is not a safe integer.
 */
export const atCycle =
  <T>(values: T[], index: number): T => {
    if (!Number.isSafeInteger(index)) {
      throw new Error(`Expected safe integer index, got ${index}.`)
    }
    const n = values.length
    if (n === 0) {
      throw new Error('Expected non empty array.')
    }
    return values[((index % n) + n) % n]
  }

export default atCycle
