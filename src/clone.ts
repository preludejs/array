export const clone =
  <T>(values: readonly T[]): T[] =>
    values.slice(0)

export default clone
