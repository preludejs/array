/** In-place swap elements at index `i` and `j`. */
const swap =
  <T>(values: T[], i: number, j: number): T[] => {
    if (i < 0 || i >= values.length) {
      throw new TypeError(`Out of bounds index ${i}, length ${values.length}.`)
    }
    if (j < 0 || j >= values.length) {
      throw new TypeError(`Out of bounds index ${i}, length ${values.length}.`)
    }
    [ values[j], values[i] ] = [ values[i], values[j] ]
    return values
  }

export default swap
