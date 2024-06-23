/**
 * @returns first element of an array.
 * @throws if array length is 0.
 */
export const first =
  <T>(values: T[]): T => {
    if (values.length === 0) {
      throw new Error('Expected non empty array to get first element.')
    }
    return values[0]
  }

export default first
