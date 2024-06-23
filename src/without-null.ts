/** @returns array without nulls. */
export const withoutNull =
  <T>(values: T[]): Exclude<T, null>[] =>
    values.filter((_: T): _ is Exclude<T, null> => _ !== null)

export default withoutNull
