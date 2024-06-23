/**
 * @returns value at `index`.
 * @throws {Error} if index is out of bounds or not a safe integer.
 */
export const at =
  <T>(values: T[], index: number): T => {
    if (index < 0) {
      throw new Error(`Expected non-negative index, got ${index}.`)
    }
    if (index >= values.length) {
      throw new Error(`Expected index less than ${values.length}, got ${index}.`)
    }
    if (!Number.isSafeInteger(index)) {
      throw new Error(`Expected safe integer index, got ${index}.`)
    }
    return values[index]
  }

export default at
