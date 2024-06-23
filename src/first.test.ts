import * as A from './index.js'

test('first', () => {
  expect(A.first([ 7, 3, 5 ])).toBe(7)
  expect(() => A.first([])).toThrow()
})
