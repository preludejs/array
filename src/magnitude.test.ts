import * as A from './index.js'

test('magnitude', () => {
  expect(A.magnitude([])).toBe(0)
  expect(A.magnitude([ 3, 4 ])).toBe(5)
})
