import * as A from './index.js'

test('at', () => {
  expect(A.at([ 1, 2, 3 ], 0)).toBe(1)
  expect(A.at([ 1, 2, 3 ], 1)).toBe(2)
  expect(A.at([ 1, 2, 3 ], 2)).toBe(3)
  expect(() => A.at([ 1, 2, 3 ], 3)).toThrow()
  expect(() => A.at([ 1, 2, 3 ], -1)).toThrow()
  expect(() => A.at([ 1, 2, 3 ], 0.5)).toThrow()
})
