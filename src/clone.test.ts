import * as A from './index.js'

test('clone', () => {
  const values = [ 1, 2, 3 ]
  const cloned = A.clone(values)
  expect(cloned).toEqual(values)
  cloned[0] = 0
  expect(cloned).not.toEqual(values)
})
