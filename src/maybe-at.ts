/** @returns value at `index` or `undefined`. */
export const maybeAt =
  <T>(values: T[], index: number): undefined | T =>
    values[index]

export default maybeAt
