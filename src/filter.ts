const filter =
  <T>(predicate: (value: T, index: number, values: T[]) => boolean, thisArg?: unknown) =>
    (values: T[]): T[] =>
      values.filter(predicate, thisArg)

export default filter
