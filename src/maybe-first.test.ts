import * as A from './index.js'

test('maybeFirst', () => {
  expect(A.maybeFirst([ 7, 3, 5 ])).toBe(7)
  expect(A.maybeFirst([])).toBe(undefined)
})
