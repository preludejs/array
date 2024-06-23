/** @returns first element of an array or `undefined`. */
export const maybeFirst =
  <T>(values: T[]): undefined | T =>
    values[0]

export default maybeFirst
