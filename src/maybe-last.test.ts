import * as A from './index.js'

test('maybeLast', () => {
  expect(A.maybeLast([ 7, 3, 5 ])).toBe(5)
  expect(A.maybeLast([])).toBe(undefined)
})
