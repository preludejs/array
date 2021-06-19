/** @returns value at `index` or `undefined`. */
const maybeAt =
  <T>(values: T[], index: number): undefined | T => {
    return values[index]
  }

export default maybeAt
