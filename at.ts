/**
 * @returns value at `index`.
 * @throws {TypeError} if index is out of bounds.
 */
const at =
  <T>(values: T[], index: number): T => {
    if (index < 0 || index >= values.length) {
      throw new TypeError(`Index ${index} out of bounds for array of length ${values.length}.`)
    }
    return values[index]
  }

export default at
