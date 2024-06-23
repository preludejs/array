import type { Predicate } from './predicate.js'

export const filter =
  <T>(predicate: Predicate<T>, thisArg?: unknown) =>
    (values: T[]): T[] =>
      values.filter(predicate, thisArg)

export default filter
