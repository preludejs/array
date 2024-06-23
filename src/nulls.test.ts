import * as A from './index.js'

test('nulls', () => {
  expect(A.nulls(3)).toEqual([ null, null, null ])
})
