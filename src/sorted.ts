import type * as Cmp from '@prelude/cmp'
import clone from './clone.js'
import sort from './sort.js'

export const sorted =
  <T>(values: T[], cmp: Cmp.t<T>): T[] =>
    sort(clone(values), cmp)

export default sorted
