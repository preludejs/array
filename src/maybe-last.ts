/** @returns last element of an array or `undefined`. */
export const maybeLast =
  <T>(values: T[]): undefined | T =>
    values[values.length - 1]

export default maybeLast
