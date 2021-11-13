/**
 * Like `at` but wraps using modulo on length.
 * @throws {TypeError} if array is empty or index is negative or not safe integer.
 */
const modulo =
  <T>(values: T[], index: number): T => {
    if (values.length === 0) {
      throw new TypeError('Expected non empty array.')
    }
    if (!Number.isSafeInteger(index) || index < 0) {
      throw new TypeError(`Expected non negative safe integer index, got ${index}.`)
    }
    return values[index % values.length]
  }

export default modulo
