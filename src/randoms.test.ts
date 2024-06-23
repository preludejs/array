import * as A from './index.js'

test('randoms', () => {
  expect(A.randoms(3)).toHaveLength(3)
})
