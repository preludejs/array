export type Mapping<T, U> =
  (value: T, index: number, values: T[]) =>
      U

export const mapOf =
  <T, U>(mapping: Mapping<T, U>, thisArg?: unknown) =>
    (values: T[]): U[] =>
      values.map(mapping, thisArg)

export default mapOf
