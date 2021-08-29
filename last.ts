/**
 * @returns last element of an array.
 * @throws {TypeError}
 */
const last =
  <T>(values: readonly T[]): T => {
    if (!values.length) {
      throw new TypeError('Expected non empty array to get last element.')
    }
    return values[values.length - 1]
  }

export default last
