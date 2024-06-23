import * as A from './index.js'
import * as Cmp from '@prelude/cmp'

const cmpWith =
  (value: number) =>
    (a: number) =>
      Cmp.number(a, value)

test('bsearch', () => {
  expect(A.bsearch([ 1, 2, 3 ], cmpWith(1))).toBe(0)
  expect(A.bsearch([ 1, 2, 3 ], cmpWith(2))).toBe(1)
  expect(A.bsearch([ 1, 2, 3 ], cmpWith(3))).toBe(2)
  expect(A.bsearch([ 1, 2, 3 ], cmpWith(0))).toBe(-1)
  expect(A.bsearch([ 1, 2, 3 ], cmpWith(4))).toBe(-4)
  expect(A.bsearch([ 1, 2, 3 ], cmpWith(1.5))).toBe(-2)
})
