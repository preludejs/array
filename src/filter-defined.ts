/** @returns defined elements from provided `values` array, filtering out `undefined` elements. */
const filterDefined =
  <T>(values: T[]): Exclude<T, undefined>[] =>
    values.filter((_: T): _ is Exclude<T, undefined> => typeof _ !== 'undefined')

export default filterDefined
