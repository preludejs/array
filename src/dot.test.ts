import * as A from './index.js'

test('dot', () => {
  expect(A.dot([ 1, 2, 3 ], [ 4, 5, 6 ])).toBe(32)
  expect(A.dot([ 1, 2, 3 ], [ 4, 5, 6, 7 ])).toBe(32)
  expect(A.dot([ 1, 2, 3, 4 ], [ 4, 5, 6 ])).toBe(32)
  expect(A.dot([ 1, 2, 3 ], [ 4, 5 ])).toBe(14)
  expect(A.dot([ 1, 2 ], [ 4, 5, 6 ])).toBe(14)
  expect(A.dot([ 1, 2 ], [ 4 ])).toBe(4)
  expect(A.dot([ 1 ], [ 4 ])).toBe(4)
  expect(A.dot([], [])).toBe(0)
})
