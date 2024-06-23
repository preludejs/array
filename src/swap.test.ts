import * as A from './index.js'

test('swap', () => {
  expect(A.swap([ 1, 2, 3 ], 0, 1)).toEqual([ 2, 1, 3 ])
  expect(A.swap([ 1, 2, 3 ], 1, 2)).toEqual([ 1, 3, 2 ])
  expect(A.swap([ 1, 2, 3 ], 0, 2)).toEqual([ 3, 2, 1 ])
  expect(() => A.swap([ 1, 2, 3 ], 3, 0)).toThrow()
  expect(() => A.swap([ 1, 2, 3 ], -1, 0)).toThrow()
  expect(() => A.swap([ 1, 2, 3 ], 0.5, 0)).toThrow()
  expect(() => A.swap([ 1, 2, 3 ], 0, 3)).toThrow()
  expect(() => A.swap([ 1, 2, 3 ], 0, -1)).toThrow()
  expect(() => A.swap([ 1, 2, 3 ], 0, 0.5)).toThrow()
})
