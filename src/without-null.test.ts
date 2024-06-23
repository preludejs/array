import * as A from './index.js'

test('withoutNull', () => {
  expect(A.withoutNull([ 1, null, 3, undefined, 5 ])).toEqual([ 1, 3, undefined, 5 ])
})
