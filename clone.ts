const clone =
  <T>(values: readonly T[]): T[] =>
    values.slice()

export default clone
