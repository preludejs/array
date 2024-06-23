import * as A from './index.js'

test('sum', () => {
  expect(A.sum([])).toBe(0)
  expect(A.sum([ 1, 2, 3 ])).toBe(6)
})
