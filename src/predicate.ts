export type Predicate<T> =
  (value: T, index: number, values: T[]) =>
      boolean
