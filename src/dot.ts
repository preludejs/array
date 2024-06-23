/** @returns dot product of two vectors. */
export const dot =
  (values: number[], otherValues: number[]) => {
    let result = 0
    const n = Math.min(values.length, otherValues.length)
    for (let i = 0; i < n; ++i) {
      result += values[i] * otherValues[i]
    }
    return result
  }

export default dot
