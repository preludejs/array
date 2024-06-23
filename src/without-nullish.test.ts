import * as A from './index.js'

test('withoutNullish', () => {
  expect(A.withoutNullish([ 1, null, 3, undefined, 5 ])).toEqual([ 1, 3, 5 ])
})
