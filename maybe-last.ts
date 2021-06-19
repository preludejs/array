/** @returns last element of an array or `undefined`. */
const maybeLast =
  <T>(values: T[]): undefined | T => {
    return values[values.length - 1]
  }

export default maybeLast
