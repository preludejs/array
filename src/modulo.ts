/**
 * Like `at` but wraps using modulo on length.
 * @throws {TypeError} if array is empty or index is not a safe integer.
 */
export const modulo =
  <T>(values: T[], index: number): T => {
    if (!Number.isSafeInteger(index)) {
      throw new TypeError(`Expected safe integer index, got ${index}.`)
    }
    const n = values.length
    if (n === 0) {
      throw new TypeError('Expected non empty array.')
    }
    return values[((index % n) + n) % n]
  }

export default modulo
