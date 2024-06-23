/** @returns dot product of two vectors. */
export const dot =
  (values: number[], otherValues: number[]) => {
    let result = 0
    for (let i = 0; i < values.length; ++i) {
      result += values[i] * otherValues[i]
    }
    return result
  }

export default dot
