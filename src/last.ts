/**
 * @returns last element of an array.
 * @throws {Error}
 */
export const last =
  <T>(values: T[]): T => {
    if (values.length === 0) {
      throw new Error('Expected non empty array to get last element.')
    }
    return values[values.length - 1]
  }

export default last
