import * as A from './index.js'

test('atCycle', () => {
  expect(A.atCycle([ 'a', 'b', 'c' ], 0)).toBe('a')
  expect(A.atCycle([ 'a', 'b', 'c' ], 3)).toBe('a')
  expect(A.atCycle([ 'a', 'b', 'c' ], -1)).toBe('c')
})
