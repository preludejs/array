import * as A from './index.js'

test('last', () => {
  expect(A.last([ 7, 3, 5 ])).toBe(5)
  expect(() => A.last([])).toThrow()
})
