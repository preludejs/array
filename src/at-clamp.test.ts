import * as A from './index.js'

test('atClamp', () => {
  expect(A.atClamp([ 'a', 'b', 'c' ], 0)).toBe('a')
  expect(A.atClamp([ 'a', 'b', 'c' ], 3)).toBe('c')
  expect(A.atClamp([ 'a', 'b', 'c' ], -1)).toBe('a')
})
