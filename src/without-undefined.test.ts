import * as A from './index.js'

test('withoutUndefined', () => {
  expect(A.withoutUndefined([ 1, null, 3, undefined, 5 ])).toEqual([ 1, null, 3, 5 ])
})
