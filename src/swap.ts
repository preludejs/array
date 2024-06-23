/** In-place swap elements at index `i` and `j`. */
export const swap =
  <T>(mutableValues: T[], i: number, j: number): T[] => {
    if (i < 0 || i >= mutableValues.length) {
      throw new TypeError(`Out of bounds index ${i}, length ${mutableValues.length}.`)
    }
    if (j < 0 || j >= mutableValues.length) {
      throw new TypeError(`Out of bounds index ${i}, length ${mutableValues.length}.`)
    }
    [ mutableValues[j], mutableValues[i] ] = [ mutableValues[i], mutableValues[j] ]
    return mutableValues
  }

export default swap
