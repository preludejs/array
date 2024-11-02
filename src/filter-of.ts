import type { Predicate } from './predicate.js'

export const filterOf =
  <T>(predicate: Predicate<T>, thisArg?: unknown) =>
    (values: T[]): T[] =>
      values.filter(predicate, thisArg)

export default filterOf
