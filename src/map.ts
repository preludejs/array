const map =
  <T, U>(mapping: (value: T, index: number, values: T[]) => U, thisArg?: unknown) =>
    (values: T[]): U[] =>
      values.map(mapping, thisArg)

export default map
