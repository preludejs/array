/** @returns array without nullish values. */
export const withoutNullish =
  <T>(values: T[]): NonNullable<T>[] =>
    values.filter((_: T): _ is NonNullable<T> => _ != null)

export default withoutNullish
