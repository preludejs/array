import type * as Cmp from '@prelude/cmp'

export const sort =
  <T>(values: T[], cmp: Cmp.t<T>): T[] =>
    values.sort(cmp)

export default sort
